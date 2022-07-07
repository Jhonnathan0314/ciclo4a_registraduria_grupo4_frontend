<template>
<NavigationBar/>
<div class="container">
        <div class="container__title">
            <h1 class="h1-semibold">Mesas</h1>
        </div>

        <div class="container__table">
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th>Numero de mesa</th>
                        <th>Cedulas registradas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mesa 1</th>
                        <th>Numero de cedulas 1</th>
                        <th>
                            <button class="table-button">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="table-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </th>
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
    @import "../../assets/css/table/table.css";
</style>