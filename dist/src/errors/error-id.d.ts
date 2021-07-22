export declare class ErrorId {
    id: number;
    name: string;
    desc?: string;
    constructor(id: number, name: string, desc?: string);
    get message(): string;
}
