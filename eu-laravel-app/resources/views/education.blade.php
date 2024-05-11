<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Laravel Project</title>
        <link rel="stylesheet" href=" {{ asset('css/style.css') }}">
    </head>
    <body>
        <main>
            @include("nav")
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
