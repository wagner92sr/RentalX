import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"; // cria alias uuidv4 para v4

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
    /** Se o id estiver nulo, gera um novo
     * Se veio populado(é atualizção) utiliza o recebido
     */
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
