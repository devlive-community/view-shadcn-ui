import { Directive } from 'vue'

// 点击外部指令
// 当点击元素外部时执行回调函数
const ClickOutside: Directive = {
    mounted(el, binding)
    {
        el._clickOutsideHandler = (event: MouseEvent) => {
            event.preventDefault()

            // 如果点击的是元素外部
            if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value(event)
            }
        }

        // 添加点击事件监听器
        document.addEventListener('click', el._clickOutsideHandler)
    },

    beforeUnmount(el)
    {
        // 移除点击事件监听器
        document.removeEventListener('click', el._clickOutsideHandler)
    }
}

export default ClickOutside