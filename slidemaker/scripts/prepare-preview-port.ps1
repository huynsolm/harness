param(
  [int] $RequiredPort = 3000,
  [int] $SweepStart = 3000,
  [int] $SweepEnd = 3010
)

$ErrorActionPreference = "Stop"

if ($RequiredPort -ne 3000) {
  throw "Preview port policy violation: this project only permits port 3000."
}

if ($SweepStart -gt 3000 -or $SweepEnd -lt 3000) {
  throw "Preview cleanup range must include port 3000."
}

Write-Host "Preparing preview port 3000..."
Write-Host "Checking listening ports $SweepStart-$SweepEnd before starting preview."

$connections = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -ge $SweepStart -and $_.LocalPort -le $SweepEnd }

if (-not $connections) {
  Write-Host "No listening processes found near port 3000."
  exit 0
}

$processIds = $connections |
  Select-Object -ExpandProperty OwningProcess -Unique |
  Where-Object { $_ -and $_ -ne $PID }

foreach ($processId in $processIds) {
  $ports = ($connections |
    Where-Object { $_.OwningProcess -eq $processId } |
    Select-Object -ExpandProperty LocalPort -Unique |
    Sort-Object) -join ", "

  try {
    $process = Get-Process -Id $processId -ErrorAction Stop
    Write-Host "Stopping PID $processId ($($process.ProcessName)) listening on port(s): $ports"
    Stop-Process -Id $processId -Force -ErrorAction Stop
  } catch {
    Write-Host "Process $processId already stopped or unavailable."
  }
}

Start-Sleep -Milliseconds 500

$remaining = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -ge $SweepStart -and $_.LocalPort -le $SweepEnd }

if ($remaining) {
  $remainingPorts = ($remaining | Select-Object -ExpandProperty LocalPort -Unique | Sort-Object) -join ", "
  throw "Could not clear preview port range $SweepStart-$SweepEnd. Still listening: $remainingPorts"
}

Write-Host "Preview port range is clean. Port 3000 is ready."
