param(
  [switch]$IncludeAll
)

$ErrorActionPreference = 'Stop'

function Assert-Administrator {
  $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = New-Object Security.Principal.WindowsPrincipal($identity)
  $isAdmin = $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

  if (-not $isAdmin) {
    throw 'Execute este script em um terminal PowerShell aberto como Administrador.'
  }
}

function Assert-Winget {
  if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    throw 'winget nao encontrado. Atualize o App Installer da Microsoft Store.'
  }
}

function Upgrade-Package([string]$PackageId) {
  Write-Host "-> Atualizando $PackageId" -ForegroundColor Cyan

  winget upgrade `
    --id $PackageId `
    --exact `
    --silent `
    --accept-package-agreements `
    --accept-source-agreements

  if ($LASTEXITCODE -ne 0) {
    Write-Warning "Nao foi possivel concluir upgrade de $PackageId (exit code: $LASTEXITCODE)."
  }
}

Assert-Administrator
Assert-Winget

$coreDevPackages = @(
  'Git.Git',
  'Microsoft.VisualStudioCode',
  'Python.Python.3.12',
  'Python.Launcher'
)

$optionalPackages = @(
  'Microsoft.VCRedist.2015+.x64',
  'Microsoft.VCRedist.2015+.arm64'
)

Write-Host 'Iniciando upgrades de ferramentas de desenvolvimento...' -ForegroundColor Green

foreach ($pkg in $coreDevPackages) {
  Upgrade-Package -PackageId $pkg
}

if ($IncludeAll) {
  Write-Host 'Flag -IncludeAll ativa: incluindo runtimes opcionais.' -ForegroundColor Yellow
  foreach ($pkg in $optionalPackages) {
    Upgrade-Package -PackageId $pkg
  }
}

Write-Host 'Processo finalizado.' -ForegroundColor Green
