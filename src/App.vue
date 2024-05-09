
<script setup>  

  import { ref } from 'vue'
  const test = ref(0)
  const buttonClicked = ref(false)
</script>

<template>

<h1 v-if=buttonClicked> <v-card elevation = "10"  title="The Scout" text="The scout is an offensive class
  that focuses on his speed to flank enemies and attack them with his
  scattergun, pistol or bat. 
  However he is frail and can
   only take 125 damage.
   To counteract this
   he can use his double jump
   to evade bullets. He is the
    fastest character in the game">
  <v-img
    height="300"
    src="https://tcrf.net/images/b/bc/TF2Final_ClassScoutRed.png"
    contain
    
    ></v-img>
  <!-- embed trailer video-->
  <iframe width="560" height="315" src="https://www.youtube.com/embed/geNMz0J9TEQ?si=NWM0XPUuA2O6F-DA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
</v-card></h1>

<v-btn icon @click = "buttonClicked = !buttonClicked">
<v-icon>
<img src  = "src/assets/scouticon.png" width=100 />
  
</v-icon>
  
</v-btn>

  
</template>

