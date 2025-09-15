import { defineNuxtPlugin } from "#app";
import Vuelidate from "@vuelidate/core";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vuelidate);
});
