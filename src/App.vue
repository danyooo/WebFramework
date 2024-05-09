<!-- <v-icon scouticon= "src/assets/scoutiocn.png"> </v-icon>
 -->
<script setup>  
  import { ref } from 'vue'
  
  // create a class for handling button clicks
  class IconButton{
    
   buttonClicked = ref(false) 
    
    // create a function for toggling
    toggleButton(){
      this.buttonClicked.value = !this.buttonClicked.value
    }
  }
  // create an object to handle the scouts button click
  const scoutButton = new IconButton()
</script>
 
<template>
  <!--create a button that when clicked, is not itself(kind of like a negative) -->
  <!-- attach an icon to the button-->
<v-btn icon @click="scoutButton.toggleButton()">
  <!-- create the icon and set the image source to scouticon.png-->
<v-icon>
  <!--TODO: Find a way for the width to scale with button size( so no need to do it manually it just perfectly fits) -->
 <img src= "@/assets/scouticon.png" width = 100 />
</v-icon>
</v-btn>
  <!-- if the button is clicked..-->
<h1 v-if=scoutButton.buttonClicked.value> <v-card elevation = "10"  title="The Scout" 
text="The scout is an offensive class
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
</template>


