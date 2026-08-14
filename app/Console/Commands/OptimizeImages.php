<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class OptimizeImages extends Command
{
    // El comando que escribiremos en la terminal
    protected $signature = 'images:webp';

    protected $description = 'Convierte masivamente todas las imágenes PNG y JPG a formato WebP de nueva generación';

    public function handle()
    {
        // Las carpetas donde tienes tus imágenes pesadas
        $directories = [
            public_path('recursos/femenil'),
            // public_path('estilos_login/assets/img/amfpro')
        ];

        $this->info('Iniciando optimización a WebP... 🚀');
        $count = 0;
        $totalAhorroMB = 0;

        foreach ($directories as $dir) {
            if (!File::exists($dir)) continue;

            $files = File::allFiles($dir);

            foreach ($files as $file) {
                $extension = strtolower($file->getExtension());
                
                // Solo procesamos JPG y PNG
                if (in_array($extension, ['jpg', 'jpeg', 'png'])) {
                    
                    $originalPath = $file->getRealPath();
                    $webpPath = preg_replace('/\.' . $extension . '$/i', '.webp', $originalPath);

                    // Si ya existe la versión WebP, la saltamos
                    if (File::exists($webpPath)) {
                        continue;
                    }

                    $image = null;
                    if ($extension === 'png') {
                        $image = @imagecreatefrompng($originalPath);
                        if ($image) {
                            imagepalettetotruecolor($image);
                            imagealphablending($image, true);
                            imagesavealpha($image, true);
                        }
                    } else {
                        $image = @imagecreatefromjpeg($originalPath);
                    }

                    if ($image) {
                        // Guardamos en WebP con 85 de calidad (El estándar de Google)
                        imagewebp($image, $webpPath, 85); 
                        imagedestroy($image);
                        // Calculamos cuánto peso le ahorramos al servidor
                        $oldSize = filesize($originalPath);
                        $newSize = filesize($webpPath);
                        $ahorroPorcentaje = round(100 - (($newSize / $oldSize) * 100));
                        $totalAhorroMB += ($oldSize - $newSize) / 1048576; // Convertir bytes a MB

                        $this->line("<fg=green>Convertido:</> {$file->getFilename()} -> <fg=yellow>¡Ahorro del {$ahorroPorcentaje}%!</>");
                        $count++;
                    }
                }
            }
        }

        $this->newLine();
        $this->info("¡Magia completada! ✨");
        $this->line("<fg=cyan>Se optimizaron {$count} imágenes.</>");
        $this->line("<fg=cyan>Le ahorraste a tu servidor y a los usuarios: " . round($totalAhorroMB, 2) . " MB de descargas.</>");
    }
}