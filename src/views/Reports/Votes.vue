<template>
<NavigationBar/>
<div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Reportes - Votos</h1>
        </div>
        <div class="container__select">
            <div class="container-select-arrow">
                <select name="" id="" class="select">
                    <option value="">Todas las mesas</option>
                    <option value="">Mesa 1</option>
                    <option value="">Mesa 2</option>
                </select>
                <span class="select-arrow"></span>
            </div>
            <div class="container-select-arrow">
                <select name="" id="" class="select">
                    <option value="">Todos los partidos</option>
                    <option value="">Partido 1</option>
                    <option value="">Partido 2</option>
                </select>
                <span class="select-arrow"></span>
            </div>
            <div class="container-select-arrow">                
                <select name="" id="" class="select">
                    <option value="">Todos los candidatos</option>
                    <option value="">Candidato 1</option>
                    <option value="">Candidato 2</option>
                </select>
                <span class="select-arrow"></span>
            </div>
        </div>
        <div class="container__table">
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th>Partido</th>
                        <th>Candidato</th>
                        <th>Votos</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <th>Partido 1</th>
                        <th>Candidato 1</th>
                        <th>Votos 1</th>
                    </tr>
                    <tr>
                        <th>Partido 2</th>
                        <th>Candidato 2</th>
                        <th>Votos 2</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Candidato 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Candidato 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Candidato 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Candidato 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Candidato 3</th>
                        <th>Votos 3</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
  methods: {},
  data: function () {
    return {};
  },
};
</script>
<style scoped>
    @import "../../assets/css/normalize.css";
    @import "../../assets/css/global.css";
    @import "../../assets/css/reports/reports.css";
</style>