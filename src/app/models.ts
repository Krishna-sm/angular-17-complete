export interface Todo{
    id: number;
    title:string;
    desc:string;
    isComplete?:boolean;
}

export interface Contact{
    id?: number;
    name:string;
    email:string;
    msg:string;
}