<template>
  <div>
    <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp"></router-view>
  </div>
</template>

<script>

export default {
  name: "App",

  data: function () {
    return {
      is_auth: false,
    };
  },

  components: {
  },

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false) {
        alert("Credenciales incorrectas");
        this.$router.push({ name: "logIn" });
      } else {
        alert("Ha ingresado sesión correctamente");
        this.$router.push({ name: "home" });
      }
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },

    completedLogIn: function (dataUser) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", dataUser.username);
      localStorage.setItem("token_access", dataUser.token_access);
      localStorage.setItem("token_refresh", dataUser.token_refresh);
      this.verifyAuth();
    },

    completedSignUp: function (dataUser) {
      alert("Registro Exitoso");
      this.completedLogIn(dataUser);
    },

    loadHome: function () {
      this.$router.push({ name: "home" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },

    created: function () {
      this.verifyAuth();
    },
  }
};
</script>


  