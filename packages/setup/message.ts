import { createVNode, render } from 'vue'
import ShadcnMessage from '../../src/ui/message'

const createMessage = (options) => {
    const {
        content,
        duration = 1.5,
        showIcon = false,
        type = 'info',
        background = false,
        closable = false,
        onClose
    } = options

    // Create a new container for each message
    const container = document.createElement('div')
    document.body.appendChild(container)

    // Create a VNode and render it
    const vm = createVNode(ShadcnMessage, {
        content,
        duration,
        showIcon,
        type,
        background,
        closable,
        onClose: () => {
            if (onClose) {
                onClose()
            }
            render(null, container)
            document.body.removeChild(container)
        }
    })

    render(vm, container)
}

// Provide different types of messages
const Message = {
    info(config)
    {
        createMessage({ ...config })
    },
    success(config)
    {
        createMessage({ ...config, type: 'success' })
    },
    warning(config)
    {
        createMessage({ ...config, type: 'warning' })
    },
    error(config)
    {
        createMessage({ ...config, type: 'error' })
    },
    loading(config)
    {
        createMessage({ ...config, type: 'loading' })
    }
}

export default Message
