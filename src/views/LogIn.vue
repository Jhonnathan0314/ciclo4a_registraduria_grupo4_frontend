<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
      rel="stylesheet"
    />
    <div class="container">
      <div class="title-design">
        <div class="container__design-img">
          <img src="../assets/img/logo.png" />
        </div>
        <h1 class="h1-semibold">Modulo registro de resultados</h1>
        <h2>Elecciones al senado</h2>
      </div>
      <form method="" class="form">
        <div class="container__title">
          <h1>Login</h1>
        </div>
        <h2 class="form-h2">Email</h2>
        <div class="container__section">
          <input
            type="email"
            placeholder="email@example.com"
            class="container__input"
            id="username"
            name="login"
            v-model="user.username"
          />
        </div>
        <h2 class="form-h2">Contraseña</h2>
        <div class="container__section">
          <input
            type="password"
            placeholder="Escriba su contraseña"
            class="container__input"
            id="password"
            name="login"
            v-model="user.password"
          />
        </div>
        <div class="container__section">
          <input type="submit" class="container__submit" value="Login" />
        </div>
        <div class="container__ref"><a href="#">Registrese ahora</a></div>
      </form>
      <div class="container__footer">
        <footer class="footer">
          <p>
            Esto es solo una prueba de desarrollo web, no es el sitio oficial de
            la registraduria :v
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LogIn",
  components: {},
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: function () {
      axios
        .post("https://rotary-backend-mt.herokuapp.com/login/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            role: result.data.role,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert(
              "ERROR 401: Credenciales Incorrectas. Por favor intente de nuevo o realice el registro."
            );
        });
    },
  },
};
</script>
<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/login.css";

</style>