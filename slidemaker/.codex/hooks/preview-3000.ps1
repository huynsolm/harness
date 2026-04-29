$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $projectRoot

powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prepare-preview-port.ps1
npm run preview
