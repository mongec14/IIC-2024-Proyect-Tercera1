<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="Proyecto de Tercera 1" content="Página de F1">
    <link rel="stylesheet" href="./styles/main.css">
</head>

<body>
    <nav>
        <!-- Menú Izquierdo -->
        <div class="menu-izquierda">
            <a href="./index.php">
                <!-- Imagen comentada para no visualizarla -->
                <img src="./images/menu.png" alt="Logo F1">
            </a>
        </div>

        <!-- Contenedor del Menú -->
        <div class="menu-container">
            <!-- Menú Derecho -->
            <div class="menu-derecha">
                <!-- Enlace para Historia (se abre en una nueva pestaña) -->
                <a class="enlaces-menu-derecha"
                    href="https://www.abc.es/deportes/formula-1/abci-historia-formula-1-202007141357_reportaje.html"
                    target="_blank">Historia</a>
                <!-- Enlace para Temporada 2024 -->
                <a class="enlaces-menu-derecha" href="https://f1tv.formula1.com/page/8192/2024-season"
                    target="_blank">Temporada 2024</a>
                <!-- Enlace para Boletos -->
                <a class="enlaces-menu-derecha"
                    href="https://tickets.formula1.com/es/f1-3286-belgica?_gl=1*19zfo96*_up*MQ..&gclid=EAIaIQobChMIx-GTg56ghwMVo6BaBR0X1wDwEAAYASAAEgKuSPD_BwE"
                    target="_blank">Boletos</a>
            </div>

            <!-- Icono de Menú (Hamburger) para pantallas pequeñas -->
            <div class="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <!-- Incluye los scripts al final del body -->
    <script src="./script/hamburger-icon.js"></script>
</body>

</html>