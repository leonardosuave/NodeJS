<template>
  <div>
    <h1>Exemplo para rotas com parâmetros</h1>
    <p>{{parametroDaRota}}</p>
  </div>
</template>

<script>
export default {

  data() {
    return {
      parametroDaRota: ''
    }
  },

  created() {
    console.log(this.$route.params.dado)
    this.parametroDaRota = this.$route.params.dado
  }
}
</script>

<style>

</style>