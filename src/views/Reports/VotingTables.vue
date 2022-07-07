<template>

<NavigationBar/>
<div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Reportes - Mesas</h1>
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
        </div>
        <div class="container__table">
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th>Numero de mesa</th>
                        <th>Cedulas inscritas</th>
                        <th>Votos totales</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
                    </tr>
                    <tr>
                        <th>Mesa 2</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
                    </tr>
                    <tr>
                        <th>Mesa 3</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
                    </tr>
                    <tr>
                        <th>Mesa 4</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
                    </tr>
                    <tr>
                        <th>Mesa 5</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
                    </tr>
                    <tr>
                        <th>Mesa 6</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
                    </tr>
                    <tr>
                        <th>Mesa 7</th>
                        <th>Numero de cedulas</th>
                        <th>Numero de votos</th>
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