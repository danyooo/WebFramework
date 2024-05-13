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
  const engiButton = new IconButton()
</script>
 
<template>
  
  <!--create a button that when clicked, is not itself(kind of like a negative) -->
  <!-- attach an icon to the button-->
<div class = scout>   
<v-btn icon @click="scoutButton.toggleButton()">

  <!-- create the icon and set the image source to scouticon.png-->
<v-icon>
  
  <!--TODO: Find a way for the width to scale with button size( so no need to do it manually it just perfectly fits) -->
 <img src= "@/assets/scouticon.png" width = 100 />
  
</v-icon>
</v-btn>
</div>
  <!-- if the button is clicked..-->

<v-card v-if=scoutButton.buttonClicked.value 
  variant=tonal
  color=bg-red-lighten-2
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
    
  <v-btn   icon @click="engiButton.toggleButton()">
    
    <!-- create the icon and set the image source to engineericon.png-->
  <v-icon>
    <!--TODO: Find a way for the width to scale with button size( so no need to do it manually it just perfectly fits) -->
   <img src= "src/assets/EngineerICONBLU.png"
     width = 100
     />
    
  </v-icon>
    
  </v-btn>
<div class = engibutt>
    <v-card v-if=engiButton.buttonClicked.value 
      variant=tonal
      color=bg-red-lighten-2
      max-width="600"
      max-height="800"
      elevation = "10"  
      title="The Engineer" 
      text="The engineer is a support class
      that focuses on his machines to defend against enemies and attack them with his
      shotgun, pistol or wrench. 
      He has 3 machines. A sentry gun which fires at enemies, a dispenser which heals teammates and gives them ammo(metal for engineer), and two teleporters(entrance and exit) that teleport his team to wherever he places his exit.
       He can only take 125 damage.
       To counteract this
       he can set up a nest to lockdown areas with his sentry and dispenser.
       ">
      <v-img

      height="300"
      src="src/assets/image-removebg-preview (3).png"
      class="bg-blue-lighten-1"
      contain

      ></v-img>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SNgNBsCI4EA?si=rrEoLqjGocvENXNi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </v-card>
</div>
</div>
</template>


