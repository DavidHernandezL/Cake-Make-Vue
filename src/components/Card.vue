<template>
    <div class="card">
        <div >
          <img class="card-img" :src="src" alt="Pastel">
        </div>
        <div class="card-body">
            <h2 class="title">{{ title }}</h2>
            <p class="price">$ {{ price }}</p>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    price: Number,
    src: String,
  },
}
</script>


<style scoped>
  .card {
    width: 200px;
    border-radius: 10px;
    border: 1px solid #ddeedd;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    background-color: rgba(106, 185, 216, 0.9);
  }

  .card:hover {
    cursor: pointer;
    transform: translateY(5px);
  }
  .card-img {
    width: 200px;
    height: 200px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    image-rendering: center;
  }


</style>