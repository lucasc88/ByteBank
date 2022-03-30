export interface Transfer {
    //? lets these fields as optional
    id?: string | number;
    value: number;
    destination: string | number;//pipe to allows string or number type
    date?: Date;
}