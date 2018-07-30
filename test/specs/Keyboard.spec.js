import Keyboard from 'src/Keyboard.vue'
import { createVM } from '../helpers/utils.js'

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <Keyboard
      debug
      :options="{usePreview: false, stickyShift: false }"
      ></Keyboard>
`, { components: { Keyboard }})
    // vm.$el.querySelector('.hello h1').textContent.should.eql('Hello World!')
  })
})
