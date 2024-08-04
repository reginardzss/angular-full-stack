import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./items";

export class Invoice {
    id!: number;
    name!: string;
    client!: Client;
    company!: Company;
    items!: Item[];
}