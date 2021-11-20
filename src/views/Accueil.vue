<template>
  <div class="accueil_container">
    <div class="logo_container">
      <img alt="Logo du groupe Cold Lemonade" class="logo" src="@/assets/img/cold_lim_logos/noir_bleu.png">
    </div>
    <div class="description_container">
      " Deux ados qui chantent avec une qui joue de la guitare et une qui chante plus aigu que l'autre et qui joue du
      violon aussi un peu des fois "
    </div>
    <div class="reseaux_container">
      <a class="reseau_link" href="https://www.facebook.com/limonadefroide/" target="_blank">
        <img alt="Lien vers la page Facebook du groupe" class="facebook" src="@/assets/img/brand_logos/facebook_no_bg.png">
      </a>
      <a class="reseau_link" href="https://www.instagram.com/cold_lim/" target="_blank">
        <img alt="Lien vers la page Instagram du groupe" class="instagram" src="@/assets/img/brand_logos/instagram_no_bg.png">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Accueil'
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.accueil_container {
  background-image: url('~@/assets/img/photos/scene_tramplin.jpg');
  height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 600px) {
    background-image: url('~@/assets/img/photos/scene_tramplin.jpg');
  }
}

.logo_container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 10%;
  padding-top: 2%;

  @media (min-width: 600px) {
    height: 15%;
  }

  .logo {
    height: 100%;
  }
}


.titre_du_groupe {
  color: $cl_yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Satisfy', cursive;
  font-size: 15vw;
  padding-top: 5%;

  @media (min-width: 600px) {
    font-size: 10vw;
    padding-top: 0;
  }
}

.description_container {
  background-color: $cl_dark_green;
  margin-top: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vw;
  text-align: center;
  padding: 5% 2%;
  font-style: oblique;

  @media (min-width: 600px) {
    margin-top: 30%;
    font-size: 1.5rem;
    padding: 3% 10%;
  }
}

.reseaux_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: $cl_yellow;
  height: 25%;

  @media(min-width: 600px) {
    padding-left: 20%;
    padding-right: 20%;
  }

  .reseau_link {
    height: 20%;
    text-align: center;

    img {
      height: 100%;
    }

    .facebook:hover {
      filter: drop-shadow(0 0 0.15rem blue);
    }

    .instagram:hover {
      filter: drop-shadow(0 0 0.15rem purple);
    }

    @media (min-width: 600px) {
      height: 30%;
    }
  }
}
</style>
