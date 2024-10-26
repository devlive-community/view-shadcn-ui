import { createVNode, render } from 'vue'
import ShadcnMessage from '../../src/ui/message'

const createMessage = (options) => {
    const { content, duration = 1500, onClose } = options

    // Create a new container for each message
    const container = document.createElement('div')
    document.body.appendChild(container)

    // Create a VNode and render it
    const vm = createVNode(ShadcnMessage, {
        content,
        duration,
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
    }
}

export default Message
