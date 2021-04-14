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
                            :rules="[rules.email]"
                            type="text"
                            color="blue darken-1"
                            prepend-icon="mdi-email"
                          />
                          <v-text-field
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                            id="password"
                            label="Mot de passe"
                            name="password"
                            color="blue darken-1"
                            prepend-icon="mdi-lock"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Mot de passe oublié ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="blue darken-1" dark>
                          <router-link :to="'/Dashboard/'"
                            >Connexion
                          </router-link></v-btn
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
                        <v-form ref="form" v-model="form" class="pa-4 pt-6">
                          <v-text-field
                            v-model="prenom"
                            label="Prénom"
                            name="Name"
                            type="text"
                            color="blue darken-1"
                            :rules="[rules.required]"
                             prepend-icon="mdi-account"
                          />
                          <v-text-field
                            v-model="nom"
                            label="Nom"
                            name="Name"
                            type="text"
                            color="blue darken-1"
                            :rules="[rules.required]"
                             prepend-icon="mdi-account"
                          />
                          <v-text-field
                            v-model="telephone"
                            label="Téléphone"
                            name="Name"
                            type="text"
                            color="blue darken-1"
                             prepend-icon="mdi-phone"
                          />
                          <v-text-field
                            v-model="email"
                            :rules="[rules.email]"
                            label="Email"
                            name="Email"
                            type="text"
                            color="blue darken-1"
                            prepend-icon="mdi-email"
                          />

                          <v-text-field
                            v-model="password"
                            :rules="[rules.password, rules.length(6)]"
                            id="password"
                            label="Mot de passe"
                            name="password"
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                            color="blue darken-1"
                            prepend-icon="mdi-lock"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="blue darken-1"
                          :disabled="!form"
                          :loading="isLoading"
                          @click="createUser"
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
    rules: {
      email: (v) =>
        !!(v || "").match(/@/) || "Veuillez entrer une adresse email valide",
      length: (len) => (v) =>
        (v || "").length >= len ||
        `Longueur de caractères non valable, obligatoire ${len}`,
      password: (v) =>
        !!(v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/) ||
        "Le mot de passe doit contenir au moins 6 caracteres, une majuscule, une minuscule et un caractère numérique",
      required: (v) => !!v || "Ce champ est requis",
    },
    email: undefined,
    nom: undefined,
    prenom: undefined,
    password: undefined,
    telephone: undefined,
    value: true,
    body: {},
    form: false,
    isLoading: false,
  }),
  props: {
    source: String,
  },
  methods: {
    createUser: function() {
      "";
    },
  },
};
</script>
