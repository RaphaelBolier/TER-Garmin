<template>
  <v-app id="nav">
    <v-app-bar color="gray" style="flex: 0" flat>
      <v-img
        class="mx-2"
        src="../assets/garmin_logo.png"
        max-height="100"
        max-width="100"
        href="contain"
      ></v-img>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'black' : 'transparent'"
        size="32"
      ></v-avatar>
      <v-tabs centered class=" mt-4; tabs" color="black" v-model="activeTab">
        <v-tab
          class="tab"
          v-for="tab of tabs"
          :key="tab.route"
          :to="tab.route"
          exact
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeTab: ``,
      tabs: [
        { name: "Accueil", route: `/HomePage` },
        { name: "A propos", route: `/About` },
      ],
    };
  },
};
</script>
