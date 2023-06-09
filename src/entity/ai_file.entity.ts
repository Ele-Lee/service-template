import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('ai_file')
export class AiFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paint_id: string;

  @Column()
  user_id: number;

  @Column()
  file: Buffer;

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
