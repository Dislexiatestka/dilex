<template>
  <div class="contenedor">
    <DataTable :value="todo" tableStyle="min-width: 70rem">
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold"
            >Informe de:{{ nombre }}</span
          >
        </div>
      </template>
      <Column field="nombre" header="Nombre"></Column>
      <Column field="puntaje" header="Puntaje" sortable>
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.puntaje / 10"
            readonly
            :cancel="false"
          />
        </template>
      </Column>
      <Column header="Porcentaje">
        <template #body="slotProps">
          {{ slotProps.data.puntaje * 2 }}%
        </template>
      </Column>

      <template #footer>
        <Button @click="resetInforme">Reiniciar</Button>
      </template>
    </DataTable>
    <div class="contenedor-imagen">
      <Image
        :src="require('@/assets/logos/Logo_Informe.jpeg')"
        :width="300"
      ></Image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      ahorcado: "",
      audio: "",
      memoria: "",
      comprension: "",
      todo: null,
    };
  },
  mounted() {
    const jsonData = localStorage.getItem("informe");
    const data = JSON.parse(jsonData);

    const jsonDataAhorcado = localStorage.getItem("informeAhorcado");
    const dataAhorcado = JSON.parse(jsonDataAhorcado);

    const jsonDataAudio = localStorage.getItem("informeAudio");
    const dataAudio = JSON.parse(jsonDataAudio);

    const jsonDataMemoria = localStorage.getItem("informeMemoria");
    const dataMemoria = JSON.parse(jsonDataMemoria);

    const jsonDataSegmentacion = localStorage.getItem("informeSegmentacion");
    const dataSegmentacion = JSON.parse(jsonDataSegmentacion);

    const jsonDataComprension = localStorage.getItem("informeComprension");
    const dataComprension = JSON.parse(jsonDataComprension);

    if (data != null) {
      this.nombre = data.nombre;
    }

    //50 maximo puntaje
    if (dataAhorcado != null) {
      this.ahorcado = this.cacularPuntaje(50, dataAhorcado.ahorcado);
    }
    //50 maximo puntaje
    if (dataAudio != null) {
      this.audio = this.cacularPuntaje(50, dataAudio.audio);
    }
    //240 maximo puntaje
    if (dataMemoria != null) {
      this.memoria = this.cacularPuntaje(240, dataMemoria.memoria);
    }
    //
    if (dataSegmentacion != null) {
      this.segmentacion = this.cacularPuntaje(
        50,
        dataSegmentacion.segmentacion
      );
    }
    if (dataComprension != null) {
      this.comprension = this.cacularPuntaje(50, dataComprension.comprension);
    }
    this.todo = [
      {
        nombre: "Ahorcado",
        puntaje: this.ahorcado != null ? this.ahorcado : 0,
      },
      { nombre: "Audio", puntaje: this.audio != null ? this.ahorcado : 0 },
      {
        nombre: "Segmentacion",
        puntaje: this.segmentacion != null ? this.segmentacion : 0,
      },
      { nombre: "Memoria", puntaje: this.memoria != null ? this.memoria : 0 },
      {
        nombre: "Comprension",
        puntaje: this.comprension != null ? this.comprension : 0,
      },
    ];
  },
  methods: {
    resetInforme() {
      localStorage.clear();
      this.$router.push("/");
    },
    cacularPuntaje(maximo, actual) {
      var resultado = (actual * 50) / maximo;
      return resultado.toFixed(2);
    },
  },
};
</script>

<style scoped>
.contenedor {
  background-image: url("../../assets/fondos/Fondo_Resultados.jpeg");
  background-size: 100% 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  padding-top: 120px;

}

.tabla {
    
  border-radius: 2rem;
  margin: 10rem 2rem;
  border-width: 2px;
  font-size: 30px;
}
.contenedor-imagen {
  margin-top: 20px;
}
</style>
