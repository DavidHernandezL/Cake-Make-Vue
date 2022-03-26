<template>
    <div class="card">
        <div class="img">
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
    height: 280px;
    border: 3px solid white;
    background-color: rgba(97, 94, 94, 0.801);
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    transition: 0.3s;
    border-radius: 5px;
    color: #fff
  }

  .card:hover {
    cursor: pointer;
    transform: translateY(5px);
  }
  .card-img {
    width: 200px;
    height: 150px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    
  }

  .img {
    overflow-y: hidden;
  }
</style>