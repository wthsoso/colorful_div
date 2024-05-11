<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Laravel Project</title>
        <link rel="stylesheet" href=" <?php echo e(asset('css/style.css')); ?>">
    </head>
    <body>
        <main>
            <?php echo $__env->make("nav", \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            <div class="info">
                <table>
                    <thead>
                        <tr>
                            <th>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>European University</td>
                        </tr>
                        <tr>
                            <td>Georgian Technical University</td>
                        </tr>
                        <tr>
                            <td>Tbilisi State University</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </body>
</html>
<?php /**PATH C:\Users\soso chkhaidze\Desktop\eu_framework_2024-main\eu-laravel-app\resources\views/education.blade.php ENDPATH**/ ?>