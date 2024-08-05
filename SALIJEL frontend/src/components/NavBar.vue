<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/home">À propos</router-link></li>
            <li><router-link to="/events">Événements</router-link></li>
            <li><router-link to="/libraries">Libraries</router-link> </li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/register">Inscription</router-link> </li>
            <li><router-link to="/login">Connexion</router-link> </li>
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