<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="cakes">
      <Card v-for="(cake) in $store.state.cakes" :key="cake.id" :title="cake.name" :price="cake.price" :src="cake.src"/>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Card
  }
}

</script>

