<template>
  <v-app-bar
    absolute
    app
    elevation="4"
    style="position:fixed !important;background-color: white !important;"
  >
    <v-container>
      <v-row>
        <v-col
          class="d-md-none"
          align-self="center"
        >
          <v-app-bar-nav-icon />
        </v-col>
        <v-col
          class="col"
          align-self="center"
        >
          <v-toolbar-title>
            <a
              href="/"
              class="black--text"
              style="text-decoration: none"
            >
              <v-img
                width="60"
                src="../../../../assets/logo.png"
              />
            </a>
          </v-toolbar-title>
        </v-col>
        <v-spacer />
        <v-col
          class="col d-none d-md-flex"
          align-self="center"
        >
          <a
            href="/"
            style="text-decoration: none"
            class="black--text"
          >
            <span>Home &nbsp;&nbsp;</span>
          </a>
          <a
            href="/product"
            style="text-decoration: none"
            class="black--text"
          >
            <span>About us &nbsp;&nbsp;</span>
          </a>
          <a
            href="/product"
            style="text-decoration: none"
            class="black--text"
          >
            <span>Contact &nbsp;&nbsp;</span>
          </a>
        </v-col>
        <v-col
          class="col d-none d-sm-flex"
          align-self="center"
        >
          <div
            class="my-2"
          >
            <v-btn
              color="#6868ac"
              large
              class="white--text"
              @click="signIn()"
            >
              Open Wallet
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
      }
    },
    computed: {
      ...mapState(['drawer']),
    },
    mounted () {
      this.isSigned()
    },
    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
<style >

</style>
