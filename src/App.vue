<script setup>

</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="11">
          <router-view />
        </v-col>
        <v-col cols="1">
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
</style>
