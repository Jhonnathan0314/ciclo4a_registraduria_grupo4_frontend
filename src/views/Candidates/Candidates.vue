<template>
  <NavigationBar />
  <div class="container">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <div class="container__title">
      <h1 class="h1-semibold">Candidatos</h1>
    </div>
    <div class="container__select">
      <div class="container-select-arrow">
        <select class="select" name="party_">
          <option v-for="party_ in parties" :value="party_" :key="party_._id">{{party_.name}}</option>
        </select>
        <span class="select-arrow"></span>
      </div>
      
        <div class="container-search-bar">
        <input type="text" v-model="search['global']" placeholder="Nombre del candidato"/>
        <i class="pi pi-search"></i>
      </div>
    </div>
    <div class="container__table">
      <table class="table" :value="candidates" >
        <thead class="thead">
          <tr>
            <th>Partido</th>
            <th>N° resolucion</th>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="candidate in candidates" :key="candidate._id">
              <td>{{candidate.party.name}}</td>
              <td>{{candidate.num_resolution}}</td>
              <td>{{candidate.identification_card}}</td>
              <td>{{candidate.names}}</td>
              <td>{{candidate.surnames}}</td>
              <td>
                <a class="table-button"><i class="pi pi-pencil"></i></a>
                <a class="table-button"><i class="pi pi-trash"></i></a>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import 'primeicons/primeicons.css';
export default {
  components: {
    NavigationBar,
  },
  methods: {
  },
  data: function () {
    return {
      search:{},
       parties:[
        {
          _id:"12574dtgfdg771156",
          name:"Partido 1",
          motto:"144"
        },
        {
          _id:"12574dtgfdg77115644",
          name:"Partido 2",
          motto:"120"
        },
        {
          _id:"12574dtgfdg77115687",
          name:"Partido 3",
          motto:"200"
        },
      ],
      candidates: [
        {
        _id:"a2321432ssaas",
        num_resolution:"12489",
        identification_card: "1005400",
        names: "Taniah Zoel",
        surnames: "Poveda Suarez",
        party:{
          _id:"12574dtgfdg77115687",
          name:"Partido 3",
          motto:"200"
        }
        },
      ]
    };
  },
};
</script>
<style scoped>
@import "../../assets/css/normalize.css";
@import "../../assets/css/global.css";
@import "../../assets/css/candidate/candidate.css";
</style>
