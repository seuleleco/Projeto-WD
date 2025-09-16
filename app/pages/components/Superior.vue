<template>
  <client-only>
    <section class="superior-section">
      <div class="image-background"></div>
      <div class="container-fluid superior-container">
        <div class="row align-items-center h-100">
          <div class="col-sm-6 col-md-12 form-col">
            <div class="form-content col-sm-12 col-md-6 col-lg-3">
              <img src="/logo.png" class="logo" alt="Logo" />
              <h1 class="title">Aqui vai para um título persuasivo</h1>
              <p>Aqui pode ir uma subheadline mais explicativa</p>
              <form class="formulario" @submit.prevent="submitForm">
                <label for="email">
                  <input
                    type="email"
                    class="inputCampo"
                    id="email"
                    placeholder="E-mail"
                    v-model="v$.email.$model"
                    @blur="v$.email.$touch()"
                    :class="{ 'is-invalid': v$.email.$error }"
                  />

                  <div class="error-container">
                    <span v-if="v$.email.$error" class="error-message">
                      <p v-for="error of v$.email.$errors" :key="error.$uid">
                        <i></i>
                        {{ error.$message }}
                      </p>
                    </span>
                  </div>
                </label>

                <label for="phone">
                  <input
                    type="tel"
                    class="inputCampo"
                    id="telefone"
                    placeholder="Whatsapp"
                    v-model="v$.phone.$model"
                    @blur="v$.phone.$touch()"
                    :class="{ 'is-invalid': v$.phone.$error }"
                  />

                  <div class="error-container">
                    <span v-if="v$.phone.$error" class="error-message">
                      <p v-for="error of v$.phone.$errors" :key="error.$uid">
                        <i></i>
                        {{ error.$message }}
                      </p>
                    </span>
                  </div>
                </label>
                <button type="submit" class="botao" id="botao">
                  Nome do Botão
                </button>
                <div class="alert-container">
                  <span></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

//VARIAVEL PARA ARMAZENAR DADOS DIGITADOS NO FORMULARIO
const state = reactive({
  email: "",
  phone: "",
});

const rules = computed(() => ({
  email: {
    //VALIDAÇÃO QUE APRESENTA MENSAGEM DE ERRO
    required: helpers.withMessage("O campo e-mail é obrigatório.", required),
    email: helpers.withMessage(
      "O campo e-mail deve ser um e-mail válido.",
      email
    ),
  },
  phone: {
    required: helpers.withMessage("O telefone é obrigatório.", required),
    isValidPhone: helpers.withMessage(
      "Insira um telefone válido (ex: 11999999999).",
      (value) => {
        if (!value) return true;
        const cleanedValue = value.replace(/\D/g, "");
        return cleanedValue.length >= 10 && cleanedValue.length <= 11;
      }
    ),
  },
}));

const v$ = useVuelidate(rules, state);

//FUNÇÃO ASSINCRONA PARA ENVIO DO FORMULARIO E EXIBIÇÃO DE MENSAGEM
const submitForm = async () => {
  const isFormValid = await v$.value.$validate();
  const alertContainer = document.querySelector(".alert-container");
  if (isFormValid) {
    alertContainer.textContent = "Formulário Validado!";
  } else {
    alertContainer.textContent = "Por favor, corrija os erros no formulário.";
  }
};

//CODIGO DESCARTADO
//export default {
//para executar a função após carregar a pagina (DOM)
//mounted() {
//função para simples funcionamento do formulario
//const botaoValor = document.getElementById("botao");
//const emailInput = document.getElementById("email");
//const telefoneInput = document.getElementById("telefone");

//botaoValor.addEventListener("click", () => {
//const emailValor = emailInput.value;
//const telefoneValor = telefoneInput.value;
//alert(`E-mail: ${emailValor} - Telefone: ${telefoneValor}`);
//});
//},
//};
</script>

<style scoped>
.alert-container {
  margin-top: 10px;
}

.superior-section {
  height: 80vh;
}

.error-container {
  height: 0px;
}

.error-message {
  color: rgb(238, 13, 13);
  margin-bottom: 10px;
}
.superior-container {
  display: flex;
  justify-content: center;
  position: relative;
  top: -73vh;
  height: auto;
  width: 70%;

  background-color: rgb(255, 255, 255);
  border-radius: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 30px;
}

.row {
  height: 100%;
}

.image-background {
  height: 100%;
  width: 100%;

  background-image: url("../../../public/fundo.png");
  background-size: cover;
  background-position: center 5%;
  background-repeat: no-repeat;
}

.form-content {
  width: 100%;
  max-width: 400px;
  font-size: large;
  text-align: left;
  font-style: arial;
  align-items: center;
}
.title {
  font-size: 22px;
  font-style: bold;
  color: #000;
  margin-bottom: 20px;
  margin-left: 5%;
}

.inputCampo {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 25px;
  text-align: left;
}

.botao {
  width: 100%;
  padding: 10px;
  background-color: #1e1af1;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50vh;
}

/* media querys para dimensionamento dos componentes em diferentes tamanhos */

/*em px está definido o tamanho da tela */
@media (min-width: 2000px) {
  .logo {
    width: 25vh;
  }
}

@media (min-width: 991px) {
  .superior-container {
    width: 38%;
    top: -98%;
    right: 15%;
  }

  .inputCampo {
    width: 70vh;
    align-items: center;
  }

  .botao {
    width: 70vh;
  }

  .form-content {
    max-width: 700px;
    text-align: center;
    align-items: center;
  }
}

@media (min-width: 767px) and (max-width: 991px) {
  .superior-container {
    width: 50%;

    padding: 50px;
    top: -68vh;
  }
  .image-background {
    height: 125%;
  }
}

@media (max-width: 767px) {
  .image-background {
    height: 125%;
    background-position: -100vh;
  }

  .superior-container {
    width: 70%;
    top: -68vh;
  }

  .inputCampo {
    width: 50vh;
  }

  .botao {
    width: 50vh;
  }
}

@media (max-width: 575px) {
  /* media query de ajuste para telas ainda menores */
  .inputCampo {
    width: 45vh;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    text-align: left;
  }

  .superior-container {
    width: 80%;

    top: -85vh;
  }

  .image-background {
    height: 100vh;
  }

  .botao {
    width: 45vh;
    margin: 10px;
  }

  .logo {
    width: 50vh;
  }

  .form-content {
    font-size: 12px;
    max-width: 600px;
    text-align: center;
    align-items: center;
  }

  .title {
    font-size: 19px;
  }
}
</style>
