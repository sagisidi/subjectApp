<template>
  <v-layout row wrap>
    <v-flex>
      <v-toolbar absolute color="teal lighten-3" dark scroll-off-screen>
        <router-link to="/dashboard" v-ripple class="text-xs-center">Subject Manager</router-link>
        <v-spacer></v-spacer>
        <button v-if="$auth.check()" class="pull-right" color="info" @click.prevent="$auth.logout()">
          <v-icon>logout</v-icon>
          <router-link to="/dashboard"></router-link>
        </button>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>
