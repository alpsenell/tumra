<template>
  <div id="app">
    <arm-button text="alp"></arm-button>
  </div>
</template>

<script>
import ArmButton from '@/components/atoms/ArmButton'

export default {
  components: {
    ArmButton
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
