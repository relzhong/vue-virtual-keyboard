<template>
  <div>
		<textarea :class="className" v-if="options.type === 'textarea'" ref="keyboardRef"/>
    <input :class="className" v-else ref="keyboardRef"/>
  </div>
</template>

<style>
  @import "light.css";
</style>

<script>
import jQuery from 'jquery'
import 'virtual-keyboard/dist/js/jquery.keyboard.js'

export default {
  props: {
    value: String,
    debug: Boolean,
    options: Object
  },
  data () {
    return {
      className: 'keyboard-wrapper'
    }
  },
  mounted () {
    const that = this
    this.options.accepted = (event, keyboard, el) => {
      that.handleChange('', el.value)
      that.$emit('onAccepted', el.value)
      if (that.debug) {
        console.log('The content "' + el.value + '" was accepted')
      }
    }
    this.options.visible = () => {
      this.className = 'keyboard-wrapper open'
    }
    this.options.hidden = () => {
      this.className = 'keyboard-wrapper'
    }
    // Set Value to Input Element on Change if prop set
    if (this.options.updateOnChange === true) {
      this.options.change = (event, keyboard, el) => {
        this.handleChange('', keyboard.preview.value)
        if (this.debug) {
          console.log('The content "' + el.value + '" was changed')
        }
      }
    }

    this.addKeyBoardToDOM()

		// Update while typing if usePreview is false
    if (this.options.usePreview === false) {
      jQuery(this.$refs.keyboardRef).on('keyboardChange', (event, keyboard) => {
        that.handleChange(null, keyboard.preview.value)
      })
    }
  },
  beforeDestroy () {
    jQuery(this.$refs.keyboardRef).remove()
  },
  methods: {
    addKeyBoardToDOM () {
      const keyboardSelector = jQuery(this.$refs.keyboardRef)
      keyboardSelector.keyboard(this.options)
      /**
       * Get instantiated keyboard
       */
      this.keyboard = keyboardSelector.getkeyboard()
    },
    clear () {
      this.$emit('update:value', '')
    },
    select () {
      this.$refs.keyboardRef.select()
    },
    blur () {
      var keyboard = jQuery(this.$refs.keyboardRef)
      if (keyboard && typeof keyboard.getkeyboard === 'function' && typeof keyboard.getkeyboard().close === 'function') { keyboard.getkeyboard().close() }
      this.$refs.keyboardRef.blur()
    },
    checkValidity () {
      return this.$refs.keyboardRef.checkValidity()
    },
    handleChange (event, input) {
      if (!input && event && event.target && typeof event.target.value !== 'undefined') { input = event.target.value }
      if (this.debug) {
        console.log('Change', input)
      }
      this.$emit('input', input)
      this.$emit('onChange', input)
    }
  }
}
</script>
