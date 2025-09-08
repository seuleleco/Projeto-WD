<template>
  <section class="superior-section">
    <div class="image-background"></div>
    <div class="container-fluid superior-container">
      <div class="row align-items-center h-100">
        <div class="col-sm-6 col-md-12 form-col">
          <div class="form-content col-sm-12 col-md-6 col-lg-3">
            <img src="/logo.png" class="logo" alt="Logo" />
            <h1 class="title">Aqui vai para um título persuasivo</h1>
            <p>Aqui pode ir uma subheadline mais explicativa</p>

            <input
              type="email"
              class="inputCampo"
              id="email"
              placeholder="E-mail"
              required
            />
            <input
              type="tel"
              class="inputCampo"
              id="telefone"
              placeholder="Whatsapp"
              required
            />
            <button type="submit" class="botao" id="botao">
              Nome do Botão
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    //para executar a função após carregar a pagina (DOM)
    //função para simples funcionamento do formulario
    const botaoValor = document.getElementById("botao");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");

    botaoValor.addEventListener("click", () => {
      const emailValor = emailInput.value;
      const telefoneValor = telefoneInput.value;
      alert(`E-mail: ${emailValor} - Telefone: ${telefoneValor}`);
    });
  },
};
</script>

<style scoped>
.superior-section {
  height: 60vh;
}

.superior-container {
  display: flex;
  justify-content: center;
  position: relative;
  top: -73vh;
  height: auto;
  width: 90%;

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
  background-position: center;
  background-repeat: no-repeat;
}

.form-content {
  width: 100%;
  max-width: 400px;
  font-size: large;
  text-align: center;
  font-style: arial;
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
  margin-bottom: 20px;
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
  width: 40vh;
}

/* media querys */

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
  /* media query para dimensionamento dos componentes no tamanho para mobile */
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
  /* media query de ajuste para telas ainda um pouco menores */
  .inputCampo {
    width: 80%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    text-align: left;
  }

  .superior-container {
    width: 80%;
  }

  .image-background {
    height: 100vh;
  }

  .botao {
    width: 70%;
    margin: 10px;
  }

  .logo {
    width: 30vh;
  }

  .form-content {
    font-size: 12px;
  }

  .title {
    font-size: 19px;
  }
}
</style>
