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

        console.log(response.data)

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
            console.log("ERRO NO REGISTRO!")
            console.error(error)

            return false
        }
    },

    validateToken: async (token: string) => {
        const response = await instance.post('/validar', { token })
        console.log(response.data)
        return response.data
    },

    showSubjects: async () => {
        const response = await instance.get('/materias')

        return response.data
    },

    showQuizzes: async (id: any) => {

        return {id: 23523, nome: 'basico', nivel: 1, totalQuestions: 10}
        
        const response = await instance.get('/quizzes', { id })

        return response.data
    },

    alterUser: async (id:any, username: any, password: string)  => {
        const response = await instance.put('/alterar', {id, username, password})
        return response.data
    },

    showQuestions: async (idQuestion:any) =>{
        const response = await instance.get('/questao', {idQuestion})

        return response.data
    },


})