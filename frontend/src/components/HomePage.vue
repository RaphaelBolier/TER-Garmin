<template>
  <v-app id="accueil">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 blue--text text--blue darken-1"
                        >
                          Connexion
                        </h1>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="blue darken-1"
                          />

                          <v-text-field
                            id="password"
                            label="Mot de passe"
                            name="password"
                            type="password"
                            color="blue darken-1"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Mot de passe oublié ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="blue darken-1" dark
                          >Connexion</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue darken-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center mt-3 display-1">
                          Commencez votre journée avec nous
                        </h1>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >Créer un compte</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue darken-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Retour à la connexion
                        </h1>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >Connexion</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 blue--text text--blue darken-1"
                        >
                          S'inscrire
                        </h1>
                        <h4 class="text-center grey--text mt-3">
                          C'est rapide et facile.
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Prénom"
                            name="Name"
                            type="text"
                            color="blue darken-1"
                          />
                          <v-text-field
                            label="Nom"
                            name="Name"
                            type="text"
                            color="blue darken-1"
                          />
                          <v-text-field
                            label="Téléphone"
                            name="Name"
                            type="text"
                            color="blue darken-1"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="blue darken-1"
                          />

                          <v-text-field
                            id="password"
                            label="Mot de passe"
                            name="password"
                            type="password"
                            color="blue darken-1"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="blue darken-1" dark
                          >Inscription</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>
