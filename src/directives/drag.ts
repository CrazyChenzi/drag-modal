import { DirectiveOptions } from 'vue'

const vDrag: DirectiveOptions = {
  bind(el) {
    console.log(el)
    const target = el.children[0]
  },
  inserted(el) {
    console.log(el, 'inserted')
  }
}

export default vDrag