<template>
  <div class="contenedor">
    <div class="titulo-entrada">
      <h1 class="titulo" id="miTitulo">{{ mensaje }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "",
      mensajes: [
        "Ya falta poco",
        "Continua vas bien",
        "Genial!!",
        "Buen inicio..",
        "cool !!!",
      ],
    };
  },

  mounted() {
    if(this.$route.params.ruta==="informe"){
        this.mensaje="Gracias por llenar el test :)"
    }
    else{
        this.mensaje = this.mensajes[Math.floor(Math.random() * (5 - 0) + 0)];

    }
    setTimeout(() => {
      this.$router.push("/" + this.$route.params.ruta);
    }, 2000);
  },
};
</script>

<style>
.contenedor {
  background-image: url("../assets/fondos/Fondo_Resultados.jpeg");
  background-size: 100% 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.titulo-entrada {
  text-align: center;
}

.titulo {
  font-size: 200px;
  color: #394e5c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: entradaTexto 1s ease-out;
}

@keyframes entradaTexto {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
