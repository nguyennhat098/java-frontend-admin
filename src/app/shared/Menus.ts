export class Menus {
    id: number;
    text: string;
    displayOrder: number;
    link: string;
    status: boolean;
    class1: string;
    constructor(init?: Partial<Menus>) {
        Object.assign(this, init);
    }
}