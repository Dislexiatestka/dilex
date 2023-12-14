import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const Bienvenida = () => import('../components/Bienvenida.vue');
const Instruccciones = () => import('../components/Instrucciones.vue');
const Ahorcado = () => import('../modules/ahorcado/Ahorcado.vue');
const Memoria = () => import('../modules/memoria/Juego.vue');
const Audio = () => import('../modules/audio/Juego.vue');
const Informe = () => import('../modules/informe/Informe.vue');
const Segmentacion = () => import('../modules/segmentacion/Lectura.vue');
const ComprensionLectora = () => import('../modules/comprensionLectora/Juego.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/instrucciones',
    name: 'instrucciones',
    component: Instruccciones,
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Bienvenida,
  },
  {
    path: '/comprension',
    name: 'comprension',
    component: ComprensionLectora,
  },
  {
    path: '/acerca',
    name: 'acerca',
    component: AboutView,
  },
  {
    path: '/segmentacion',
    name: 'segmentacion',
    component: Segmentacion,
  },
  {
    path: '/ahorcado',
    name: 'ahorcado',
    component: Ahorcado,
  },
  {
    path: '/memoria',
    name: 'memoria',
    component: Memoria,
  },
  {
    path: '/audio',
    name: 'audio',
    component: Audio,
  },
  {
    path: '/informe',
    name: 'informe',
    component: Informe,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
