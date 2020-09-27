import Keyboard from 'src/Keyboard.vue'
import { createVM } from '../helpers/utils.js'

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    createVM(this, `
    <div>
    <p>{{message}}</p>
    <Keyboard
    ref="kbd"
    :options="keyboardOption"
    v-model="message"
      debug
      ></Keyboard>
      <button @click="message = 'Hello World'">Hello World</button>
      <button @click="message = ''">Clear Message</button>
      <button @click="$refs.kbd.clear()">Clear method</button>
    </div>
`, { components: { Keyboard }, data () {
  return {
    message: 'This should be seen in the inout box',
    keyboardOption: {
      autoAccept: true,
      usePreview: false
    }
  }
} })
    // vm.$el.querySelector('.hello h1').textContent.should.eql('Hello World!')
  })
})
