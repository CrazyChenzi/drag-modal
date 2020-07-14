import { DirectiveOptions } from 'vue'


/**
 * 获取边界值
 * @returns {maxleft maxright maxtop maxbottom}
 */
const getBoundary = (target: HTMLElement) => {
  const targetClientRect = target.getBoundingClientRect()
  const bodyClientRect = document.body.getBoundingClientRect()
  const maxleft = targetClientRect.left
  const maxtop = targetClientRect.top
  const maxright = bodyClientRect.width - targetClientRect.left - targetClientRect.width
  const maxbottom = bodyClientRect.height - targetClientRect.top - targetClientRect.height

  return { maxleft, maxright, maxtop, maxbottom }
}

let targetStyle = ''

const vDrag: DirectiveOptions = {
  bind(el) {
    
  },
  inserted(el) {
    const target = el.children[0] as HTMLElement
    const header = target.children[0] as HTMLElement
    targetStyle = target.style.cssText

    header.setAttribute('style', 'cursor: move')
    header.onmousedown = (e: MouseEvent) => {
      // 记录按下鼠标时的坐标和目标元素的left、top值
      const currentX = e.clientX
      const currentY = e.clientY
      const clientRect = header.getBoundingClientRect()
      const { left, top } = clientRect

      const { maxleft, maxright, maxtop, maxbottom } = getBoundary(target)

      document.onmousemove = (event) => {
        // 鼠标移动时计算每次移动的距离，并改变拖拽元素的定位
        const disX = event.clientX - currentX
        const disY = event.clientY - currentY
        
        target.style.margin = '0'
        target.style.left = `${left + disX}px`
        target.style.top = `${top + disY}px`

        // 判断左右边界
        if (disX < 0 && disX <= -maxleft) {
          target.style.left = `${left - maxleft}px`
        } else if (disX > 0 && disX >= maxright) {
          target.style.left = `${left + maxright}px`
        } else {
          target.style.left = `${left + disX}px`
        }
        // 判断上、下边界
        if (disY < 0 && disY <= -maxtop) {
          target.style.top = `${top - maxtop}px`
        } else if (disY > 0 && disY >= maxbottom) {
          target.style.top = `${top + maxbottom}px`
        } else {
          target.style.top = `${top + disY}px`
        }
        
        // 阻止事件的默认行为，可以解决选中文本的时候拖不动
        return false
      }
       // 鼠标松开时，拖拽结束
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
  update(el) {
    const timer = setTimeout(() => {
      const target = el.children[0] as HTMLElement
      target.setAttribute('style', targetStyle)
      clearTimeout(timer)
    }, 500)
  },
  // 最后卸载时，清除事件绑定
  unbind(el) {
    const header = el.children[0].children[0] as HTMLElement
    
    header.onmousedown = () => {}
  }
}

export default vDrag