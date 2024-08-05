<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div>
      <h2>Or</h2>
      <button @click="googleAuth">Login with Google</button>
      <button @click="facebookAuth">Login with Facebook</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      try {
        const res = await axios.post('/api/auth/login', {
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
