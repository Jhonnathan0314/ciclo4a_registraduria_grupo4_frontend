<template>
<NavigationBar/>
<div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Resultados</h1>
        </div>
        <div class="container__select">
            <div class="container-select-arrow">
                <select name="" id="" class="select">
                    <option value="">Partidos</option>
                    <option value="">Candidatos</option>
                </select>
                <span class="select-arrow"></span>
            </div>
        </div>
        <div class="container__box">
            <div class="main-row row-left" onclick="move_left()"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
			<div class="main-row row-right" onclick="move_right()"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
			<div class="container__content-hide" id="lateralmove">
				<div class="hide-scroll">
					<div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-pacto-historico.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Pacto historico</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-cambio-radical.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Cambio radical</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-centro-democratico.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Centro democratico</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-centro-esperanza.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Centro esperanza</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-comunes.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Comunes</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-estamos-listas.jpg">
						</div>
						<div class="partido-info">
							<div class="partido-name">Estamos listas</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-fuerza-ciudadana.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Fuerza ciudadana</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-gente-nueva.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Gente nueva</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-liberal.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Liberal</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-mira.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Mira</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-nuevo-liberalismo.jpg">
						</div>
						<div class="partido-info">
							<div class="partido-name">Nuevo liberalismo</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-r11.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">R11</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-salvacion-nacional.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Salvacion nacional</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-sos-colombia.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">SOS Colombia</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
                    <div class="container__box-partido">
						<div class="partido-img">
							<img src="../../assets/img/partido-u.png">
						</div>
						<div class="partido-info">
							<div class="partido-name">Partido de la U</div>
							<div class="partido-motto">Votos: 1234567</div>
						</div>
					</div>
				</div>
			</div>
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
    @import "../../assets/css/results/results.css";
</style>