<template>
  <section class="content-cards">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="card in cardsData" :key="card.id">
          <Card :title="card.title" :description="card.description" />
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
      //array com os dados que serao usados nos cards
      cardsData: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet?",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>
