export interface Quiz {
    subject: string,
    name: string,
    description: string,
    level: string,
    questions: Array<{
        statement: string,
        alternatives: Array<{
            description: string,
            points: string
        }>
    }>
}

export interface Question {
    statement: string;
    alternatives: Alternative[];
}

export interface Alternative {
    description: string;
    points: string;
}