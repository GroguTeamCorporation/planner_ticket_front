<script setup lang="ts">

</script>

<template>
    <div id="carouselExampleDark" class="carousel carousel-dark mt-4 slide w-97  center ">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <img src="../assets/img/Oreja_van_gogh.jpg" class="d-block w-100" alt="Oreja de Van Gogh" >
            <div class="carousel-caption d-none d-md-block">
                <h5>LA OREJA DE VAN GOGH</h5>
                    <p class="container-p">Próximamente 10 de Febrero 2024<br>
                        <i class="bi bi-pin-map-fill p-3"></i>Gijón
                    </p> 
            </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/img/pimpinela.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>PIMPINELA</h5>
                    <p class="container-p">Próximamente 17 de Agosto 2024<br>
                        <i class="bi bi-pin-map-fill p-3"></i>Luarca
                    </p> 
            </div>
            </div>
            <div class="carousel-item">
            <img src="../assets/img/hombres-g.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>LOS HOMBRES G</h5>
                    <p class="container-p">Próximamente 23 de Agosto 2024<br>
                        <i class="bi bi-pin-map-fill p-3"></i>Avilés
                    </p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../assets/img/los-suaves.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>LOS SUAVES</h5>
                    <p class="container-p">Próximamente 12 de Noviembre 2024<br>
                        <i class="bi bi-pin-map-fill p-3"></i>León
                    </p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
</div>
</template>

<style scoped lang="scss">
    @import '../assets/Slider.scss';
    img{
        height: 35rem;
        margin-left: 0.5rem;
    }
</style>