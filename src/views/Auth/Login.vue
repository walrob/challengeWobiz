<template>
  <div>
    <layout image="fondo_login.png">
      <template slot="form">
        <div class="card-auth">
          <img
            src="//s3.amazonaws.com/static.wobiz.com/site/neobiz/es/img/logo.svg?v=1636651727"
            alt="Logo"
            class="img-logo"
          />
          <h3 class="wobiz-blue mt-5 mb-3">
            <strong>Ingresa a tu cuenta</strong>
          </h3>
          <form id="app" @submit="sendForm">
            <div class="mb-3">
              <label for="input1" class="label-wobiz">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="input1"
                placeholder="Ej: usuario@mail.com"
              />
              <p v-if="errorEmail" class="text-error">
                Email es un campo requerido.
              </p>
            </div>
            <div class="mb-3">
              <label for="input1" class="label-wobiz">Constraseña</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="input2"
                placeholder="Escribe tu constraseña"
              />
              <p v-if="errorPassword" class="text-error">
                Constraseña debe tener 6 caracteres como mínimo.
              </p>
            </div>
            <router-link :to="{ name: 'Reset' }" class="mt-3 text-link"
              >¿Olvidaste tu constraseña?</router-link
            >
            <div class="d-grid gap-2 mt-3">
              <button class="btn btn-primary text-btn p-2" type="submit">
                Ingresar a mi cuenta
              </button>
              <p v-if="errorLogin.length > 0" class="text-error">
                {{ errorLogin }}
              </p>
            </div>
          </form>
        </div>
      </template>
      <template slot="menu"
        ><div class="d-none d-lg-flex align-items-center top-menu">
          <p class="wobiz-blue m-2 text-size">
            ¿No tienes una cuenta en Wobiz?
          </p>
          <router-link
            :to="{ name: 'Register' }"
            class="btn btn-outline-secondary btn-sm text-btn"
            >Crea tu cuenta</router-link
          >
        </div></template
      >
    </layout>
  </div>
</template>

<script>
import Layout from "./Layout.vue";

export default {
  components: {
    Layout
  },
  data() {
    return {
      errorEmail: false,
      errorPassword: false,
      email: "",
      password: "",
      errorLogin: ""
    };
  },
  methods: {
    sendForm(e) {
      e.preventDefault();
      this.errorLogin = "";
      const resp = this.checkForm(e);
      console.log(resp);
      if (!resp) {
        this.login();
      }
    },
    checkForm(e) {
      this.errorEmail = false;
      this.errorPassword = false;
      if (this.email.length === 0) {
        this.errorEmail = true;
      }
      if (this.password.length < 6) {
        this.errorPassword = true;
      }
      return this.errorPassword || this.errorEmail;
    },
    async login() {
      this.showOverlay = true;
      const params = {
        Username: this.email,
        Password: this.password
      };
      await this.axios
        .post("admin.localwobiz.com/login", params)
        .then(res => {
          // this.setUser(res.data); EN CASO DE TENER VUEX
          localStorage.setItem("auth", JSON.stringify(res.data));
          this.axios.defaults.headers.common["Authorization"] = res.data.token;
          this.$router.push({ name: "Home" });
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.message);
            this.errorLogin = error.response.message;
          } else {
            console.log(error);
            this.errorLogin =
              "Ocurrió un error. Vuelva a intentarlo por favor.";
          }
        });
      this.showOverlay = false;
    }
  }
};
</script>

<style scoped>
.card-auth {
  padding: 30px 50px;
}
.label-wobiz {
  padding-bottom: 5px;
  margin-bottom: 0;
  font-size: smaller;
  line-height: 1.5;
  font-weight: 500;
}
.img-logo {
  width: 180px;
}
.text-link {
  font-size: 14px !important;
  color: #969696;
}
.text-link :hover {
  color: #6c757d;
}
.text-btn {
  font-weight: 700 !important;
  font-size: 13px !important;
}
.text-error {
  font-size: 13px !important;
  color: red;
  margin-bottom: 0px;
}
</style>
