<template>
  <div class="reseaux_container">
    <a class="reseau_link" href="https://www.facebook.com/limonadefroide/" target="_blank">
      <img alt="Lien vers la page Facebook du groupe" class="facebook"
           src="@/assets/img/brand_logos/facebook_no_bg.png">
    </a>
    <a class="reseau_link" href="https://www.instagram.com/cold_lim/" target="_blank">
      <img alt="Lien vers la page Instagram du groupe" class="instagram"
           src="@/assets/img/brand_logos/instagram_no_bg.png">
    </a>
    <a class="reseau_link" href="https://www.instagram.com/cold_lim/" target="_blank">
      <img alt="Lien vers la page Instagram du groupe" class="instagram"
           src="@/assets/img/brand_logos/instagram_no_bg.png">
    </a>
    <a class="reseau_link" href="https://www.instagram.com/cold_lim/" target="_blank">
      <img alt="Lien vers la page Instagram du groupe" class="instagram"
           src="@/assets/img/brand_logos/instagram_no_bg.png">
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialNetworks"
}
</script>

<style lang="scss" scoped>

.reseaux_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 7%;
  padding-top: 20px;
  padding-bottom: 20px;

  @media(min-width: 600px) {
    padding-left: 20%;
    padding-right: 20%;
  }

  .reseau_link {
    height: 100%;
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
  }
}
</style>