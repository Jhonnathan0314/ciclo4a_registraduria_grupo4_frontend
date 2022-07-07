<template>
<NavigationBar/>
 <div class="container">  
        <div class="container__title">
            <h1 class="h1-semibold">Partido - Crear</h1>
        </div>
        <form class="form">
            <h2>Partido politico</h2>
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
            <div class="form__section">
                <h2>Nombre</h2>
                <input type="text" class="form__section-input">
            </div>
            <div class="form__section">
                <h2>Lema</h2>
                <input type="text" class="form__section-input">
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
  @import "../../assets/css/party/create-party.css";
</style>