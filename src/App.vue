<!-- <v-icon scouticon= "src/assets/scoutiocn.png"> </v-icon>
 -->
<script setup>  
  import { ref } from 'vue'
  // buttonclicked is false
  const buttonClicked = ref(false)
</script>
 
<template>
  <!--create a button that when clicked, is not itself(kind of like a negative) -->
  <!-- attach an icon to the button-->
<v-btn icon @click="buttonClicked = !buttonClicked">
  <!-- create the icon and set the image source to scouticon.png-->
<v-icon>
  <!--TODO: Find a way for the width to scale with button size( so no need to do it manually it just perfectly fits) -->
 <img src= "@/assets/scouticon.png" width = 100 />
</v-icon>
</v-btn>
  <!-- if the button is clicked..-->
<p v-if=buttonClicked> 
  <!--display text -->
sup brother </p>


  
</template>
