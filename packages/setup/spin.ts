import { createVNode, render } from 'vue'
import ShadcnSpin from '../../src/ui/spin'

type SpinInstance = {
    close: () => void;
}

const createSpin = (options) => {
    const {
        type = 'primary',
        size = 'default',
        fixed = true
    } = options

    // Create a new container
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.top = '0'
    container.style.left = '0'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.zIndex = '50'
    document.body.appendChild(container)

    // Create a VNode and render it
    const vm = createVNode(ShadcnSpin, {
        modelValue: true,
        type,
        size,
        fixed,
        onClose: () => {
            render(null, container)
            document.body.removeChild(container)
        }
    })

    render(vm, container)

    return {
        close: () => {
            render(null, container)
            document.body.removeChild(container)
        }
    }
}

let spinInstance: SpinInstance | undefined = undefined

const Spin = {
    show(config)
    {
        if (spinInstance) {
            spinInstance.close()
        }
        spinInstance = createSpin({ ...config })
    },
    hide()
    {
        if (spinInstance) {
            spinInstance.close()
            spinInstance = undefined
        }
    },
    primary(config)
    {
        this.show({ ...config, type: 'primary' })
    },
    success(config)
    {
        this.show({ ...config, type: 'success' })
    },
    warning(config)
    {
        this.show({ ...config, type: 'warning' })
    },
    error(config)
    {
        this.show({ ...config, type: 'error' })
    }
}

export default Spin
