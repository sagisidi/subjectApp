<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>There was an error, unable to sign in with those credentials.</p>
    </div>
    <form autocomplete="off" @submit.prevent="login" method="post">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="user@example.com"
          v-model="email"
          required
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-default">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      error: false
    };
  },
  methods: {
    login() {
      var app = this;
      this.$auth.login({
        params: {
          email: app.email,
          password: app.password
        },
        success: function() {},
        error: function() {},
        rememberMe: true,
        redirect: "/dashboard",
        fetchUser: true
      });
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
