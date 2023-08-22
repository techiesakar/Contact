import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  profile_image: string;

  @Column()
  document_one: string;

  @Column()
  document_two: string;

  @CreateDateColumn()
  created_at: Date;
}
