<template>
  <div class="titulos">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <h3>Texto aqui</h3>
        <h1>Mais outro bem texto aqui</h1>
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulos {
  margin-top: 3vh;
  margin-bottom: 3vh;
  text-align: center;
}

.text {
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
}

/*media querys*/

@media (max-width: 767px) {
  .titulos {
    margin-top: 17vh;
  }
}
@media (min-width: 768px) {
  .titulos {
    margin-top: 10vh;
  }
}
</style>
