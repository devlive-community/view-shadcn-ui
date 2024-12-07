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
            nodeId: '节点 ID',
        }
    }
}
