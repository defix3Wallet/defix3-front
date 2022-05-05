<template>
  <v-app-bar
    absolute
    app
    elevation="4"
    height="90"
    style="position:fixed !important;background-color: white !important;"
  >
    <div class="container">
      <div class="d-lg-flex justify-content-between">
        <v-col
          class="d-none"
          align-self="center"
        >
          <v-app-bar-nav-icon />
        </v-col>
        <v-col
          class="col-3 d-flex justify-start mt-8"
        >
          <v-toolbar-title>
            <router-link
              to="/"
              style="text-decoration: none"
            >
              <v-img
                width="200"
                src="../../../../assets/near-hispano-logo.png"
              />
            </router-link>
          </v-toolbar-title>
        </v-col>
        <v-col
          class="col-6 d-flex justify-center mt-7"
          align-self="center"
        >
          <v-autocomplete
            v-model="values"
            :items="items"
            outlined
          />
        </v-col>
        <v-col
          class="col-3 d-flex justify-end mt-3"
        >
          <div
            class="my-2 text-right"
          >
            <v-btn
              class="ma-2"
              rounded
              outlined
              large
            >
              Conectar Wallet
            </v-btn>
          </div>
        </v-col>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'DashboardCoreAppBar',
    data () {
      return {
        sesion: false,
        accountId: '',
        loading: false,
        items: [],
        search: null,
        select: null,
        values: null,
      }
    },
    computed: {
      ...mapState(['drawer']),
    },
    mounted () {
    },
    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
<style >
  .container {
    max-width: 1300px;
  }
</style>
