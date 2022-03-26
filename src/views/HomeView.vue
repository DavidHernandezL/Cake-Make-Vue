<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="favorites">
      <h1>Los favoritos del mundo...</h1>
      <div class="cakes">
        <Card v-for="(cake) in $store.getters.favorites" :key="cake.id" :title="cake.name" :price="cake.price" :src="cake.src"/>
      </div>
    </div>
  </div>
</template>


<script>
import Card from '@/components/Card.vue'


export default {
  name: 'HomeView',

  components: {
    Card
  }
}

</script>

<style >
  .home{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90vh;
  }

  h1 {
    color: #fff;
    font-size: 40px;
  }
</style>