<template>
    <form>
        <label for="cliente">Nombre: </label>
        <input type="text" id="cliente" placeholder="David Hernandez">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="David@email.com">
        <label for="tel">Telefono</label>
        <input type="tel" name="tel" id="tel" placeholder="2221234569">
        <label for="desc">Describenos tu pedido</label>
        <textarea></textarea>

        <div v-for="sabor in $store.state.sabores" :key="sabor.id">
            <label :for="sabor.name">
                <input :v-model="pedido.sabor" type="checkbox" :value="sabor.name" id="Fresa" class="checkbox">
                <Card :title="sabor.name" :price="sabor.price" :src="sabor.src"/>
            </label>
            

            {{pedido.sabor}}
        </div>
    </form>
</template>

<script>

    import Card from '@/components/Card.vue'
    export default {
        name: 'formCake',
        data() {
            return {
                pedido: {
                    sabor: []
                }
            }
        },
        components: {
            Card,
        }
    }


</script>

<style scoped>
    .checkbox:checked ~ .card{
        border: 3px solid rgb(21, 31, 163);
        
    }

</style>