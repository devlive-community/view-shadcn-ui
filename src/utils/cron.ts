/**
 * Cron 时间计算工具类
 * Cron time calculation tool
 * Extends: https://github.com/dongchacha/vue3-vCrontab/blob/master/src/components/Crontab-Result.vue
 */
class CronCalculator
{
    private dayRule: string = ''
    private dayRuleSup: any = ''
    private dateArr: number[][] = []

    /**
     * 计算近5次运行时间
     */
    public getRecentTriggerTime(expression: string, times: number = 5): string[]
    {
        // 计算开始-隐藏结果
        // 获取规则数组[0秒、1分、2时、3日、4月、5星期、6年]
        const ruleArr = expression.split(' ')
        // 用于记录进入循环的次数
        let nums = 0
        // 用于暂时存符号时间规则结果的数组
        const resultArr: string[] = []
        // 获取当前时间精确至[年、月、日、时、分、秒]
        const nTime = new Date()
        const nYear = nTime.getFullYear()
        let nMouth = nTime.getMonth() + 1
        let nDay = nTime.getDate()
        let nHour = nTime.getHours()
        let nMin = nTime.getMinutes()
        let nSecond = nTime.getSeconds()

        // 根据规则获取到近100年可能年数组、月数组等等
        this.getSecondArr(ruleArr[0])
        this.getMinArr(ruleArr[1])
        this.getHourArr(ruleArr[2])
        this.getDayArr(ruleArr[3])
        this.getMouthArr(ruleArr[4])
        this.getWeekArr(ruleArr[5])
        this.getYearArr(ruleArr[6], nYear)

        // 将获取到的数组赋值-方便使用
        const sDate = this.dateArr[0]
        const mDate = this.dateArr[1]
        const hDate = this.dateArr[2]
        const DDate = this.dateArr[3]
        const MDate = this.dateArr[4]
        const YDate = this.dateArr[5]

        // 获取当前时间在数组中的索引
        let sIdx = this.getIndex(sDate, nSecond)
        let mIdx = this.getIndex(mDate, nMin)
        let hIdx = this.getIndex(hDate, nHour)
        let DIdx = this.getIndex(DDate, nDay)
        let MIdx = this.getIndex(MDate, nMouth)
        const YIdx = this.getIndex(YDate, nYear)

        // 重置月日时分秒的函数(后面用的比较多)
        const resetSecond = () => {
            sIdx = 0
            nSecond = sDate[sIdx]
        }
        const resetMin = () => {
            mIdx = 0
            nMin = mDate[mIdx]
            resetSecond()
        }
        const resetHour = () => {
            hIdx = 0
            nHour = hDate[hIdx]
            resetMin()
        }
        const resetDay = () => {
            DIdx = 0
            nDay = DDate[DIdx]
            resetHour()
        }
        const resetMouth = () => {
            MIdx = 0
            nMouth = MDate[MIdx]
            resetDay()
        }

        // 如果当前年份不为数组中当前值
        if (nYear !== YDate[YIdx]) {
            resetMouth()
        }
        // 如果当前月份不为数组中当前值
        if (nMouth !== MDate[MIdx]) {
            resetDay()
        }
        // 如果当前"日"不为数组中当前值
        if (nDay !== DDate[DIdx]) {
            resetHour()
        }
        // 如果当前"时"不为数组中当前值
        if (nHour !== hDate[hIdx]) {
            resetMin()
        }
        // 如果当前"分"不为数组中当前值
        if (nMin !== mDate[mIdx]) {
            resetSecond()
        }

        // 循环年份数组
        goYear: for (let Yi = YIdx; Yi < YDate.length; Yi++) {
            const YY = YDate[Yi]
            // 如果到达最大值时
            if (nMouth > MDate[MDate.length - 1]) {
                resetMouth()
                continue
            }
            // 循环月份数组
            goMouth: for (let Mi = MIdx; Mi < MDate.length; Mi++) {
                let MM = MDate[Mi] as any
                MM = MM < 10 ? `0${ MM }` : MM
                // 如果到达最大值时
                if (nDay > DDate[DDate.length - 1]) {
                    resetDay()
                    if (Mi == MDate.length - 1) {
                        resetMouth()
                        continue goYear
                    }
                    continue
                }
                // 循环日期数组
                goDay: for (let Di = DIdx; Di < DDate.length; Di++) {
                    let DD = DDate[Di]
                    let thisDD = DD < 10 ? `0${ DD }` : DD

                    if (nHour > hDate[hDate.length - 1]) {
                        resetHour()
                        if (Di == DDate.length - 1) {
                            resetDay()
                            if (Mi == MDate.length - 1) {
                                resetMouth()
                                continue goYear
                            }
                            continue goMouth
                        }
                        continue
                    }

                    // 判断日期的合法性，不合法的话也是跳出当前循环
                    if (!this.checkDate(`${ YY }-${ MM }-${ thisDD } 00:00:00`) &&
                        this.dayRule !== 'workDay' &&
                        this.dayRule !== 'lastWeek' &&
                        this.dayRule !== 'lastDay') {
                        resetDay()
                        continue goMouth
                    }
                    // 如果日期规则中有值时
                    if (this.dayRule == 'lastDay') {
                        // 如果不是合法日期则需要将前将日期调到合法日期即月末最后一天
                        if (!this.checkDate(`${ YY }-${ MM }-${ thisDD } 00:00:00`)) {
                            while (DD > 0 && !this.checkDate(`${ YY }-${ MM }-${ thisDD } 00:00:00`)) {
                                DD--
                                thisDD = DD < 10 ? `0${ DD }` : DD
                            }
                        }
                    }
                    else if (this.dayRule == 'workDay') {
                        // 校验并调整如果是2月30号这种日期传进来时需调整至正常月底
                        if (!this.checkDate(`${ YY }-${ MM }-${ thisDD } 00:00:00`)) {
                            while (DD > 0 && !this.checkDate(`${ YY }-${ MM }-${ thisDD } 00:00:00`)) {
                                DD--
                                thisDD = DD < 10 ? `0${ DD }` : DD
                            }
                        }
                        // 获取达到条件的日期是星期X
                        const thisWeek = this.formatDate(new Date(`${ YY }-${ MM }-${ thisDD } 00:00:00`), 'week')
                        // 当星期日时
                        if (thisWeek == 0) {
                            // 先找下一个日，并判断是否为月底
                            DD++
                            thisDD = DD < 10 ? `0${ DD }` : DD
                            // 判断下一日已经不是合法日期
                            if (!this.checkDate(`${ YY }-${ MM }-${ thisDD } 00:00:00`)) {
                                DD -= 3
                            }
                        }
                        else if (thisWeek == 6) {
                            // 当星期6时只需判断不是1号就可进行操作
                            if (this.dayRuleSup !== 1) {
                                DD--
                            }
                            else {
                                DD += 2
                            }
                        }
                    }
                    else if (this.dayRule == 'weekDay') {
                        // 如果指定了是星期几
                        // 获取当前日期是属于星期几
                        const thisWeek = this.formatDate(new Date(`${ YY }-${ MM }-${ DD } 00:00:00`), 'week')
                        // 校验当前星期是否在星期池（dayRuleSup）中
                        if (this.dayRuleSup.indexOf(Number(thisWeek)) < 0) {
                            // 如果到达最大值时
                            if (Di == DDate.length - 1) {
                                resetDay()
                                if (Mi == MDate.length - 1) {
                                    resetMouth()
                                    continue goYear
                                }
                                continue goMouth
                            }
                            continue
                        }
                    }

                    // 循环"时"数组
                    goHour: for (let hi = hIdx; hi < hDate.length; hi++) {
                        const hh = hDate[hi] < 10 ? `0${ hDate[hi] }` : hDate[hi]

                        if (nMin > mDate[mDate.length - 1]) {
                            resetMin()
                            if (hi == hDate.length - 1) {
                                resetHour()
                                if (Di == DDate.length - 1) {
                                    resetDay()
                                    if (Mi == MDate.length - 1) {
                                        resetMouth()
                                        continue goYear
                                    }
                                    continue goMouth
                                }
                                continue goDay
                            }
                            continue
                        }

                        // 循环"分"数组
                        goMin: for (let mi = mIdx; mi < mDate.length; mi++) {
                            const mm = mDate[mi] < 10 ? `0${ mDate[mi] }` : mDate[mi]

                            if (nSecond > sDate[sDate.length - 1]) {
                                resetSecond()
                                if (mi == mDate.length - 1) {
                                    resetMin()
                                    if (hi == hDate.length - 1) {
                                        resetHour()
                                        if (Di == DDate.length - 1) {
                                            resetDay()
                                            if (Mi == MDate.length - 1) {
                                                resetMouth()
                                                continue goYear
                                            }
                                            continue goMouth
                                        }
                                        continue goDay
                                    }
                                    continue goHour
                                }
                                continue
                            }

                            // 循环"秒"数组
                            for (let si = sIdx; si <= sDate.length - 1; si++) {
                                const ss = sDate[si] < 10 ? `0${ sDate[si] }` : sDate[si]

                                // 添加当前时间（时间合法性在日期循环时已经判断）
                                if (String(MM) !== '00' && String(DD) !== '00') {
                                    resultArr.push(`${ YY }-${ MM }-${ thisDD } ${ hh }:${ mm }:${ ss }`)
                                    nums++
                                }

                                // 如果条数满了就退出循环
                                if (nums == times) {
                                    break goYear
                                }

                                // 如果到达最大值时
                                if (si == sDate.length - 1) {
                                    resetSecond()
                                    if (mi == mDate.length - 1) {
                                        resetMin()
                                        if (hi == hDate.length - 1) {
                                            resetHour()
                                            if (Di == DDate.length - 1) {
                                                resetDay()
                                                if (Mi == MDate.length - 1) {
                                                    resetMouth()
                                                    continue goYear
                                                }
                                                continue goMouth
                                            }
                                            continue goDay
                                        }
                                        continue goHour
                                    }
                                    continue goMin
                                }
                            }
                        }
                    }
                }
            }
        }

        return resultArr
    }

    /**
     * 用于计算某位数字在数组中的索引
     */
    private getIndex(arr: number[], value: number): number
    {
        if (value <= arr[0] || value > arr[arr.length - 1]) {
            return 0
        }
        for (let i = 0; i < arr.length - 1; i++) {
            if (value > arr[i] && value <= arr[i + 1]) {
                return i + 1
            }
        }
        return 0
    }

    /**
     * 获取"年"数组
     */
    private getYearArr(rule: string | undefined, year: number): void
    {
        this.dateArr[5] = this.getOrderArr(year, year + 100)
        if (rule !== undefined) {
            if (rule.indexOf('-') >= 0) {
                this.dateArr[5] = this.getCycleArr(rule, year + 100, false)
            }
            else if (rule.indexOf('/') >= 0) {
                this.dateArr[5] = this.getAverageArr(rule, year + 100)
            }
            else if (rule !== '*') {
                this.dateArr[5] = this.getAssignArr(rule)
            }
        }
    }

    /**
     * 获取"月"数组
     */
    private getMouthArr(rule: string): void
    {
        this.dateArr[4] = this.getOrderArr(1, 12)
        if (rule.indexOf('-') >= 0) {
            this.dateArr[4] = this.getCycleArr(rule, 12, false)
        }
        else if (rule.indexOf('/') >= 0) {
            this.dateArr[4] = this.getAverageArr(rule, 12)
        }
        else if (rule !== '*') {
            this.dateArr[4] = this.getAssignArr(rule)
        }
    }

    /**
     * 获取"日"数组-主要为日期规则
     */
    private getWeekArr(rule: string): void
    {
        if (this.dayRule == '' && this.dayRuleSup == '') {
            if (rule.indexOf('-') >= 0) {
                this.dayRule = 'weekDay'
                this.dayRuleSup = this.getCycleArr(rule, 7, false)
            }
            else if (rule.indexOf('#') >= 0) {
                this.dayRule = 'assWeek'
                const matchRule = rule.match(/[0-9]{1}/g)
                this.dayRuleSup = [Number(matchRule![0]), Number(matchRule![1])]
                this.dateArr[3] = [1]
                if (this.dayRuleSup[1] == 7) {
                    this.dayRuleSup[1] = 0
                }
            }
            else if (rule.indexOf('L') >= 0) {
                this.dayRule = 'lastWeek'
                this.dayRuleSup = Number(rule.match(/[0-9]{1,2}/g)![0])
                this.dateArr[3] = [31]
                if (this.dayRuleSup == 7) {
                    this.dayRuleSup = 0
                }
            }
            else if (rule !== '*' && rule !== '?') {
                this.dayRule = 'weekDay'
                this.dayRuleSup = this.getAssignArr(rule)
            }

            // 如果weekDay时将7调整为0【week值0即是星期日】
            if (this.dayRule === 'weekDay') {
                for (let i = 0; i < this.dayRuleSup.length; i++) {
                    if (this.dayRuleSup[i] == 7) {
                        this.dayRuleSup[i] = 0
                    }
                }
            }
        }
    }

    /**
     * 获取"日"数组-少量为日期规则
     */
    private getDayArr(rule: string): void
    {
        this.dateArr[3] = this.getOrderArr(1, 31)
        this.dayRule = ''
        this.dayRuleSup = ''
        if (rule.indexOf('-') >= 0) {
            this.dateArr[3] = this.getCycleArr(rule, 31, false)
            this.dayRuleSup = 'null'
        }
        else if (rule.indexOf('/') >= 0) {
            this.dateArr[3] = this.getAverageArr(rule, 31)
            this.dayRuleSup = 'null'
        }
        else if (rule.indexOf('W') >= 0) {
            this.dayRule = 'workDay'
            this.dayRuleSup = Number(rule.match(/[0-9]{1,2}/g)![0])
            this.dateArr[3] = [this.dayRuleSup]
        }
        else if (rule.indexOf('L') >= 0) {
            this.dayRule = 'lastDay'
            this.dayRuleSup = 'null'
            this.dateArr[3] = [31]
        }
        else if (rule !== '*' && rule !== '?') {
            this.dateArr[3] = this.getAssignArr(rule)
            this.dayRuleSup = 'null'
        }
        else if (rule === '*') {
            this.dayRuleSup = 'null'
        }
    }

    /**
     * 获取"时"数组
     */
    private getHourArr(rule: string): void
    {
        this.dateArr[2] = this.getOrderArr(0, 23)
        if (rule.indexOf('-') >= 0) {
            this.dateArr[2] = this.getCycleArr(rule, 24, true)
        }
        else if (rule.indexOf('/') >= 0) {
            this.dateArr[2] = this.getAverageArr(rule, 23)
        }
        else if (rule !== '*') {
            this.dateArr[2] = this.getAssignArr(rule)
        }
    }

    /**
     * 获取"分"数组
     */
    private getMinArr(rule: string): void
    {
        this.dateArr[1] = this.getOrderArr(0, 59)
        if (rule.indexOf('-') >= 0) {
            this.dateArr[1] = this.getCycleArr(rule, 60, true)
        }
        else if (rule.indexOf('/') >= 0) {
            this.dateArr[1] = this.getAverageArr(rule, 59)
        }
        else if (rule !== '*') {
            this.dateArr[1] = this.getAssignArr(rule)
        }
    }

    /**
     * 获取"秒"数组
     */
    private getSecondArr(rule: string): void
    {
        this.dateArr[0] = this.getOrderArr(0, 59)
        if (rule.indexOf('-') >= 0) {
            this.dateArr[0] = this.getCycleArr(rule, 60, true)
        }
        else if (rule.indexOf('/') >= 0) {
            this.dateArr[0] = this.getAverageArr(rule, 59)
        }
        else if (rule !== '*') {
            this.dateArr[0] = this.getAssignArr(rule)
        }
    }

    /**
     * 根据传进来的min-max返回一个顺序的数组
     */
    private getOrderArr(min: number, max: number): number[]
    {
        const arr = [] as any[]
        for (let i = min; i <= max; i++) {
            arr.push(i)
        }
        return arr
    }

    /**
     * 根据规则中指定的零散值返回一个数组
     */
    private getAssignArr(rule: string): number[]
    {
        const arr = [] as any[]
        const assiginArr = rule.split(',')
        for (let i = 0; i < assiginArr.length; i++) {
            arr[i] = Number(assiginArr[i])
        }
        arr.sort(this.compare)
        return arr
    }

    /**
     * 根据一定算术规则计算返回一个数组
     */
    private getAverageArr(rule: string, limit: number): number[]
    {
        const arr = [] as any[]
        const agArr = rule.split('/')
        let min = Number(agArr[0])
        const step = Number(agArr[1])
        while (min <= limit) {
            arr.push(min)
            min += step
        }
        return arr
    }

    /**
     * 根据规则返回一个具有周期性的数组
     */
    private getCycleArr(rule: string, limit: number, status: boolean): number[]
    {
        // status--表示是否从0开始（则从1开始）
        const arr = [] as any[]
        const cycleArr = rule.split('-')
        const min = Number(cycleArr[0])
        let max = Number(cycleArr[1])
        if (min > max) {
            max += limit
        }
        for (let i = min; i <= max; i++) {
            let add = 0
            if (status === false && i % limit == 0) {
                add = limit
            }
            arr.push(Math.round(i % limit + add))
        }
        arr.sort(this.compare)
        return arr
    }

    /**
     * 比较数字大小（用于Array.sort）
     */
    private compare(value1: number, value2: number): number
    {
        if (value2 - value1 > 0) {
            return -1
        }
        return 1
    }

    /**
     * 格式化日期格式
     */
    private formatDate(value: Date, type?: string): any
    {
        // 计算日期相关值
        const Y = value.getFullYear()
        const M = value.getMonth() + 1
        const D = value.getDate()
        const h = value.getHours()
        const m = value.getMinutes()
        const s = value.getSeconds()
        const week = value.getDay()
        // 如果传递了type的话
        if (type == undefined) {
            return `${ Y }-${ M < 10 ? `0${ M }` : M }-${ D < 10 ? `0${ D }` : D } ${ h < 10 ? `0${ h }` : h }:${ m < 10 ? `0${ m }` : m }:${ s < 10 ? `0${ s }` : s }`
        }
        if (type === 'week') {
            return week
        }
    }

    /**
     * 检查日期是否存在
     */
    private checkDate(value: string): boolean
    {
        const time = new Date(value)
        const format = this.formatDate(time)
        return value === format
    }
}

// 创建一个单例实例
const calculator = new CronCalculator()

/**
 * 获取 Cron 表达式近期执行时间
 * @param expression Cron表达式
 * @param times 次数
 * @returns 执行时间数组
 */
export function getRecentTriggerTime(expression: string, times: number = 5): string[]
{
    return calculator.getRecentTriggerTime(expression, times)
}

export default CronCalculator