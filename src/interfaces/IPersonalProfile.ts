

export interface IPersonalProfile {
    _id: string;
    name: string;
    surname: string;
    email: string;
    username: string;
    title: string;
    bio: string;
    area: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
connected:string[];
receivedRequests:{pending:string[]}
sendRequests:{pending:string[]}
}