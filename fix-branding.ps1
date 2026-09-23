# Fix branding: TrainerTree -> TrainingTree
Write-Host "Fixing branding in equissetix-website..." -ForegroundColor Cyan

$files = Get-ChildItem -Path "E:\Software Project\equissetix-website" -Include *.tsx,*.ts,*.md,*.html,*.json -Recurse |
    Where-Object { $_.FullName -notmatch 'node_modules|dist|build|\.git' }

$count = 0
foreach ($file in $files) {
    try {
        $content = Get-Content -Path $file.FullName -Raw -ErrorAction Stop
        $originalContent = $content

        # Replace all variants
        $content = $content -replace 'TrainerTree Pro','TrainingTree Pro'
        $content = $content -replace 'TrainerTree','TrainingTree'
        $content = $content -replace 'trainertree','trainingtree'
        $content = $content -replace 'TRAINERTREE','TRAININGTREE'

        if ($content -ne $originalContent) {
            Set-Content -Path $file.FullName -Value $content -NoNewline
            $count++
            Write-Host "  ✓ $($file.Name)" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  ✗ Error: $($file.Name) - $_" -ForegroundColor Red
    }
}

Write-Host "`nDone! Updated $count files." -ForegroundColor Green
