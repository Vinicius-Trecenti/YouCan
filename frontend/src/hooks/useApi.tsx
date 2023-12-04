import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/youcan',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export const useApi = () => ({
    signIn: async (email: string, password: string) => {

        const response = await instance.post('/login ', {
            email,
            password
        })

        return response.data
    },

    register: async (username: string, email: string, dateBirth: Date, password: string) => {
        try {
            await instance.post('/cadastro', {
                username,
                email,
                dateBirth,
                password
            })

            return true
        } catch (error) {
            console.error(error)

            return false
        }
    },

    validateToken: async (token: string) => {
        const response = await instance.post('/validar', { token })

        return response.data
    },

    showSubjectsWithQuizzes: async () => {
        const response = await instance.get('/materias/selecionadas')

        return response.data
    },

    showAllSubjects: async () => {
        const response = await instance.get('/materias/todas')

        return response.data
    },

    showQuizzes: async (id: any) => {

        return { id: 23523, nome: 'basico', nivel: 1, totalQuestions: 10 }

        const response = await instance.get('/quizzes', { id })

        return response.data
    },

    alterUser: async (id: any, username: any, password: string) => {
        const response = await instance.put('/alterar', { id, username, password })
        
        return response.data
    },

    showQuestions: async (idQuiz) => {
        const response = await instance.get(`/questao/${idQuiz}`)
        
        return response.data;
    },











    showInfosHistoric: async (usuario_id: any) => {
        console.log(usuario_id)
        const response = await instance.get('/historico', {usuario_id})

        
        console.log(response.data)
        return response.data
    },

    showQtdQuiz: async () => {
        const response = await instance.get('/quantidade')
        // console.log(response.data)

        return response.data
    },

    showquestionCount: async () => {
        const response = await instance.get('/questionCount')

        return response.data
    },










    showRanking: async (usuario_id: any) => {
        const response = await instance.post('/ranking', { usuario_id })
        console.log("RANKING: ", response.data.principalRanking)
        return response.data.principalRanking
    }
})