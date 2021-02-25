const QUESTIONS_KEY = process.env.QUESTIONS_KEY;
const USER_INFO_KEY = process.env.USER_INFO_KEY;

export const getQuestions = async () => {
    const storageQuestions = localStorage.getItem(QUESTIONS_KEY)
    if (!storageQuestions) {
        const data = await import('../defaultQuestions');
        setQuestions(data?.default?.questions)
        return data?.default.questions
    } else {
        return JSON.parse(storageQuestions).questions
    }
}

export const setQuestions = (questions) => {
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify({ questions }));
}

export const getUser = async () => {
    const loggedUser = localStorage.getItem(USER_INFO_KEY)
    if (!loggedUser) {
        const data = await import('../loggedUser.json');
        setUser(data?.default)
        return data?.default
    } else {
        return JSON.parse(loggedUser)
    }
}

export const setUser = (user) => {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
}