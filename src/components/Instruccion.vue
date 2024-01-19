<template>
  <div class="cont-instrucciones">
    <h1>{{ titulo }}</h1>
    <img :src="imagen" alt="" />
    <h3 v-if="instruccion != null">{{ instruccion }}</h3>
    <div v-if="instrucciones != null">
      <h3 v-for="(item, index) in instrucciones" :key="index">{{ item }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titulo: String,
    instruccion: String,
    instrucciones: Array,
    siguiente: String,
  },
  data() {
    return {
      imagen: null,
      imagenes: ["img1.jpg", "img2.jpg"],
    };
  },
  mounted() {
    this.seleccionarImagen();
  },
  methods: {
    empezar() {
      this.$router.push("/" + siguiente);
    },
    seleccionarImagen() {
      const r = this.imagenes[this.getRandomInt(0,2)];
      this.imagen = require("@/assets/vinetas/"+r);
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    },
  },
};
</script>
<style scoped>
.cont-instrucciones {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h3 {
  margin-top: 20px;
}
img{
    width: 20%;
}
</style>
