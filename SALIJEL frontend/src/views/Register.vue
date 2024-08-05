<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit">Register</button>
    </form>
    <div>
      <h2>Or</h2>
      <button @click="googleAuth">Register with Google</button>
      <button @click="facebookAuth">Register with Facebook</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      try {
        const res = await axios.post('/api/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', res.data.token);
        this.$router.push('/');
      } catch (err) {
        console.error(err);
      }
    },
    googleAuth() {
      window.location.href = '/auth/google';
    },
    facebookAuth() {
      window.location.href = '/auth/facebook';
    },
  },
};
</script>
