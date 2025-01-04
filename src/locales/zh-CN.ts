export default {
    upload: {
        text: {
            placeholder: '<span class="text-blue-600">点击上传</span> 或拖拽文件到这里',
            description: '支持单文件或批量上传',
            success: '上传成功',
            error: '上传失败'
        }
    },
    toolbar: {
        text: {
            ok: '确定',
            cancel: '取消'
        }
    },
    modal: {
        text: {
            ok: '确定',
            cancel: '取消'
        }
    },
    exception: {
        text: {
            401: {
                title: '未登录',
                description: '抱歉，您需要先登录才能访问此页面。'
            },
            403: {
                title: '无权限访问此页面',
                description: '抱歉,您没有访问此页面的权限。'
            },
            404: {
                title: '找不到页面',
                description: '抱歉,找不到您要访问的页面。'
            },
            500: {
                title: '服务器错误',
                description: '抱歉,服务器出现了错误。'
            }
        },
        action: {
            backHome: '返回首页'
        }
    },
    select: {
        text: {
            placeholder: '请选择一个选项'
        }
    },
    pagination: {
        text: {
            total: '共 {{ total }} 条',
            previous: '上一页',
            next: '下一页',
            item: '{{ item }} 条'
        }
    },
    dataBuilder: {
        placeholder: {
            width: '宽度',
            height: '高度',
            backgroundImage: '背景图'
        },
        text: {
            showGrid: '显示网格',
            snapToGrid: '网格对齐',
            showRuler: '显示尺子',
            dragResize: '拖拽调整大小',
            showGuidelines: '显示参考线',
            configureCenter: '配置中心',
            basicConfigure: '基础配置',
            backgroundColor: '背景颜色',
            backgroundImage: '背景图',
            opacity: '透明度',
            xCoordinate: 'X 坐标',
            yCoordinate: 'Y 坐标',
            width: '宽度',
            height: '高度'
        }
    },
    logger: {
        placeholder: {
            search: '搜索 ...'
        },
        text: {
            allLevel: '所有级别'
        }
    },
    countDown: {
        text: {
            day: '天',
            hour: '时',
            minute: '分',
            second: '秒',
            pause: '暂停',
            resume: '继续',
            reset: '重置',
            paused: '已暂停',
            completed: '已完成',
            timeUp: '即将到期',
            running: '进行中'
        }
    },
    empty: {
        text: {
            retry: '重试',
            noData: '暂无数据',
            noDataDescription: '没有找到相关数据'
        }
    },
    workflow: {
        placeholder: {
            search: '搜索 ...',
            selectNode: '请选择一个节点进行配置'
        },
        text: {
            input: '输入',
            output: '输出',
            nodeConfigure: '节点配置',
            dataConfigure: '数据配置',
            nodeId: '节点 ID'
        },
        validated: {
            required: '此项为必填项'
        }
    },
    inputTag: {
        text: {
            placeholder: '请输入标签'
        }
    },
    map: {
        placeholder: {
            key: '键',
            value: '值'
        },
        validated: {
            duplicate: '不允许使用重复的键',
            required: '键为必填项'
        }
    },
    dataFilter: {
        placeholder: {
            value: '请输入值',
            values: '请输入多个值',
            number: '请输入数字',
            numbers: '请输入多个数字',
            minNumber: '最小值',
            maxNumber: '最大值'
        },
        text: {
            eq: '等于',
            neq: '不等于',
            gt: '大于',
            gte: '大于等于',
            lt: '小于',
            lte: '小于等于',
            in: '在 ... 中',
            notIn: '不在 ... 中',
            between: '在 ... 之间',
            notBetween: '不在 ... 之间',
            isNull: '为空',
            isNotNull: '不为空',
            like: '包含',
            notLike: '不包含',
            regex: '匹配',
            notRegex: '不匹配',
            isTrue: '为 True',
            isFalse: '为 False',
            addCondition: '添加条件',
            addGroup: '添加分组',
            and: '且',
            or: '或'
        },
        validated: {
            invalid: '无效的字段',
            required: '请选择字段',
            operatorRequired: '请选择操作符',
            valueRequired: '请输入值',
            rangeRequired: '请输入范围',
            invalidRange: '范围值无效',
            invalidDateRange: '日期范围无效',
            invalidRegex: '正则表达式无效'
        }
    },
    timePicker: {
        text: {
            am: '上午',
            pm: '下午'
        },
        placeholder: {
            time: '请选择时间'
        }
    },
    colorPicker: {
        text: {
            transparency: '透明度',
            format: '格式'
        }
    },
    datePicker: {
        text: {
            sunday: '星期日',
            monday: '星期一',
            tuesday: '星期二',
            wednesday: '星期三',
            thursday: '星期四',
            friday: '星期五',
            saturday: '星期六',
            january: '一月',
            february: '二月',
            march: '三月',
            april: '四月',
            may: '五月',
            june: '六月',
            july: '七月',
            august: '八月',
            september: '九月',
            october: '十月',
            november: '十一月',
            december: '十二月',
            year: '年',
            month: '月',
            today: '今天',
            yesterday: '昨天',
            thisWeek: '本周',
            lastWeek: '上周',
            thisMonth: '本月',
            lastMonth: '上月',
            last3Months: '过去 3 个月',
            thisYear: '今年',
            lastYear: '去年'
        },
        placeholder: {
            date: '请选择日期'
        }
    },
    cron: {
        placeholder: {
            multiple: '可多选'
        },
        text: {
            second: '秒',
            minute: '分',
            hour: '时',
            day: '日',
            month: '月',
            week: '周',
            year: '年',
            everySecond: '每秒',
            everyMinute: '每分钟',
            everyHour: '每小时',
            everyDay: '每天',
            everyWeek: '每周',
            everyMonth: '每月',
            periodFrom: '周期从',
            fromStart: '从开始',
            secondStart: '秒开始',
            every: '每',
            secondExecute: '秒执行',
            specify: '指定',
            minuteStart: '分钟开始',
            minuteExecute: '分钟执行',
            hourStart: '小时开始',
            hourExecute: '小时执行',
            notSpecified: '未指定',
            dayStart: '天开始',
            dayExecute: '天执行',
            workday: '工作日',
            nearestWorkday: '号最近工作日',
            lastDayOfMonth: '月最后一天',
            monthStart: '月开始',
            monthExecute: '月执行',
            weekPeriodFrom: '周周期从',
            specificWeek: '指定周',
            the: '第',
            weekOf: '周',
            lastWeek: '上周',
            yearNotFilled: '年份未填写',
            everyYear: '每年',
            yearStart: '年开始',
            yearExecute: '年执行',
            nextExecutionTime: '下次执行时间',
            nextExecutionTimeAtOnN: '第 {{ n }} 次执行时间: {{ time }}'
        }
    },
    contribution: {
        text: {
            less: '少',
            more: '多',
            contribution: '贡献'
        }
    },
    codeEditor: {
        text: {
            loading: '正在加载代码提示...',
            copy: '复制',
            cut: '剪切',
            paste: '粘贴',
            findInContext: '在文中查找',
            replace: '替换',
            replaceAll: '全部替换'
        },
        validated: {
            endpoint: '必须提供 API 接口地址',
            transform: '必须提供转换函数',
            regex: '正则表达式无效',
            search: '搜索错误'
        }
    },
    mention: {
        text: {
            placeholder: '键入 @ 以提及'
        }
    }
}