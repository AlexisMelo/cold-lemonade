<template>
  <div class="accueil_container">
    <div class="titre_du_groupe">{{ title }}</div>
    <div class="logo_container">
      <img alt="Logo du groupe Cold Lemonade" class="logo" src="@/assets/logo_no_background.png">
    </div>
    <div class="description_container">
      " Deux ados qui chantent avec une qui joue de la guitare et une qui chante plus aigu que l'autre et qui joue du
      violon aussi un peu des fois "
    </div>
    <div class="reseaux_container">
      <a class="reseau_link" href="https://www.facebook.com/limonadefroide/" target="_blank">
        <img alt="Lien vers la page Facebook du groupe" class="facebook" src="@/assets/facebook_no_bg.png">
      </a>
      <a class="reseau_link" href="https://www.instagram.com/cold_lim/" target="_blank">
        <img alt="Lien vers la page Instagram du groupe" class="instagram" src="@/assets/instagram_no_bg.png">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Accueil',
  data() {
    return {
      title: "Cold Lemonade"
    }
  }
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.accueil_container {
  background-image: url('https://scontent-frt3-1.xx.fbcdn.net/v/t1.18169-9/16265370_370152953350920_8291826055577056169_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=9267fe&_nc_ohc=b8C7I2CC3vAAX9LB1yo&_nc_ht=scontent-frt3-1.xx&oh=ddacca9d3bf841710ed115b60eab159d&oe=6179EF5E');
  height: 100%;
  background-position: 40%;

  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 600px) {
    background-image: url('~@/assets/scene_tramplin.jpg');
    background-position: center;
  }
}

.logo_container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 6%;
  margin-top: -4%;

  @media (min-width: 600px) {
    height: 8%;
  }
}

.logo {
  height: 100%;
}

.titre_du_groupe {
  color: #edd966;
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
  background-color: #182e85;
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
  background-color: #edd966;
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
