export interface User {
    id: number,
    username: string, 
    email: string,
    password?: string
}

export type UserData = {
    user: {
        id: number, 
        username: string,
        email: string,
    },
    token: string
}