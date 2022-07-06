<template>
  <div>
    <header>
      <title>Document</title>
        <div class="nav">
            <div class="logo-nav">
                <img src="../assets/img/logo.png" />
                <ul class="nav__ul">
                    <li class="nav__ul-li">
                        <a href="#">Mesas</a>
                        <ul class="nav__ul-submenu">
                            <li><a href="">Crear</a></li>
                            <li><a href="">Buscar</a></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li">
                        <a href="#">Partidos</a>
                        <ul class="nav__ul-submenu">
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Buscar</a></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li">
                        <a href="#">Candidatos</a>
                        <ul class="nav__ul-submenu">
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Buscar</a></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li">
                        <a href="#">Resultados</a>
                        <ul class="nav__ul-submenu">
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Buscar</a></li>
                        </ul>
                    </li> 
                    <li class="nav__ul-li">
                        <a href="#">Reportes</a>
                        <ul class="nav__ul-submenu">
                            <li><a href="#">Votos</a></li>
                            <li><a href="#">Mesas</a></li>
                            <li><a href="#">Partidos</a></li>
                            <li><a href="#">Porcentajes</a></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li"><a href="#">Salir</a></li>
                </ul>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Titulo</h1>
        </div>
        
        <footer class="footer">
            <div class="footer-container">
                <h5>Esto es solo una prueba de desarrollo web, no es el sitio oficial de la registraduria :v</h5>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/gobal.css";
</style>
