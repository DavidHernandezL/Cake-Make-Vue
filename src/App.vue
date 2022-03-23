<template>
  <nav>
    <div class="logoPrincipal">
      <img class="logo" src="./assets/logo.png" alt="Cake Make logo">
    </div>
    <div class="links">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">¿Quienes Somos?</router-link> |
      <router-link to="/cakes">Pasteles</router-link> |
      <router-link to="/create">Crear Pastel</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  background-image: url(./assets/3.jpg);
  background-size: cover;
}

.logo {
  width: 80px;
}

nav {
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(77, 179, 179)
}

nav a {
  font-weight: bold;
  margin: 0 10px;
  color: rgb(196, 230, 233);
}

nav a.router-link-exact-active {
  color: #0e2d30;
}

.cakes {
  padding: 10px 50px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
}
</style>

