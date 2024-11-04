import { calcSize } from '@/utils/common.ts'

export const getTopPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
    fit: boolean = true
) => {
    const topPosition = trigger.top === 0
        ? trigger.top + trigger.height + skip // When trigger.top is 0, place tooltip at the bottom
        : trigger.top - content.height - skip // Otherwise, place tooltip at the top

    console.log(content.width, window.innerWidth, window.innerWidth - content.width)

    // If tooltip exceeds screen height, set fit to true
    if (content.width !== window.innerWidth) {
        fit = true
    }

    return {
        top: calcSize(topPosition),
        ...(fit ? { left: calcSize(trigger.left) } : {}) // Align to the left of trigger
    }
}

export const getBottomPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
    fit: boolean = true
) => {
    const bottomPosition = trigger.top + trigger.height + skip > window.innerHeight
        ? trigger.top - content.height - skip // When trigger is at bottom, place tooltip at the top
        : trigger.top + trigger.height + skip // Otherwise, place tooltip at the bottom

    return {
        top: calcSize(bottomPosition),
        ...(fit ? { left: calcSize(trigger.left) } : {}) // Align to the left of trigger
    }
}

export const getLeftPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
    fit: boolean = true,
    position: string = 'left'
) => {
    // Initialize calculation for left or right side
    if (position === null || trigger.left === 0) {
        position = trigger.left > content.width + skip ? 'left' : 'right'
    }

    // Calculate position based on preferred position
    const leftPosition = position === 'left'
        ? trigger.left - content.width - skip // Prefer placement on the left
        : trigger.left + trigger.width + skip // Place on the right

    return {
        left: calcSize(Math.max(0, leftPosition)), // Ensure left is not negative
        ...(fit ? { top: calcSize(trigger.top) } : {}), // Align to the top of trigger
        maxWidth: calcSize(position === 'left' ? trigger.left - skip : window.innerWidth - trigger.right - skip)
    }
}

export const getRightPosition = (
    trigger: DOMRect,
    content: DOMRect,
    skip: number = 0,
    fit: boolean = true,
    position: string = 'right'
) => {
    // Set a small tolerance range for approximate judgment
    const tolerance = 10

    // Check if there's enough space on the right for tooltip
    if (Math.abs(trigger.right - window.innerWidth) <= tolerance) {
        position = trigger.left + trigger.width + content.width + skip <= window.innerWidth ? 'right' : 'left'
    }

    // Calculate left position based on position preference
    const leftPosition = position === 'right'
        ? trigger.left + trigger.width + skip // Prefer placement on the right
        : trigger.left - content.width - skip // Place on the left

    return {
        left: calcSize(Math.max(0, leftPosition)), // Ensure left is not negative
        ...(fit ? { top: calcSize(trigger.top) } : {}), // Align to the top of trigger
        maxWidth: calcSize(position === 'right' ? window.innerWidth - trigger.right - skip : trigger.left - skip)
    }
}
