export interface User {
    id: number,
    username: string, 
    email: string,
    dateBirth: Date,
    password?: string
}

export type UserData = {
    user: {
        id: number, 
        username: string,
        email: string,
        dateBirth: Date,
        password?: string
    },
    token: string,
    error: string
}