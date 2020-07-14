// import { DirectiveOptions } from 'vue'
// import lodashDebounce from 'lodash.debounce'
// import ResizeSensor from '../../node_modules/css-element-queries/src/ResizeSensor'

// const { debounce = lodashDebounce } = lodashDebounce
// const defaultDelay = 150

// const getOptions = (modifiers: { [key: string]: boolean }) => {
//   if (!modifiers) {
//     return { delay: defaultDelay, initial: false }
//   }
//   const { initial = false } = modifiers
//   let delay = Object.keys(modifiers).map(k => parseInt(k)).find(v => !isNaN(v))
//   delay = delay || defaultDelay
//   return { delay, initial }
// }

// const listenToVisible = (element: HTMLElement, callback: any) => {
//   const options = {
//     root: document.documentElement
//   }

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         callback()
//         observer.disconnect()
//       }
//     })
//   }, options)

//   observer.observe(element)
//   return observer
// }

// const createResizeSensor = (el: HTMLElement, { value, arg, options }: any) => {
//   let callBack = () => value(el)
//   switch (arg) {
//     case 'debounce':
//       callBack = debounce(() => value(el), options.delay)
//       break

//     case 'throttle':
//       callBack = debounce(() => value(el), options.delay, { leading: true, trailing: true, maxWait: options.delay })
//       break
//   }
//   const res = new ResizeSensor(el, callBack)
//   if (options.initial) {
//     value(el)
//   }
//   return res
// }

// const vResize: DirectiveOptions = {
//   inserted(el, { value, arg, modifiers }, { context: component }) {
//     if (!value || typeof value !== 'function') {
//       console.warn('v-resize should received a function as value')
//       return
//     }
//     const options = getOptions(modifiers)
//     if (component && component.$el === el) {
//       component.$once('hook:deactivated', () => {
//         (this.unbind as any)(el)
//         component.$once('hook:activated', () => {
//           (this.inserted as any)(el, { value, arg, modifiers }, { context: component })
//         })
//       })
//     }
//     if (el.offsetParent) {
//       createResizeSensor(el, { value, arg, options })
//       return
//     }
//     options.initial = true
//     el.__visibility__listener__ = listenToVisible(el, () => createResizeSensor(el, { value, arg, options }))
//   },
//   unbind(el) {
//     if (el.__visibility__listener__) {
//       el.__visibility__listener__.disconnect();
//     }
//     if (!el.resizeSensor) {
//       return;
//     }
//     ResizeSensor.detach(el);
//   }
// }

// export default vResize
