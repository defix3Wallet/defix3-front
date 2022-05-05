<template>
  <div class="container mt-12">
    <aside class="text-h1 font-weight-bold text-center mt-10">
      Mis Certificados
    </aside>
    <v-row class="mt-5">
      <v-col
        v-for="item, i in itemsCertificados"
        :key="i"
        class="col-3"
      >
        <viewer>
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.img"
            />
            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                Mintear
              </v-btn>
              <v-btn
                :href="item.img"
                download
                color="orange"
                text
              >
                Descargar
              </v-btn>
              <!-- <a
                :href="item.img"
                download
                class="btn btn-success"
              >
                Descargar imagen
              </a> -->
            </v-card-actions>
          </v-card>
        </viewer>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col class="col-6 offset-3">
        <aside class="text-h2 font-weight-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </aside>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-8 offset-2 text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, deleniti obcaecati sed facilis, iste, ipsa voluptates suscipit ullam dolore quos sunt culpa officia vitae error quo at in eum commodi!
        </p>
        <v-btn
          class="ma-2 mt-5"
          rounded
          outlined
          large
        >
          Certificate
        </v-btn>
      </v-col>
    </v-row>
    <qr-code text="este es el texto del qr" />
    <!-- <v-row>
      <v-col class="col-3">
        <v-card class="mx-auto">
          <v-container>
            <v-card-title>
              <v-avatar
                color="blue"
                size="56"
              >
                <v-icon>mdi-database</v-icon>
              </v-avatar>
              <p class="text-h3 font-weight-medium mt-4">
                NEAR Certified Analyst
              </p>
            </v-card-title>
            <v-card-text class="mt-4">
              <aside class="text-subtitle-1">
                Este curso es una oportunidad para que los usuarios técnicos y no técnicos aprendan sobre el potencial de la Web Abierta y propongan soluciones significativas para el desarrollo.
              </aside>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
      <v-col class="col-3">
        <v-card class="mx-auto">
          <v-container>
            <v-card-title>
              <v-avatar
                color="blue"
                size="56"
              >
                <v-icon>mdi-xml</v-icon>
              </v-avatar>
              <p class="text-h3 font-weight-medium mt-4">
                NEAR Certified Developers
              </p>
            </v-card-title>
            <v-card-text class="mt-4">
              <aside class="text-subtitle-1">
                Este curso es una oportunidad para que desarrolladores web obtengan la capacidad de diseñar, desarrollar, probar e implementar contratos inteligentes en la plataforma NEAR.
              </aside>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
      <v-col class="col-3">
        <v-card class="mx-auto">
          <v-container>
            <v-card-title>
              <v-avatar
                color="blue"
                size="56"
              >
                <v-icon>mdi-school</v-icon>
              </v-avatar>
              <p class="text-h3 font-weight-medium text-left mt-4">
                NEAR Certified Professors
              </p>
            </v-card-title>
            <v-card-text class="mt-4">
              <aside class="text-subtitle-1">
                Este curso es una oportunidad para educadores y profesores de aprender cómo enseñar la tecnología de NEAR en sus comunidades, escuelas o universidades.
              </aside>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
      <v-col class="col-3">
        <v-card class="mx-auto">
          <v-container>
            <v-card-title>
              <v-avatar
                color="blue"
                size="56"
              >
                <v-icon>mdi-human-male-board</v-icon>
              </v-avatar>
              <p class="text-h3 font-weight-medium mt-4">
                NEAR Certified Instructors
              </p>
            </v-card-title>
            <v-card-text class="mt-4">
              <aside class="text-subtitle-1">
                Este curso prepara a miembros ambiciosos de la comunidad para diseñar y dirigir sus propios cursos, por lo que se requiere al menos otra certificación NEAR antes de tomar este curso.
              </aside>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        itemsCertificados: [
          { img: require('../../assets/certificado.png') },
          { img: require('../../assets/certificado.png') },
          { img: require('../../assets/certificado.png') },
          { img: require('../../assets/certificado.png') },
        ],
      }
    },
    mounted () {

    },
    methods: {},
  }
</script>
<style>
</style>
