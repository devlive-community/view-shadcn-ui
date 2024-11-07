import { calcSize } from '@/utils/common.ts'

export const getTopPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
) => {
    const topPosition = trigger.top === 0
        ? trigger.top + trigger.height + skip
        : trigger.top - content.height - skip

    // Calculate center position
    const leftPosition = trigger.left + (trigger.width - content.width) / 2

    // Ensure tooltip stays within viewport
    const adjustedLeftPosition = Math.max(
        0,
        Math.min(leftPosition, window.innerWidth - content.width)
    )

    return {
        top: calcSize(topPosition),
        left: calcSize(adjustedLeftPosition)
    }
}

export const getBottomPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
) => {
    const bottomPosition = trigger.top + trigger.height + skip > window.innerHeight
        ? trigger.top - content.height - skip
        : trigger.top + trigger.height + skip

    // Calculate center position
    const leftPosition = trigger.left + (trigger.width - content.width) / 2

    // Ensure tooltip stays within viewport
    const adjustedLeftPosition = Math.max(
        0,
        Math.min(leftPosition, window.innerWidth - content.width)
    )

    return {
        top: calcSize(bottomPosition),
        left: calcSize(adjustedLeftPosition)
    }
}

export const getLeftPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
    position: string = 'left'
) => {
    if (position === null || trigger.left === 0) {
        position = trigger.left > content.width + skip ? 'left' : 'right'
    }

    const leftPosition = position === 'left'
        ? trigger.left - content.width - skip
        : trigger.left + trigger.width + skip

    // Calculate vertical center
    const topPosition = trigger.top + (trigger.height - content.height) / 2

    // Ensure tooltip stays within viewport
    const adjustedTopPosition = Math.max(
        0,
        Math.min(topPosition, window.innerHeight - content.height)
    )

    return {
        left: calcSize(Math.max(0, leftPosition)),
        top: calcSize(adjustedTopPosition),
        maxWidth: calcSize(position === 'left' ? trigger.left - skip : window.innerWidth - trigger.right - skip)
    }
}

export const getRightPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
    position: string = 'right'
) => {
    const tolerance = 10

    if (Math.abs(trigger.right - window.innerWidth) <= tolerance) {
        position = trigger.left + trigger.width + content.width + skip <= window.innerWidth ? 'right' : 'left'
    }

    const leftPosition = position === 'right'
        ? trigger.left + trigger.width + skip
        : trigger.left - content.width - skip

    // Calculate vertical center
    const topPosition = trigger.top + (trigger.height - content.height) / 2

    // Ensure tooltip stays within viewport
    const adjustedTopPosition = Math.max(
        0,
        Math.min(topPosition, window.innerHeight - content.height)
    )

    return {
        left: calcSize(Math.max(0, leftPosition)),
        top: calcSize(adjustedTopPosition),
        maxWidth: calcSize(position === 'right' ? window.innerWidth - trigger.right - skip : trigger.left - skip)
    }
}
