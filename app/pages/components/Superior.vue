<template>
  <section class="superior-section">
    <div class="col-md-12 image-column"></div>
    <div class="container-fluid superior-container">
      <div class="row align-items-center h-100">
        <div class="col-md-12 form-col">
          <div class="form-content col-md-4">
            <img src="../../../public/logo.png" alt="Logo" />
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
  height: 70vh;
}

.superior-container {
  display: flex;
  justify-content: center;
  position: relative;
  top: -65vh;
  height: auto;
  width: 70vh;
  background-color: rgb(255, 255, 255);
  border-radius: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
}
.row {
  height: 100%;
}

.image-column {
  height: 100%;
  background-image: url("../../../public/fundo.png");
  background-size: cover;

  height: 100%;
}
.form-content {
  width: 100%;
  max-width: 4000px;
}
#title {
  font-size: 22px;
  font-style: bold;
  color: #000;
  margin-bottom: 10px;
  margin-left: 5%;
}
</style>
