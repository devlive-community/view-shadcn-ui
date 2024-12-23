/**
 * Cron 表达式时间计算工具类
 */
class CronTimeCalculator {
    private dateArr: number[][] = [];
    private dayRule: string = '';
    private dayRuleSup: any = '';

    /**
     * 计算 Cron 表达式最近 n 次运行时间
     * @param expression Cron 表达式
     * @param size 需要计算的数量
     * @returns 未来运行时间数组
     */
    public getRecentTriggerTime(expression: string, size: number = 5): string[] {
        // 获取规则数组[0秒、1分、2时、3日、4月、5星期、6年]
        const ruleArr = expression.split(' ');
        // 用于记录进入循环的次数
        let nums = 0;
        // 用于暂时存符号时间规则结果的数组
        const resultArr: string[] = [];

        // 获取当前时间精确至[年、月、日、时、分、秒]
        const nTime = new Date();
        const nYear = nTime.getFullYear();
        let nMouth = nTime.getMonth() + 1;
        let nDay = nTime.getDate();
        let nHour = nTime.getHours();
        let nMin = nTime.getMinutes();
        let nSecond = nTime.getSeconds();

        // 根据规则获取到近100年可能年数组、月数组等等
        this.initTimeArrays(ruleArr, nYear);

        // 将获取到的数组赋值-方便使用
        const sDate = this.dateArr[0];
        const mDate = this.dateArr[1];
        const hDate = this.dateArr[2];
        const DDate = this.dateArr[3];
        const MDate = this.dateArr[4];
        const YDate = this.dateArr[5];

        // 获取当前时间在数组中的索引
        let sIdx = this.getIndex(sDate, nSecond);
        let mIdx = this.getIndex(mDate, nMin);
        let hIdx = this.getIndex(hDate, nHour);
        let DIdx = this.getIndex(DDate, nDay);
        let MIdx = this.getIndex(MDate, nMouth);
        const YIdx = this.getIndex(YDate, nYear);

        // 重置时间处理函数
        const resetHandler = {
            second: () => {
                sIdx = 0;
                nSecond = sDate[sIdx];
            },
            minute: () => {
                mIdx = 0;
                nMin = mDate[mIdx];
                resetHandler.second();
            },
            hour: () => {
                hIdx = 0;
                nHour = hDate[hIdx];
                resetHandler.minute();
            },
            day: () => {
                DIdx = 0;
                nDay = DDate[DIdx];
                resetHandler.hour();
            },
            month: () => {
                MIdx = 0;
                nMouth = MDate[MIdx];
                resetHandler.day();
            }
        };

        // 重置不符合的时间
        this.resetInvalidTime(nYear, YDate[YIdx], nMouth, MDate[MIdx], nDay, DDate[DIdx],
            nHour, hDate[hIdx], nMin, mDate[mIdx], resetHandler);

        // 循环年份数组
        yearLoop: for (let Yi = YIdx; Yi < YDate.length; Yi++) {
            const YY = YDate[Yi];

            if (nMouth > MDate[MDate.length - 1]) {
                resetHandler.month();
                continue;
            }

            // 循环月份数组
            monthLoop: for (let Mi = MIdx; Mi < MDate.length; Mi++) {
                let MM = MDate[Mi];
                MM = MM < 10 ? `0${MM}` : MM;

                if (nDay > DDate[DDate.length - 1]) {
                    resetHandler.day();
                    if (Mi === MDate.length - 1) {
                        resetHandler.month();
                        continue yearLoop;
                    }
                    continue;
                }

                // 循环日期数组
                dayLoop: for (let Di = DIdx; Di < DDate.length; Di++) {
                    let DD = DDate[Di];
                    let thisDD = DD < 10 ? `0${DD}` : DD;

                    if (nHour > hDate[hDate.length - 1]) {
                        resetHandler.hour();
                        if (Di === DDate.length - 1) {
                            resetHandler.day();
                            if (Mi === MDate.length - 1) {
                                resetHandler.month();
                                continue yearLoop;
                            }
                            continue monthLoop;
                        }
                        continue;
                    }

                    // 检查日期合法性
                    if (!this.isValidDate(`${YY}-${MM}-${thisDD} 00:00:00`)) {
                        DD = this.adjustDayByRule(YY, MM, DD, thisDD);
                        if (DD === null) {
                            resetHandler.day();
                            continue monthLoop;
                        }
                        thisDD = DD < 10 ? `0${DD}` : DD;
                    }

                    // 循环小时数组
                    hourLoop: for (let hi = hIdx; hi < hDate.length; hi++) {
                        const hh = hDate[hi] < 10 ? `0${hDate[hi]}` : hDate[hi];

                        if (nMin > mDate[mDate.length - 1]) {
                            resetHandler.minute();
                            if (hi === hDate.length - 1) {
                                resetHandler.hour();
                                if (Di === DDate.length - 1) {
                                    resetHandler.day();
                                    if (Mi === MDate.length - 1) {
                                        resetHandler.month();
                                        continue yearLoop;
                                    }
                                    continue monthLoop;
                                }
                                continue dayLoop;
                            }
                            continue;
                        }

                        // 循环分钟数组
                        minuteLoop: for (let mi = mIdx; mi < mDate.length; mi++) {
                            const mm = mDate[mi] < 10 ? `0${mDate[mi]}` : mDate[mi];

                            if (nSecond > sDate[sDate.length - 1]) {
                                resetHandler.second();
                                if (mi === mDate.length - 1) {
                                    resetHandler.minute();
                                    if (hi === hDate.length - 1) {
                                        resetHandler.hour();
                                        if (Di === DDate.length - 1) {
                                            resetHandler.day();
                                            if (Mi === MDate.length - 1) {
                                                resetHandler.month();
                                                continue yearLoop;
                                            }
                                            continue monthLoop;
                                        }
                                        continue dayLoop;
                                    }
                                    continue hourLoop;
                                }
                                continue;
                            }

                            // 循环秒数组
                            for (let si = sIdx; si <= sDate.length - 1; si++) {
                                const ss = sDate[si] < 10 ? `0${sDate[si]}` : sDate[si];

                                // 添加当前时间（时间合法性在日期循环时已经判断）
                                if (MM !== '00' && DD !== '00') {
                                    resultArr.push(`${YY}-${MM}-${thisDD} ${hh}:${mm}:${ss}`);
                                    nums++;
                                }

                                // 如果条数满了就退出循环
                                if (nums === size) break yearLoop;

                                // 重置处理
                                if (si === sDate.length - 1) {
                                    this.handleTimeOverflow(si, mi, hi, Di, Mi, sDate, mDate, hDate, DDate, MDate,
                                        resetHandler, yearLoop, monthLoop, dayLoop, hourLoop, minuteLoop);
                                }
                            }
                        }
                    }
                }
            }
        }

        // 判断100年内的结果条数
        if (resultArr.length === 0) {
            return ['没有达到条件的结果！'];
        } else {
            if (resultArr.length !== size) {
                resultArr.push(`最近100年内只有上面${resultArr.length}条结果！`);
            }
            return resultArr;
        }
    }

    private resetInvalidTime(
        nYear: number,
        yearValue: number,
        nMouth: number,
        monthValue: number,
        nDay: number,
        dayValue: number,
        nHour: number,
        hourValue: number,
        nMin: number,
        minValue: number,
        resetHandler: {
            second: () => void;
            minute: () => void;
            hour: () => void;
            day: () => void;
            month: () => void;
        }
    ): void {
        // 如果当前年份不为数组中当前值
        if (nYear !== yearValue) {
            resetHandler.month();
        }
        // 如果当前月份不为数组中当前值
        if (nMouth !== monthValue) {
            resetHandler.day();
        }
        // 如果当前"日"不为数组中当前值
        if (nDay !== dayValue) {
            resetHandler.hour();
        }
        // 如果当前"时"不为数组中当前值
        if (nHour !== hourValue) {
            resetHandler.minute();
        }
        // 如果当前"分"不为数组中当前值
        if (nMin !== minValue) {
            resetHandler.second();
        }
    }

    /**
     * 根据规则调整日期
     */
    private adjustDayByRule(
        year: number | string,
        month: number | string,
        day: number,
        formattedDay: string
    ): number | null {
        // 如果日期规则中有值时
        if (this.dayRule === 'lastDay') {
            // 如果不是合法日期则需要将前将日期调到合法日期即月末最后一天
            if (!this.isValidDate(`${year}-${month}-${formattedDay} 00:00:00`)) {
                while (day > 0 && !this.isValidDate(`${year}-${month}-${formattedDay} 00:00:00`)) {
                    day--;
                    formattedDay = day < 10 ? `0${day}` : day.toString();
                }
            }
        } else if (this.dayRule === 'workDay') {
            // 校验并调整如果是2月30号这种日期传进来时需调整至正常月底
            if (!this.isValidDate(`${year}-${month}-${formattedDay} 00:00:00`)) {
                while (day > 0 && !this.isValidDate(`${year}-${month}-${formattedDay} 00:00:00`)) {
                    day--;
                    formattedDay = day < 10 ? `0${day}` : day.toString();
                }
            }
            // 获取达到条件的日期是星期几
            const thisWeek = this.formatDate(new Date(`${year}-${month}-${formattedDay} 00:00:00`), 'week');
            if (thisWeek === '0') {
                // 星期日情况
                day++;
                if (!this.isValidDate(`${year}-${month}-${day < 10 ? '0' + day : day} 00:00:00`)) {
                    day -= 3;
                }
            } else if (thisWeek === '6') {
                // 星期六情况
                if (this.dayRuleSup !== 1) {
                    day--;
                } else {
                    day += 2;
                }
            }
        } else if (this.dayRule === 'weekDay') {
            // 如果指定了是星期几
            const thisWeek = this.formatDate(new Date(`${year}-${month}-${day} 00:00:00`), 'week');
            if (Array.isArray(this.dayRuleSup) && !this.dayRuleSup.includes(Number(thisWeek))) {
                return null;
            }
        } else if (this.dayRule === 'assWeek') {
            // 如果指定了是第几周的星期几
            const thisWeek = this.formatDate(new Date(`${year}-${month}-${day} 00:00:00`), 'week');
            if (Array.isArray(this.dayRuleSup) && this.dayRuleSup[1] >= Number(thisWeek)) {
                day = (this.dayRuleSup[0] - 1) * 7 + this.dayRuleSup[1] - Number(thisWeek) + 1;
            } else {
                day = this.dayRuleSup[0] * 7 + this.dayRuleSup[1] - Number(thisWeek) + 1;
            }
        } else if (this.dayRule === 'lastWeek') {
            // 如果指定了每月最后一个星期几
            if (!this.isValidDate(`${year}-${month}-${formattedDay} 00:00:00`)) {
                while (day > 0 && !this.isValidDate(`${year}-${month}-${formattedDay} 00:00:00`)) {
                    day--;
                    formattedDay = day < 10 ? `0${day}` : day.toString();
                }
            }
            // 获取月末最后一天是星期几
            const thisWeek = this.formatDate(new Date(`${year}-${month}-${formattedDay} 00:00:00`), 'week');
            // 找到要求中最近的那个星期几
            if (this.dayRuleSup < Number(thisWeek)) {
                day -= Number(thisWeek) - this.dayRuleSup;
            } else if (this.dayRuleSup > Number(thisWeek)) {
                day -= 7 - (this.dayRuleSup - Number(thisWeek));
            }
        }
        return day;
    }

    /**
     * 处理时间溢出情况
     */
    private handleTimeOverflow(
        si: number,
        mi: number,
        hi: number,
        Di: number,
        Mi: number,
        sDate: number[],
        mDate: number[],
        hDate: number[],
        DDate: number[],
        MDate: number[],
        resetHandler: {
            second: () => void;
            minute: () => void;
            hour: () => void;
            day: () => void;
            month: () => void;
        },
        yearLoop: string,
        monthLoop: string,
        dayLoop: string,
        hourLoop: string,
        minuteLoop: string
    ): void {
        resetHandler.second();
        if (mi === mDate.length - 1) {
            resetHandler.minute();
            if (hi === hDate.length - 1) {
                resetHandler.hour();
                if (Di === DDate.length - 1) {
                    resetHandler.day();
                    if (Mi === MDate.length - 1) {
                        resetHandler.month();
                        continue yearLoop;
                    }
                    continue monthLoop;
                }
                continue dayLoop;
            }
            continue hourLoop;
        }
        continue minuteLoop;
    }

    /**
     * 初始化时间数组
     */
    private initTimeArrays(ruleArr: string[], currentYear: number): void {
        this.getSecondArr(ruleArr[0]);
        this.getMinArr(ruleArr[1]);
        this.getHourArr(ruleArr[2]);
        this.getDayArr(ruleArr[3]);
        this.getMouthArr(ruleArr[4]);
        this.getWeekArr(ruleArr[5]);
        this.getYearArr(ruleArr[6], currentYear);
    }

    getYearArr(rule, year) {
        this.dateArr[5] = this.getOrderArr(year, year + 100);
        if (rule !== undefined) {
            if (rule.indexOf('-') >= 0) {
                this.dateArr[5] = this.getCycleArr(rule, year + 100, false)
            } else if (rule.indexOf('/') >= 0) {
                this.dateArr[5] = this.getAverageArr(rule, year + 100)
            } else if (rule !== '*') {
                this.dateArr[5] = this.getAssignArr(rule)
            }
        }
    }

    getMouthArr(rule) {
        this.dateArr[4] = this.getOrderArr(1, 12);
        if (rule.indexOf('-') >= 0) {
            this.dateArr[4] = this.getCycleArr(rule, 12, false)
        } else if (rule.indexOf('/') >= 0) {
            this.dateArr[4] = this.getAverageArr(rule, 12)
        } else if (rule !== '*') {
            this.dateArr[4] = this.getAssignArr(rule)
        }
    }

    getWeekArr(rule) {
        // 只有当日期规则的两个值均为“”时则表达日期是有选项的
        if (this.dayRule == '' && this.dayRuleSup == '') {
            if (rule.indexOf('-') >= 0) {
                this.dayRule = 'weekDay';
                this.dayRuleSup = this.getCycleArr(rule, 7, false)
            } else if (rule.indexOf('#') >= 0) {
                this.dayRule = 'assWeek';
                const matchRule = rule.match(/[0-9]{1}/g);
                this.dayRuleSup = [Number(matchRule[0]), Number(matchRule[1])];
                this.dateArr[3] = [1];
                if (this.dayRuleSup[1] == 7) {
                    this.dayRuleSup[1] = 0;
                }
            } else if (rule.indexOf('L') >= 0) {
                this.dayRule = 'lastWeek';
                this.dayRuleSup = Number(rule.match(/[0-9]{1,2}/g)[0]);
                this.dateArr[3] = [31];
                if (this.dayRuleSup == 7) {
                    this.dayRuleSup = 0;
                }
            } else if (rule !== '*' && rule !== '?') {
                this.dayRule = 'weekDay';
                this.dayRuleSup = this.getAssignArr(rule)
            }
            // 如果weekDay时将7调整为0【week值0即是星期日】
            if (this.dayRule === 'weekDay') {
                for (let i = 0; i < this.dayRuleSup.length; i++) {
                    if (this.dayRuleSup[i] == 7) {
                        this.dayRuleSup[i] = 0;
                    }
                }
            }
        }
    }

    getDayArr(rule) {
        this.dateArr[3] = this.getOrderArr(1, 31);
        this.dayRule = '';
        this.dayRuleSup = '';
        if (rule.indexOf('-') >= 0) {
            this.dateArr[3] = this.getCycleArr(rule, 31, false)
            this.dayRuleSup = 'null';
        } else if (rule.indexOf('/') >= 0) {
            this.dateArr[3] = this.getAverageArr(rule, 31)
            this.dayRuleSup = 'null';
        } else if (rule.indexOf('W') >= 0) {
            this.dayRule = 'workDay';
            this.dayRuleSup = Number(rule.match(/[0-9]{1,2}/g)[0]);
            this.dateArr[3] = [this.dayRuleSup];
        } else if (rule.indexOf('L') >= 0) {
            this.dayRule = 'lastDay';
            this.dayRuleSup = 'null';
            this.dateArr[3] = [31];
        } else if (rule !== '*' && rule !== '?') {
            this.dateArr[3] = this.getAssignArr(rule)
            this.dayRuleSup = 'null';
        } else if (rule === '*') {
            this.dayRuleSup = 'null';
        }
    }

    getHourArr(rule) {
        this.dateArr[2] = this.getOrderArr(0, 23);
        if (rule.indexOf('-') >= 0) {
            this.dateArr[2] = this.getCycleArr(rule, 24, true)
        } else if (rule.indexOf('/') >= 0) {
            this.dateArr[2] = this.getAverageArr(rule, 23)
        } else if (rule !== '*') {
            this.dateArr[2] = this.getAssignArr(rule)
        }
    }

    getMinArr(rule) {
        this.dateArr[1] = this.getOrderArr(0, 59);
        if (rule.indexOf('-') >= 0) {
            this.dateArr[1] = this.getCycleArr(rule, 60, true)
        } else if (rule.indexOf('/') >= 0) {
            this.dateArr[1] = this.getAverageArr(rule, 59)
        } else if (rule !== '*') {
            this.dateArr[1] = this.getAssignArr(rule)
        }
    }

    getSecondArr(rule) {
        this.dateArr[0] = this.getOrderArr(0, 59);
        if (rule.indexOf('-') >= 0) {
            this.dateArr[0] = this.getCycleArr(rule, 60, true)
        } else if (rule.indexOf('/') >= 0) {
            this.dateArr[0] = this.getAverageArr(rule, 59)
        } else if (rule !== '*') {
            this.dateArr[0] = this.getAssignArr(rule)
        }
    }

    getOrderArr(min: number, max: number) {
        const arr = [] as any;
        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    getAssignArr(rule) {
        const arr = [];
        const assiginArr = rule.split(',');
        for (let i = 0; i < assiginArr.length; i++) {
            arr[i] = Number(assiginArr[i])
        }
        arr.sort(this.compare)
        return arr;
    }

    getAverageArr(rule, limit) {
        const arr = [];
        const agArr = rule.split('/');
        let min = Number(agArr[0]);
        const step = Number(agArr[1]);
        while (min <= limit) {
            arr.push(min);
            min += step;
        }
        return arr;
    }

    getCycleArr(rule, limit, status) {
        // status--表示是否从0开始（则从1开始）
        const arr = [];
        const cycleArr = rule.split('-');
        const min = Number(cycleArr[0]);
        let max = Number(cycleArr[1]);
        if (min > max) {
            max += limit;
        }
        for (let i = min; i <= max; i++) {
            let add = 0;
            if (status === false && i % limit == 0) {
                add = limit;
            }
            arr.push(Math.round(i % limit + add))
        }
        arr.sort(this.compare)
        return arr;
    }

    compare(value1:number, value2:number) {
        if (value2 - value1 > 0) {
            return -1;
        }
        return 1;
    }

    /**
     * 获取数字在数组中的索引
     */
    private getIndex(arr: number[], value: number): number {
        if (value <= arr[0] || value > arr[arr.length - 1]) {
            return 0;
        }
        for (let i = 0; i < arr.length - 1; i++) {
            if (value > arr[i] && value <= arr[i + 1]) {
                return i + 1;
            }
        }
        return 0;
    }

    /**
     * 检查日期是否合法
     */
    private isValidDate(dateStr: string): boolean {
        const time = new Date(dateStr);
        const format = this.formatDate(time);
        return dateStr === format;
    }

    /**
     * 格式化日期
     */
    private formatDate(date: Date, type?: string): string {
        const Y = date.getFullYear();
        const M = date.getMonth() + 1;
        const D = date.getDate();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        if (type === 'week') {
            return date.getDay().toString();
        }

        return `${Y}-${M < 10 ? `0${M}` : M}-${D < 10 ? `0${D}` : D} ${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
    }
}

export default CronTimeCalculator;