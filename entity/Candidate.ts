import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
@Entity()
export class Candidate {
  @PrimaryGeneratedColumn("uuid")
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
  citizenship_front: string;

  @Column()
  citizenship_back: string;

  @CreateDateColumn()
  created_at: Date;
}
