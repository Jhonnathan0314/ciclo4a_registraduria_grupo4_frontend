<template>
<NavigationBar/>
<div>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Candidato - Crear</h1>
        </div>
        <form class="form" v-on:submit.prevent="createCandidate">
            <h2>Partido politico</h2>
            <div class="container__select">
                <div class="container-select-arrow">
                    <select v-model="candidate.voting_table" name="voting_table" class="select">
                        <option v-for="voting_table in voting_tables" :value="voting_table" :key="voting_table._id">{{voting_table.name}}</option>
                    </select>
                    <span class="select-arrow"></span>
                </div>
            </div>
            <div class="form__section">
                <h2>N° resolución</h2>
                <input type="number" class="form__section-input" name="num_resolution" id="num_resolution" v-model="candidate.num_resolution" placeholder="N° resolucion"/>
            </div>
            <div class="form__section">
                <h2>Cédula</h2>
                <input type="number" class="form__section-input" name="identification_card" id="identification_card" v-model="candidate.identification_card" placeholder="Cédula"/>
            </div>
            <div class="form__section">
                <h2>Nombres</h2>
                <input type="text" class="form__section-input" name="names" id="names" v-model="candidate.names" placeholder="Nombres"/>
            </div>
            <div class="form__section">
                <h2>Apellido</h2>
                <input type="text" class="form__section-input" name="surnames" id="surnames" v-model="candidate.surnames" placeholder="Apellidos"/>
            </div>
            <div class="form__submit">
                <input type="submit" class="form__section-submit" value="Agregar">
                <a class="form__section-submit" value="Cancelar"></a>
            </div>
        </form>
    </div>
</div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name:'Candidate',
  components: {
    NavigationBar,
  },
  data: function () {
    return {
      voting_tables:[
        {
          _id:"12574dtgfdg771156",
          name:"Mesa 1",
          amount_enrolled:"144"
        },
        {
          _id:"12574dtgfdg77115644",
          name:"Mesa 2",
          amount_enrolled:"120"
        },
        {
          _id:"12574dtgfdg77115687",
          name:"Mesa 3",
          amount_enrolled:"200"
        },
      ],
      candidate: {
        num_resolution: "",
        identification_card: "",
        names: "",
        surnames: "",
        voting_table:{
        },
        account: {
          lastChangeDate: new Date().toJSON().toString(),
          balance: 0,
          isActive: true,
        },
      },
    };
  },

  methods: {
    createCandidate: function () {
      console.log(this.candidate)
      axios
        .post("https://rotary-backend-mt.herokuapp.com/user/", this.candidate, {
          headers: {},
        })
        .then((result) => {
          alert(result.data)
          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>
<style scoped>
    @import "../../assets/css/normalize.css";
    @import "../../assets/css/global.css";
    @import "../../assets/css/party/create-party.css";
</style>