<template>
  <h1>{{ message }}</h1>
  <food-item></food-item>

  <button @click="mycomp = 'birds-comp'">comp1</button>
  <button @click="mycomp = 'flower-comp'">comp2</button>

  <p>Choose what part of this page you want to see:</p>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link><br>
  <div>
    <router-view></router-view>
  </div>
  
  <div>
    <component :is="mycomp">Show here</component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mycomp: ''
    };
  }
};
</script>

<style>

</style>