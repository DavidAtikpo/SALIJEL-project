<!-- src/components/Header.vue -->
<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/salijel">SALIJEL</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  

<script>
  export default {
    name: 'NavBar'
  };
</script>

<style scoped>
nav {
    background-color: #333;
    padding: 1rem;
}
nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}
nav ul li {
    color: white;
}
nav ul li a {
    color: white;
    text-decoration: none;
}
@media only screen and ( max-width:768px) {
    nav ul {
        font-size: 12px;
    }
    nav {
        width: auto;
    }
}
</style>