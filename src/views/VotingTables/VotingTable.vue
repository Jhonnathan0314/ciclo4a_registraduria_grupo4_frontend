<template>
<NavigationBar/>
<div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Crear mesa</h1>
        </div>
        <form class="form">
            <div class="form__section">
                <h2>Cedulas inscritas</h2>
                <input type="number" class="form__section-input">
            </div>
            <div class="form__submit">
                <input type="submit" class="form__section-submit" value="Agregar">
                <input type="submit" class="form__section-submit" value="Cancelar">
            </div>
        </form>
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
    @import "../../assets/css/table/create-table.css";
    
</style>