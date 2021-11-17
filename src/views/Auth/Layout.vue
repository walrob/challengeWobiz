<template>
  <div class="row">
    <div class="col col-md-6 col-lg-4 p-0">
      <slot name="form"></slot>
    </div>
    <div class="d-none d-md-block col-md-6 col-lg-8 p-0">
      <img
        :src="require(`../../assets/${image}`)"
        class="vh-100 position-relative img-login"
        alt="Image Login"
      />
      <div class="top-menu">
        <slot name="menu"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
    /* La imagen en este caso se pasa unicamente el nombre del archivo ubicado en assets por simplicidad
     pero lo ideal sería pasar toda la imagen o url */
  }
};
</script>

<style scoped>
.img-login {
  width: 100%;
  object-fit: cover;
  object-position: right;
}
.top-menu {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  width: max-content;
}
</style>
