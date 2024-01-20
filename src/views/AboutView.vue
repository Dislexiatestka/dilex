<template>
  <Dialog v-model:visible="visible" :pt="{
    mask: {
      style: 'backdrop-filter: blur(2px)'
    }
  }" modal :header="titulo" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <div class="btn-centrar">
      <button @click="visible = false">Cerrar</button>

    </div>
  </Dialog>
  <Transition>
    <div class="acerca" v-if="show">
      <div class="wrapper">
        <div
          class="one"
          @mouseover="showOverlay(1)"
          @mouseleave="hideOverlay(1)"
        >
          <img
            class="image"
            :src="require('@/assets/inicio/img1.jpg')"
            alt=""
          />
          <div class="overlay" v-if="mostrarQue" @click="mostrarModal(1)">¿Qué es?</div>
        </div>
        <div
          class="two"
          @mouseover="showOverlay(2)"
          @mouseleave="hideOverlay(2)"
        >
          <img
            class="image"
            :src="require('@/assets/inicio/img2.jpg')"
            alt=""
          />
          <div class="overlay2" v-if="mostrarObjetivos">Objetivos</div>
        </div>
        <div class="three">
          <img
            class="image center"
            :src="require('@/assets/logos/Logo1Test.png')"
            alt=""
          />
        </div>
        <div
          class="four"
          @mouseover="showOverlay(3)"
          @mouseleave="hideOverlay(3)"
        >
          <img
            class="image"
            :src="require('@/assets/inicio/img3.jpg')"
            alt=""
          />
          <div class="overlay3" v-if="mostrarEje">Eje Principal</div>
        </div>
        <div
          class="five"
          @mouseover="showOverlay(4)"
          @mouseleave="hideOverlay(4)"
        >
          <img
            class="image"
            :src="require('@/assets/inicio/img4.jpg')"
            alt=""
          />
          <div class="overlay4" v-if="mostrarBeneficios">Beneficios</div>
        </div>
      </div>
      <header>
        <img :src="require('@/assets/logos/Logo1Test.png')" />
      </header>

      <div class="cuadro">
        <h1><strong>Bienvenidos a Dislextest</strong></h1>

        <h2><strong>¿Qué es?</strong></h2>
        <p>
          Dislextest es un test digital dirigido a estudiantes de segundo y
          tercero de básica elemental que comprenden una edad entre 5 a 7 años.
          Este test concentra una serie de ejercicios que se enfocan en los
          procesos de lecto-escritura que desarrollan en los primeros años
          escolares de cada estudiante. Este surge como una ayuda preventiva
          para generar una detección de falencias dentro del los procesos de
          lectura y escritura. Permitiendo identificar algunos síntomas que
          indiquen que los estudiantes tengan un trastorno del aprendizaje que
          se oriente en los procesos de lecto-escritura.
        </p>

        <h2><strong>Objetivo</strong></h2>

        <p>
          Identificar de forma preventiva los síntomas del trastorno del
          aprendizaje no asociado a un discapacidad conocido como dislexia en
          los estudiantes de un rango de edad de 5 a 7 años con ayuda de
          procesos dinámicos y enfocados en la lecto-escritura.
        </p>

        <h2><strong>Su eje principal</strong></h2>

        <p>
          El test se centra en una innovación en la forma en la que se toma los
          test para detectar los trastornos del aprendizaje no asociados a una
          discapacidad. Estos ejercicios que son los mas comunes en la mayoría
          de los test son llevados de forma dinámica, lúdica y apegados a la
          metodología de la gamificación a la parte digital. Esto permite que el
          estudiante pueda lo vea al test de una forma amigable, sin precisión o
          miedo.
        </p>
        <p>
          El test se compondrá de ejercicios que se enfocan en los procesos de
          comprensión lectora, de conciencia fonológica, así como la parte de la
          memoria, identificación de palabras entre otros.
        </p>
        <p>
          Cada ejercicio del test se compone a modo de nivel. Es decir, debe
          completar uno para pasar al siguiente. Dándole un porcentaje al
          estudiante de errores y aciertos al final de cada uno de los
          ejercicios en base a cada una temáticas que lo componen.
        </p>

        <h2><strong>Beneficios</strong></h2>
        <ul>
          <li>
            Involucra al estudiante de forma dinámica y lúdica aprender sobre
            los procesos de lecto-escritura.
          </li>
          <li>
            Permite identificar los síntomas iniciales del trastorno del
            aprendizaje de la dislexia.
          </li>
          <li>
            Da un diagnostico preventivo de dificultades o fallas en los
            procesos de lecto-escritura.
          </li>
          <li>
            Ideal para identificar falencia en los problemas en las parte de la
            fonología y la compresión lectura.
          </li>
        </ul>

        <p>
          Para iniciar el test de clic en el siguiente botón y lea las
          instrucciones de forma cuidadosa
        </p>

        <button @click="empezar" class="siguiente">Siguiente</button>
      </div>
      <div class="Fondos"></div>
    </div>
  </Transition>
</template>
<script>
export default {
  data() {
    return {
      visible:false,
      show: false,
      mostrarQue: false,
      mostrarObjetivos: false,
      mostrarEje: false,
      mostrarBeneficios: false,
      mostrar: false,
      titulo:""
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    empezar() {
      this.$router.push("/inicio");
    },
    showOverlay(num) {
      switch (num) {
        case 1:
          this.mostrarQue = true;

          break;
        case 2:
          this.mostrarObjetivos = true;

          break;
        case 3:
          this.mostrarEje = true;
          break;
        case 4:
          this.mostrarBeneficios = true;
          break;
        default:
          break;
      }
    },
    hideOverlay(num) {
      switch (num) {
        case 1:
          this.mostrarQue = false;

          break;
        case 2:
          this.mostrarObjetivos = false;

          break;
        case 3:
          this.mostrarEje = false;
          break;
        case 4:
          this.mostrarBeneficios = false;
          break;
        default:
          break;
      }
    },
    mostrarModal(num){
      this.visible=true
      switch (num) {
        case 1:
          this.titulo="¿Qué es?"

          break;
        case 2:
        this.titulo="Objetivo"

          break;
        case 3:
        this.titulo="Su eje principal"
          break;
        case 4:
        this.titulo="Beneficios"
          break;
        default:
          break;
      }
    }
  },
};
</script>
<style scoped>
img {
  width: 50%;
  margin-left: 75px;
  margin-top: 10px;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.siguiente {
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #69f3b7;
  padding: 20px;
  border-radius: 10px;
}
.siguiente:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.acerca {
  background-image: linear-gradient(
    135deg,
    #00b7d4,
    #b8fff7,
    #c2fff8,
    #d4fff6,
    #c3fff5,
    #e1fff5,
    #f3fff3
  );
  background-size: 500%;
  animation: fanimado 10s infinite;
  padding-bottom: 50px;
}

.cuadro {
  background-color: white;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;

  padding: 20px;
  border-radius: 32px 32px 32px 32px;
  -moz-border-radius: 32px 32px 32px 32px;
  -webkit-border-radius: 32px 32px 32px 32px;
  border: 4px solid orange;
}

@keyframes fanimado {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1;
  grid-row: 1;
  position: relative;
  display: inline-block;
  
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay:hover {
  opacity: 1;
  cursor: pointer;
}
.overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay2:hover {
  opacity: 1;
  cursor: pointer;

}
.overlay3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay3:hover {
  opacity: 1;
  cursor: pointer;

}
.overlay4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay4:hover {
  opacity: 1;
  cursor: pointer;

}
.two {
  grid-column: 2;
  grid-row: 1;
  position: relative;
  display: inline-block;
}
.three {
  grid-column: 1/3;
  grid-row: 2;
  padding-left: 100px;
  
}
.four {
  grid-column: 1;
  grid-row: 3;
  position: relative;
  display: inline-block;
}
.five {
  grid-column: 2;
  grid-row: 3;
  position: relative;
  display: inline-block;
}
.image {
  border-radius: 25%;
  width: 75%;
  object-fit: cover;
}
.center {
  border-radius: 10%;
}
</style>
