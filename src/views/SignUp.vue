<template>
  <div>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div class="container">
      <header class="header">
        <div class="header-titles">
          <h1 class="h1-semibold">Modulo registro de resultados</h1>
          <h2>Elecciones al senado</h2>
        </div>
        <div class="container__design-img">
          <img src="../assets/img/logo.png" />
        </div>
      </header>
      <form class="form" v-on:submit.prevent="processSignUp">
        <div class="form__title">
          <h1 class="h1-semibold">Registro</h1>
        </div>
        <div class="form__section">
          <h2>Nombre completo</h2>
          <input type="text" class="form__section-input" name="username" id="username" v-model="user.username" placeholder="Usuario"/>
        </div>
        <div class="form__section">
          <h2>Contraseña</h2>
          <input type="password" class="form__section-input" name="password" id="password" v-model="user.password" placeholder="Contraseña" />
        </div>
        <div class="form__section">
          <h2>Correo</h2>
          <input type="email" class="form__section-input" name="email" id="email" v-model="user.email" placeholder="Correo electrónico"/>
        </div>
        <div class="form__section">
          <h2>Repetir contraseña</h2>
          <input type="password" class="form__section-input" />
        </div>
        <div class="form__submit">
          <input type="submit" class="form__section-submit" />
        </div>
        <div class="form__ref"><a href="#">Ingresar ahora</a></div>
        <div class="form__info">
          <p>
            La cuenta que está creando es una tiene privilegios de ciudadano,
            contactese con un administrador para aumentar los privilegios de
            esta cuenta
          </p>
        </div>
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
  name: "SignUp",
  components: {},
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        account: {
          lastChangeDate: new Date().toJSON().toString(),
          balance: 0,
          isActive: true,
        },
      },
    };
  },

  methods: {
    processSignUp: function () {
      console.log(this.user)
      axios
        .post("https://rotary-backend-mt.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

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
@import "../assets/css/normalize.css";
@import "../assets/css/register.css";
</style>