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

            <input type="email" class="inputCampo" placeholder="E-mail" />
            <input type="tel" class="inputCampo" placeholder="Whatsapp" />
            <button
              type="submit"
              variant="primary"
              class="botao"
              onclick="{{ alert('Botão Clicado') }}"
            >
              Nome do Botão
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.superior-section {
  height: 60vh;
}

.superior-container {
  /*o ajuste padrão deste elemento esta para a versão mobile, versão desktop possui um media query*/
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

@media (min-width: 768px) {
  .superior-container {
    height: auto;
    width: 36%;
    right: 20%;
    padding: 50px;
    top: -58vh;
  }
}

@media (max-width: 767px) {
  /* media query para dimensionamento dos componentes no tamanho para mobile */
  .image-background {
    height: 125%;
    background-position: -120vh;
  }
}

@media (max-width: 480px) {
  /* media query de ajuste para telas ainda um pouco menores */
  .inputCampo {
    width: 80%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    text-align: left;
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
