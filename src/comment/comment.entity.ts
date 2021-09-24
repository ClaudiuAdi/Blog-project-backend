import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articleId: number;

  @Column({ default: null })
  commentId: number;

  @Column()
  name: string;

  @Column()
  message: string;
}
