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
                            <li><router-link to="/votingTables/votingTable-add/:_id"><a href="#">Crear</a></router-link></li>
                            <li><router-link to="/votingTables"><a href="#">Buscar</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li">
                        <a href="#">Partidos</a>
                        <ul class="nav__ul-submenu">
                            <li><router-link to="/politicalParties/politicalParty-add/:_id"><a href="#">Crear</a></router-link></li>
                            <li><router-link to="/politicalParties"><a href="#">Buscar</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li">
                        <a href="#">Candidatos</a>
                        <ul class="nav__ul-submenu">
                            <li><router-link to="/candidates/candidate-add/:_id"><a href="#">Crear</a></router-link></li>
                            <li><router-link to="/candidates"><a href="#">Buscar</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li">
                        <a href="#">Resultados</a>
                        <ul class="nav__ul-submenu">
                            <li><router-link to="/results/result-add/:_id"><a href="#">Crear</a></router-link></li>
                            <li><router-link to="/results"><a href="#">Buscar</a></router-link></li>
                        </ul>
                    </li> 
                    <li class="nav__ul-li">
                        <a href="#">Reportes</a>
                        <ul class="nav__ul-submenu">
                            <li><router-link to="/reports/votes"><a href="#">Votos</a></router-link></li>
                            <li><router-link to="/reports/percentage"><a href="#">Porcentajes</a></router-link></li>
                            <li><router-link to="/reports/votingParties"><a href="#">Mesas</a></router-link></li>
                            <li><router-link to="/reports/politicalParties"><a href="#">Partidos</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav__ul-li"><a href="#">Salir</a></li>
                </ul>
            </div>
        </div>
    </header>
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
@import "../assets/css/global.css";
</style>
