<template>
<NavigationBar/>
 <div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Registro resultados</h1>
        </div>
        <form class="form">
            <div class="form__section">
                <h2>Numero de mesa</h2>
                <div class="container__select">
                    <div class="container-select-arrow">
                        <select name="" id="" class="select">
                            <option value="">Seleccione la mesa</option>
                            <option value="">Mesa 1</option>
                            <option value="">Mesa 2</option>
                        </select>
                        <span class="select-arrow"></span>
                    </div>
                </div>
            </div>
            <div class="form__section">
                <h2>Partido politico</h2>
                <div class="container__select">
                    <div class="container-select-arrow">
                        <select name="" id="" class="select">
                            <option value="">Seleccione el partido</option>
                            <option value="">Mesa 1</option>
                            <option value="">Mesa 2</option>
                        </select>
                        <span class="select-arrow"></span>
                    </div>
                </div>
            </div>
            <div class="form__section">
                <h2>Candidato</h2>
                <div class="container__select">
                    <div class="container-select-arrow">
                        <select name="" id="" class="select">
                            <option value="">Seleccione el candidato</option>
                            <option value="">Mesa 1</option>
                            <option value="">Mesa 2</option>
                        </select>
                        <span class="select-arrow"></span>
                    </div>
                </div>
            </div>
            <div class="form__section">
                <h2>Numero de votos</h2>
                <input type="number" class="form__section-input" placeholder="Numero de votos a añadir">
            </div>
            <div class="form__submit">
                <input type="submit" class="form__section-submit" value="Añadir">
                <input type="submit" class="form__section-submit" value="Guardar">
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
    @import "../../assets/css/results/record-result.css";
</style>