<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Tabla de Rondas"
      color="primary"
      class="px-5 py-3"
    >
      <v-fab-transition>
        <v-btn
          color="primary"
          title="Abrir formulario"
          dark
          absolute
          top
          right
          fab
          @click="method='post', openDialog()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-row>
        <v-col
          class="offset-8"
          cols="8"
          md="4"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-account-search"
            label="Buscar"
            single-line
            hide-details
          />
        </v-col>
      </v-row>
      <v-data-table
        :headers="tabla_headers"
        :items="tabla_items"
        :search="search"
      >
        <!--<template v-slot:item.actions="{ item }">
          <v-menu
            left
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="mr-2"
                title="Opciones"
                color="success"
                v-bind="attrs"
                v-on="on"
              >
                mdi-dots-horizontal
              </v-icon>
            </template>

            <v-list>
              <v-list-item
                color="primary"
                title="Abrir formulario"
                @click="method='put', openDialog(item.id)"
              >
                <v-icon
                  color="success"
                >
                  mdi-pencil
                </v-icon>
              </v-list-item>
              <v-list-item
                color="primary"
                title="Eliminar registro"
                @click="eliminar(item.id)"
              >
                <v-icon
                  color="warning"
                >
                  mdi-delete
                </v-icon>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>-->
      </v-data-table>
    </base-material-card>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="650px"
      >
        <v-card>
          <template>
            <div>
              <v-app-bar
                color="primary"
                dense
                dark
              >
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title> Usuarios</v-toolbar-title>
                <v-spacer />
              </v-app-bar>
            </div>
          </template>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Nombres"
                    required
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Apellidos"
                    required
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Email*"
                    required
                  />
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    :items="items"
                    item-text="texto"
                    item-value="valor"
                    label="Rol"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Usuario"
                    required
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  />
                </v-col>
              </v-row>
            </v-container>
            <small>*Indica Los campos requeridos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Cerrar
            </v-btn>
            <v-btn
              id="save"
              color="primary"
              text
            >
              {{ savEdit }}
            </v-btn>
            <v-btn
              color="warning"
              text
            >
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      :timeout="timeout"
      color="primary"
      style="opacity:0.8"
      top
      right
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="#ffd100"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  // import axios from 'axios'
  export default {
    data () {
      return {
        search: '',
        savEdit: 'ACTUALIZAR',
        tabla_headers: [
          { text: 'Usuario', value: 'usuario' },
          { text: 'Nombres', value: 'nombre' },
          { text: 'Apellidos', value: 'apellido' },
          { text: 'E-mail', value: 'email' },
          { text: 'Acciones', value: 'actions', sortable: false },
        ],
        tabla_items: [
          {
            id: '1',
            usuario: 'item.username',
            nombre: 'item.first_name',
            apellido: 'item.last_name',
            email: 'item.email',
          }, {
            id: '"1"',
            usuario: 'item.username',
            nombre: 'item.first_name',
            apellido: 'item.last_name',
            email: 'item.email',
          },
        ],
        items: [],
        dialog: false,
        method: 'put',
        // pathApp: this.$session.get('url'),
        multiLine: true,
        snackbar: false,
        text: '',
      }
    },
    mounted () {
      // this.cargaUsuarios()
      // this.cargaRol()
    },
    methods: {
      /* cargaUsuarios () {
        axios.get(this.pathApp + '/users/', {
          headers: { Authorization: 'JWT ' + this.$session.get('token') },
        }).then((response) => {
          this.tabla_items = response.data.map((item) => {
            return {
              id: item.id,
              usuario: item.username,
              nombre: item.first_name,
              apellido: item.last_name,
              email: item.email,
            }
          })
        }).catch((error) => {
          console.log(error)
        })
      },
      cargaRol () {
        axios.get(this.pathApp + '/rol/', {
          headers: { Authorization: 'JWT ' + this.$session.get('token') },
        }).then((response) => {
          var data = response.data
          data.forEach((v, k) => {
            this.items.push({
              valor: v.id,
              texto: v.descripcion,
            })
          })
        }).catch((error) => {
          console.log(error)
        })
      }, */
      openDialog (item) {
        this.dialog = true
        /* if (this.method === 'put') {
          this.savEdit = 'ACTUALIZAR'
          axios.get(this.pathApp + '/users/' + item + '/', {
            headers: { Authorization: 'JWT ' + this.$session.get('token') },
          }).then((response) => {
            console.log(response.data[0])
            this.usuarios = response.data[0]
            this.usuarios_c = response.data[0]
            console.log(this.usuarios)
          }).catch((error) => {
            console.log(error)
          })
        } else if (this.method === 'post') { */
        this.savEdit = 'GUARDAR'
        this.usuarios = []
        // }
      },
      /* saveEdit () {
        if (this.method === 'put') {
          this.savEdit = 'ACTUALIZAR'
          this.usuarios = this.usuarios_c
        } else if (this.method === 'post') {
          this.savEdit = 'GUARDAR'
          this.usuarios = []
        }
      },
      save (item) {
        if (this.method === 'put') {
          axios.put(this.pathApp + '/users/' + item + '/', {
            username: this.usuarios.username,
            first_name: this.usuarios.first_name,
            last_name: this.usuarios.last_name,
            email: this.usuarios.email,
            password: this.usuarios.password,
            rol: this.usuarios.rol,
            user: this.$session.get('iduser'),
          }, {
            headers: { Authorization: 'JWT ' + this.$session.get('token') },
          }).then((response) => {
            this.usuarios = response.data
            this.text = 'SE ACTUALIZO EXITOSAMENTE'
            this.snackbar = true
            this.cargaUsuarios()
            this.dialog = false
            console.log(this.usuarios)
          }).catch((error) => {
            console.log(error)
            this.text = 'Ocurrio un error al intentar Actualizar el registro'
            this.snackbar = true
          })
        } else if (this.method === 'post') {
          axios.post(this.pathApp + '/users/', {
            username: this.usuarios.username,
            first_name: this.usuarios.first_name,
            last_name: this.usuarios.last_name,
            email: this.usuarios.email,
            password: this.usuarios.password,
            rol: this.usuarios.rol,
            user: this.$session.get('iduser'),
          }, {
            headers: { Authorization: 'JWT ' + this.$session.get('token') },
          }).then((response) => {
            this.usuarios = response.data
            this.text = 'SE GUARDO EXITOSAMENTE'
            this.snackbar = true
            this.cargaUsuarios()
            this.dialog = false
            console.log(this.usuarios)
          }).catch((error) => {
            console.log(error)
            this.text = 'Ocurrio un error al intentar Guardar el registro'
            this.snackbar = true
          })
        }
      },
      eliminar (item) {
        this.$swal({
          title: 'Eliminar Registro',
          text: 'Esta seguro que desea eliminar el registro?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(this.pathApp + '/users/' + item + '/', {
              headers: { Authorization: 'JWT ' + this.$session.get('token') },
            }).then((response) => {
              this.text = 'SE ELIMINO EXITOSAMENTE'
              this.snackbar = true
              this.cargaUsuarios()
              this.dialog = false
            }).catch((error) => {
              console.log(error)
              this.text = 'Ocurrio un error al intentar Eliminar el registro'
              this.snackbar = true
            })
          }
        })
      }, */
    },
  }
</script>
