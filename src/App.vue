<template>
  <div>
    <Navbar />
    <TransitionGroup name="router-anim">
      <router-view />
    </TransitionGroup>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  mounted() {
    // Cambiar el título de la página
    document.title = "Dislexteska";
    console.log("Funcion");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router-anim-enter-active,
.router-anim-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.router-anim-enter,
.router-anim-leave-to {
  opacity: 0;
}
</style>
