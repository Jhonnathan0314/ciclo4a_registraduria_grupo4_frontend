<template>
  <div>
    <NavigationBar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "App",

  data: function () {
    return {
      is_auth: false,
    };
  },

  components: {
    NavigationBar
  },

  // methods: {
  //   verifyAuth: function () {
  //     this.is_auth = localStorage.getItem("isAuth") || false;

  //     if (this.is_auth == false) {
  //       alert("Credenciales incorrectas");
  //       this.$router.push({ name: "logIn" });
  //     } else {
  //       alert("Ha ingresado sesión correctamente");
  //       this.$router.push({ name: "home" });
  //     }
  //   },

  //   loadLogIn: function () {
  //     this.$router.push({ name: "logIn" });
  //   },

  //   loadSignUp: function () {
  //     this.$router.push({ name: "signUp" });
  //   },

  //   completedLogIn: function (dataUser) {
  //     localStorage.setItem("isAuth", true);
  //     localStorage.setItem("username", dataUser.username);
  //     localStorage.setItem("token_access", dataUser.token_access);
  //     localStorage.setItem("token_refresh", dataUser.token_refresh);
  //     this.verifyAuth();
  //   },

  //   completedSignUp: function (dataUser) {
  //     alert("Registro Exitoso");
  //     this.completedLogIn(dataUser);
  //   },

  //   loadHome: function () {
  //     this.$router.push({ name: "home" });
  //   },

  //   logOut: function () {
  //     localStorage.clear();
  //     alert("Sesión Cerrada");
  //     this.verifyAuth();
  //   },

  //   created: function () {
  //     this.verifyAuth();
  //   },
  // }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0 0 0 0;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: outside none none;
}
</style>

  