#Requires -Version 5.1
<#
.SYNOPSIS
  Vysází životopis do všech kombinací varianta x jazyk.

.DESCRIPTION
  Veřejné varianty jdou do public/assets/resume/ — tedy tam, kam už odkazuje
  hero.cvUrl v src/data/content.ts. Cílené životopisy (-TargetFile) jdou do
  cv/out/, což je mimo git i mimo web: CV napsané pro jednu firmu nemá být
  k nalezení druhou.

.EXAMPLE
  .\cv\build.ps1
  .\cv\build.ps1 -Variant gis -Lang en -Open
  .\cv\build.ps1 -TargetFile cv\targeted\acme.typ -Lang en
#>
[CmdletBinding()]
param(
    [ValidateSet('general', 'ai', 'geoai', 'gis', 'academic')]
    [string[]] $Variant = @('general', 'ai', 'geoai', 'gis', 'academic'),

    [ValidateSet('cz', 'en')]
    [string[]] $Lang = @('cz', 'en'),

    [string] $TargetFile,
    [switch] $Png,
    [switch] $Open
)

$ErrorActionPreference = 'Stop'

$CvRoot     = $PSScriptRoot
$RepoRoot   = Split-Path -Parent $CvRoot
$PublicOut  = Join-Path $RepoRoot 'public\assets\resume'
$PrivateOut = Join-Path $CvRoot 'out'
$Entry      = Join-Path $CvRoot 'cv.typ'

# ── typst ───────────────────────────────────────────────────────────────────
# Po instalaci přes winget se PATH v už otevřeném shellu neaktualizuje, proto
# fallback do instalační složky.
$typst = $null
$cmd = Get-Command typst -ErrorAction SilentlyContinue
if ($null -ne $cmd) {
    $typst = $cmd.Source
} else {
    $shim = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Links\typst.exe'
    if (Test-Path $shim) {
        $typst = $shim
    } else {
        $pkgRoot = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages'
        if (Test-Path $pkgRoot) {
            $hit = Get-ChildItem $pkgRoot -Recurse -Filter 'typst.exe' -ErrorAction SilentlyContinue |
                Select-Object -First 1
            if ($null -ne $hit) { $typst = $hit.FullName }
        }
    }
}
if ($null -eq $typst) {
    throw "typst nenalezen. Nainstaluj:  winget install --id Typst.Typst"
}
Write-Host ("typst: " + $typst) -ForegroundColor DarkGray
& $typst --version

foreach ($dir in @($PublicOut, $PrivateOut)) {
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
}

# ── seznam úloh ─────────────────────────────────────────────────────────────
$ext = 'pdf'
if ($Png) { $ext = 'png' }

$jobs = @()

if ($TargetFile) {
    $target = Resolve-Path $TargetFile
    $slug = [System.IO.Path]::GetFileNameWithoutExtension($target)
    foreach ($l in $Lang) {
        $suffix = ''
        if ($l -eq 'en') { $suffix = '_en' }
        $name = 'Petr_Mikeska_CV_' + $slug + $suffix
        if ($Png) { $name = $name + '_{p}' }
        $jobs += [pscustomobject]@{
            Variant = 'targeted'
            Lang    = $l
            Out     = Join-Path $PrivateOut ($name + '.' + $ext)
            Extra   = @('--input', ('targeted-file=' + $target))
        }
    }
} else {
    foreach ($v in $Variant) {
        foreach ($l in $Lang) {
            $name = 'Petr_Mikeska_CV'
            if ($v -ne 'general') { $name = $name + '_' + $v }
            if ($l -eq 'en') { $name = $name + '_en' }
            if ($Png) { $name = $name + '_{p}' }
            $jobs += [pscustomobject]@{
                Variant = $v
                Lang    = $l
                Out     = Join-Path $PublicOut ($name + '.' + $ext)
                Extra   = @()
            }
        }
    }
}

# ── sazba ───────────────────────────────────────────────────────────────────
$failed = @()
$built = @()

foreach ($job in $jobs) {
    $label = Split-Path $job.Out -Leaf
    Write-Host ("-> " + $label.PadRight(38)) -NoNewline

    $cliArgs = @(
        'compile',
        '--root', $RepoRoot,
        '--input', ('variant=' + $job.Variant),
        '--input', ('lang=' + $job.Lang),
        # Jen fonty zabudované v binárce (Libertinus Serif). Bez toho by sazba
        # dopadla jinak na jiném stroji.
        '--ignore-system-fonts'
    )
    if ($Png) { $cliArgs += @('--format', 'png', '--ppi', '150') }
    $cliArgs += $job.Extra
    $cliArgs += @($Entry, $job.Out)

    & $typst @cliArgs
    if ($LASTEXITCODE -eq 0) {
        $built += $job
        if ($Png) {
            Write-Host "  ok" -ForegroundColor Green
        } else {
            $kb = [math]::Round((Get-Item $job.Out).Length / 1KB)
            Write-Host ("  ok  " + $kb + " KB") -ForegroundColor Green
        }
    } else {
        Write-Host "  CHYBA" -ForegroundColor Red
        $failed += $label
    }
}

# ── shrnutí ─────────────────────────────────────────────────────────────────
Write-Host ""
Write-Host ("hotovo " + $built.Count + " / " + $jobs.Count) -ForegroundColor Cyan
if ($failed.Count -gt 0) {
    Write-Host ("selhalo: " + ($failed -join ', ')) -ForegroundColor Red
    exit 1
}
if ($Open -and $built.Count -gt 0) { Invoke-Item $built[0].Out }
