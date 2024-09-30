import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Category } from "./Category";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {nullable: true})
  name: string;

  @Column('text', {nullable: true})
  description: string;

  @Column('int')
  price: number;

  @Column('int')
  stock: number;

  @Column('text', {nullable: true})
  image: string;

  @Column('int')
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "categoryId" })
  category: Category;
}
