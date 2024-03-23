<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi cuaca</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="card">
        <div class="search">
            <input type="text" placeholder="Masukan nama kota" , spellcheck="false">
            <button><img src="images/search.png" alt="search"></button>
        </div>
        <div class="weather">
            <img src="images/clouds.png" class="weather-icon">
            <h1 class="temp"></h1>
            <h2 class="city">Halo!</h2>
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png">
                    <div>
                        <p class="humidity"></p>
                        <p>Kelembapan</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/wind.png">
                    <div>
                        <p class="wind"></p>
                        <p>Angin</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="script.js"></script>
</body>

</html>