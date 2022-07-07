<template>
<NavigationBar/>
<div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Reportes - Porcentajes</h1>
        </div>
        <div class="container__table">
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th>Partido</th>
                        <th>Porcentaje</th>
                        <th>Votos</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <th>Partido 1</th>
                        <th>Porcentaje 1</th>
                        <th>Votos 1</th>
                    </tr>
                    <tr>
                        <th>Partido 2</th>
                        <th>Porcentaje 2</th>
                        <th>Votos 2</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Porcentaje 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Porcentaje 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Porcentaje 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Porcentaje 3</th>
                        <th>Votos 3</th>
                    </tr>
                    <tr>
                        <th>Partido 3</th>
                        <th>Porcentaje 3</th>
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