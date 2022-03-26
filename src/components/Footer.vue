<template>
    <footer>
        <ul class="social">
            <li><a href="https://www.facebook.com"><box-icon name='facebook-circle' type='logo' color="#385898"></box-icon>Cake Make</a></li>
            <li><a href="https://www.instagram.com"><box-icon name='instagram' type='logo' color="white"></box-icon>Cake Make Bakery</a></li>
        </ul>

        <div class="address">
            <box-icon name='home-alt' color="white"></box-icon>
            Calle Principal Numero 564 Colonia Centro Teziutlán
        </div>

        <div class="hour">
            <box-icon name='time' color="white"></box-icon>
            <div class="horas">
                <p>Lunes a Viernes de 8:00 am - 8:00 pm</p>
                <p>Sábados de 10:00 am - 4:00 pm</p>
            </div>
        </div>
    </footer>
</template>

<script>
    import 'boxicons'
    export default {
        name: 'Footer',
    }
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
        text-align: left;
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin-left:30px ;
    }

    footer {
        background: rgb(77, 179, 179);
        position: relative;
        bottom: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
    }

    p {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .hour {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
        margin-right: 50px;
        text-align: left;
    }    
</style>