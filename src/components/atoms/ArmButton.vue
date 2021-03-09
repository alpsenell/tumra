<template>
  <div
    class="arm-button"
    :class="disabledClass"
    @click="$emit('click')">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    /**
     * @property {string} text
     */
    text: {
      type: String,
      required: true
    },
    /**
     * @property {boolean} disabled
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * @return {string}
     */
    disabledClass () {
      return this.disabled ? 'arm-button__disabled' : ''
    }
  }
}
</script>
