<script setup>  
  import { ref } from 'vue'
  const test = ref(0)
  const buttonClicked = ref(false)
</script>

<template>

<h1 v-if=buttonClicked>information</h1>
<img src="src/assets/scoutiocn.png" width=100>
<button @click="buttonClicked = !buttonClicked">kk</button>

  
</template>