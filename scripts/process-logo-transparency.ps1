# Remove white background and build light/dark transparent logo assets.
Add-Type -AssemblyName System.Drawing

$public = Join-Path $PSScriptRoot "..\public"
$src = Join-Path $public "factorbeam-logo.png"

function New-TransparentBitmap([System.Drawing.Bitmap]$source) {
  $w = $source.Width
  $h = $source.Height
  $out = New-Object System.Drawing.Bitmap $w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  $threshold = 238

  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $c = $source.GetPixel($x, $y)
      $r = [int]$c.R
      $g = [int]$c.G
      $b = [int]$c.B

      # Near-white background → fully transparent
      if ($r -ge $threshold -and $g -ge $threshold -and $b -ge $threshold) {
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        continue
      }

      # Anti-aliased white fringe → partial alpha
      $min = [Math]::Min($r, [Math]::Min($g, $b))
      if ($min -ge 220 -and $r -ge 220 -and $g -ge 220 -and $b -ge 220) {
        $alpha = [Math]::Max(0, 255 - ($min - 215) * 18)
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
        continue
      }

      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
    }
  }

  return $out
}

function New-DarkBitmap([System.Drawing.Bitmap]$lightTransparent) {
  $w = $lightTransparent.Width
  $h = $lightTransparent.Height
  $out = New-Object System.Drawing.Bitmap $w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb

  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $c = $lightTransparent.GetPixel($x, $y)
      if ($c.A -lt 8) {
        $out.SetPixel($x, $y, $c)
        continue
      }

      $r = [int]$c.R
      $g = [int]$c.G
      $b = [int]$c.B
      $lum = 0.2126 * $r + 0.7152 * $g + 0.0722 * $b

      # Dark ink ("Factor") → light foreground for dark mode
      if ($lum -lt 95) {
        $t = [Math]::Min(1.0, (95 - $lum) / 95.0)
        $nr = [int]($r + (242 - $r) * $t)
        $ng = [int]($g + (242 - $g) * $t)
        $nb = [int]($b + (247 - $b) * $t)
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($c.A, $nr, $ng, $nb))
      }
      else {
        $out.SetPixel($x, $y, $c)
      }
    }
  }

  return $out
}

function Save-CropMark([System.Drawing.Bitmap]$source, [string]$path, [int]$crop) {
  $rect = New-Object System.Drawing.Rectangle 0, 0, $crop, $crop
  $bmp = New-Object System.Drawing.Bitmap $crop, $crop, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::Transparent)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($source, (New-Object System.Drawing.Rectangle 0, 0, $crop, $crop), $rect, [System.Drawing.GraphicsUnit]::Pixel)
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

$original = [System.Drawing.Bitmap]::FromFile($src)
$transparent = New-TransparentBitmap $original
$dark = New-DarkBitmap $transparent

$transparentPath = Join-Path $public "factorbeam-logo.png"
$darkPath = Join-Path $public "factorbeam-logo-dark.png"
$transparent.Save($transparentPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dark.Save($darkPath, [System.Drawing.Imaging.ImageFormat]::Png)

$crop = [Math]::Min($transparent.Height, [int]($transparent.Width * 0.22))
Save-CropMark $transparent (Join-Path $public "logo-mark.png") $crop
Save-CropMark $dark (Join-Path $public "logo-mark-dark.png") $crop
Save-CropMark $transparent (Join-Path $public "favicon.png") $crop

# OG: transparent logo on soft brand tint (not a harsh white box)
$ogW = 1200
$ogH = 630
$og = New-Object System.Drawing.Bitmap $ogW, $ogH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
$ogG = [System.Drawing.Graphics]::FromImage($og)
$ogG.Clear([System.Drawing.Color]::FromArgb(255, 238, 237, 254)) # #EEEDFE purple-light
$scale = [Math]::Min(($ogW * 0.72) / $transparent.Width, ($ogH * 0.45) / $transparent.Height)
$drawW = [int]($transparent.Width * $scale)
$drawH = [int]($transparent.Height * $scale)
$dx = [int](($ogW - $drawW) / 2)
$dy = [int](($ogH - $drawH) / 2)
$ogG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ogG.DrawImage($transparent, $dx, $dy, $drawW, $drawH)
$og.Save((Join-Path $public "og.png"), [System.Drawing.Imaging.ImageFormat]::Png)

$original.Dispose()
$transparent.Dispose()
$dark.Dispose()
$ogG.Dispose()
$og.Dispose()

Write-Output "Done: transparent logo, dark logo, marks, favicon, og (crop=$crop)"
