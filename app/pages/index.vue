<template>
  <div>
    <Superior />
    <TituloText />
    <Cards />
  </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.min.css"; //Importação do bootstrap
//Importação dos componentes usados na pagina
import Superior from "../pages/components/Superior.vue";
import Cards from "../pages/components/Cards.vue";
import TituloText from "../pages/components/TituloText.vue";
</script>
