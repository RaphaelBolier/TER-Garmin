<template>
  <v-app id="about">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="8">
          <v-card>
            <v-card-title class="justify-center"> PROJET TER </v-card-title>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
            <v-card-title class="justify-center"> Encadrant </v-card-title>
            <v-card-text>
              <v-row >
                <v-col align="center">
                  Monsieur Gilles MENEZ
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-title class="justify-center" > Éleves </v-card-title>
              <v-card-text>
              <v-row >
                <v-col align="center">
                  Raphael BOLIER - Guilhem FABRE--SAUTEREY - Corentin GARNIER - Rémi LONGIN
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
