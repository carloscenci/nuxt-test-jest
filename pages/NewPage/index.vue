<template>
  <div>
    Hello World!

    <v-btn
      id="testeButton"
      depressed
      color="error"
      @click="teste()"
    >
      Error
    </v-btn>

    <div id="testandoSaBudega">
      {{testando}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class PrincipalPage extends Vue {
  testando = "oi"
  async teste() {
    const testeNovo = this.testando
    return console.log(testeNovo);
  }

  mounted() {
    this.teste()
  }
}
</script>
