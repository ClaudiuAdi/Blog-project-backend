import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500 })
  subTitle: string;

  // @Column('text')
  // imageUrl: string;

  @Column('text')
  author: string;

  @Column('text')
  content: string;
}
