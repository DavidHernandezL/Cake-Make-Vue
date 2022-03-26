<template>
    <h1>Vea Nuestra variedad de Pasteles</h1>
    <div class="cakes">
      <Card v-for="cake in $store.state.cakes" :key="cake.id" :title="cake.name" :price="cake.price" :src="cake.src"/>
    </div>

    
</template>

<script>
import Card from '@/components/Card.vue'


export default {
  name: 'PastelesView',
  
  components: {
    Card
  }
}

</script>

<style scoped>
  .cakes {
    height: 100vh;
  }
</style>