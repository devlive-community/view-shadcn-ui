import { PaginationProps } from '../types'
import { computed, ref, Ref, watch } from 'vue'

export const usePagination = (dataSource: Ref<any[]>, options: PaginationProps = {}) => {
    const currentPage = ref(options.page || 1)
    const pageSize = ref(options.size || 100)
    const total = computed(() => dataSource.value.length)

    const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * pageSize.value
        const end = start + pageSize.value
        return dataSource.value.slice(start, end)
    })

    const totalPages = computed(() => Math.ceil(total.value / pageSize.value))

    watch(dataSource, () => {
        currentPage.value = 1
    })

    const setPage = (page: number) => {
        if (page < 1 || page > totalPages.value) {
            return
        }
        currentPage.value = page
    }

    const setSize = (size: number) => {
        pageSize.value = size
        currentPage.value = 1
    }

    // 确保当前页面不超过总页数
    watch(totalPages, (newTotalPages) => {
        if (currentPage.value > newTotalPages) {
            currentPage.value = Math.max(1, newTotalPages)
        }
    })

    return {
        currentPage,
        pageSize,
        total,
        paginatedData,
        totalPages,
        setPage,
        setSize
    }
}