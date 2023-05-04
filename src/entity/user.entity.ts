import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_time',
  })
  createdTime: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_time',
  })
  updatedTime: Date;

  @Column()
  status: 1 | 0;
}
