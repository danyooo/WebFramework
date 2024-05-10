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

<v-card v-if=scoutButton.buttonClicked.value 
  variant=tonal
  color=#F49156
  max-width="600"
  max-height="800"
  elevation = "10"  
  title="The Scout" 
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
    class="bg-red-lighten-2"
    contain
    
    ></v-img>

  <!-- embed trailer video-->
        <iframe 
          width="560"
          height="315"
          src="https://www.youtube.com/embed/geNMz0J9TEQ?si=NWM0XPUuA2O6F-DA"
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>

        </iframe>
  
</v-card>
  <div class = "engi">
    
  <v-btn   icon @click="buttonClicked = !buttonClicked">
    
    <!-- create the icon and set the image source to engineericon.png-->
  <v-icon>
    <!--TODO: Find a way for the width to scale with button size( so no need to do it manually it just perfectly fits) -->
   <img src= "https://o.remove.bg/downloads/545a4ff8-23b7-4191-8bee-b6b80e2d8f9f/image-removebg-preview.png"
     width = 50
     />
    
  </v-icon>
    
  </v-btn>
</div>
</template>


