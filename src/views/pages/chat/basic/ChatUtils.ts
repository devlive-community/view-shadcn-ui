const createMessages = (i18n: any) => {
    return [
        {
            role: 'user',
            content: i18n.t('common.common.sendMessage')
        },
        {
            role: 'assistant',
            content: i18n.t('common.common.replyMessage')
        },
        {
            role: 'user',
            content: i18n.t('common.common.sendMessage')
        },
        {
            role: 'assistant',
            content: i18n.t('common.common.replyMessage')
        },
        {
            role: 'user',
            content: i18n.t('common.common.sendMessage')
        },
        {
            role: 'assistant',
            content: i18n.t('common.common.replyMessage')
        },
        {
            role: 'user',
            content: i18n.t('common.common.sendMessage')
        },
        {
            role: 'assistant',
            content: i18n.t('common.common.replyMessage')
        },
        {
            role: 'user',
            content: i18n.t('common.common.sendMessage')
        },
        {
            role: 'assistant',
            content: i18n.t('common.common.replyMessage')
        }
    ]
}

const createUsers = () => {
    return [
        {
            username: 'User 1',
            email: 'community@devlive.org'
        },
        {
            username: 'User 2',
            email: 'community@devlive.org'
        },
        {
            username: 'User 3',
            email: 'community@devlive.org'
        }
    ]
}

export {
    createMessages,
    createUsers
}
