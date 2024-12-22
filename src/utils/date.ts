export const formatDate = (date: Date | string | undefined, format = 'YYYY-MM-DD'): string => {
    if (!date) {
        return ''
    }

    const d = (date instanceof Date) ? date : new Date(date as string)

    if (isNaN(d.getTime())) {
        return ''
    }

    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const hours = String(d.getHours()).padStart(2, '0')
    const minutes = String(d.getMinutes()).padStart(2, '0')
    const seconds = String(d.getSeconds()).padStart(2, '0')

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds)
}