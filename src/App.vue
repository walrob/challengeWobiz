<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // axios.defaults.baseURL = URL;
    // acá se podría definir un valor por defecto para las consultas con Axios
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
.text-size {
  font-size: 13px !important;
}
.wobiz-blue {
  color: #163a49;
}
</style>
