<template>
  <section class="superior-section">
    <div class="image-column"></div>
    <div class="container-fluid superior-container">
      <div class="row align-items-center h-100">
        <div class="col-sm-6 col-md-12 form-col">
          <div class="form-content col-sm-6 col-md-12">
            <img src="/logo.png" class="logo" alt="Logo" />
            <h1 id="title">Aqui vai para um título persuasivo</h1>
            <p>Aqui pode ir uma subheadline mais explicativa</p>

            <input type="email" id="email" placeholder="E-mail" />
            <input type="tel" id="wpp" placeholder="Whatsapp" />
            <button
              type="submit"
              variant="primary"
              class="w-100 py-2"
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
  display: flex;
  justify-content: center;
  position: relative;
  top: -58vh;
  height: auto;
  width: 90%;
  background-color: rgb(255, 255, 255);
  border-radius: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 30px;
}
@media (min-width: 768px) {
  /* media query para a versão mobile ficar com o tamanho certo dos itens */
  .superior-container {
    height: auto;
    width: 35%;
    right: 20%;
    padding: 50px;
  }
}
.row {
  height: 100%;
}

.image-column {
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
}
#title {
  font-size: 22px;
  font-style: bold;
  color: #000;
  margin-bottom: 20px;
  margin-left: 5%;
}

#email,
#wpp {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  text-align: left;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40vh;
}
</style>
