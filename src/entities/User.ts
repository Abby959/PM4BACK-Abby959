import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Order } from "./Order";

enum Role {
    ADMIN = "admin",
    USER = "user"
}

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        nullable: true
    })
    name: string;

    @Column('text', {
        unique: true,
        nullable: true
    })
    email: string;

    @Column('text', { nullable: true })
    address: string;

    @Column('text', { nullable: true })
    phone: string;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.USER
    })
    role: Role;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}

