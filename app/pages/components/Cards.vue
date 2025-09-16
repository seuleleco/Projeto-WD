<template>
  <section class="content-cards">
    <div class="container">
      <div class="carousel-container row">
        <div class="carousel-track col-md-3 col-sm-3">
          <Card
            v-for="card in cardsData"
            :key="card.id"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "ContentCards",
  components: {
    Card,
  },
  data() {
    return {
      // array com os dados que serao usados nos cards
      cardsData: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-container {
  /*CODIGO QUE PERMITE A ROLAGEM DOS CARDS E IMPEDIR QUE ELES QUEBREM LINHA*/
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px;
}

.carousel-track {
  display: flex;
  gap: 20px;
  margin-left: 12vh;
}

.carousel-track .card-item {
  width: 250px; /* LARGURA DE CADA CARD, PODE VARIAS CONFORME TAMANHO DA TELA */
  flex-shrink: 0;
  white-space: normal;
}

.carousel-container::-webkit-scrollbar {
  height: 8px;
}

.carousel-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.carousel-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.carousel-container::-webkit-scrollbar-thumb:hover {
  background: #1640d6;
}

/* @media (min-width: 991px) {
  .carousel-track .card-item {
    width: 250px;
    position: relative;
  }
} */
</style>
