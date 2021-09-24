import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './article/article.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { CommentEntity } from './comment/comment.entity';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.39.76',
      port: 5432,
      username: 'culturalia',
      password: 'culturalia',
      database: 'culturalia',
      entities: [ArticleEntity, CommentEntity],
      synchronize: true,
      schema: 'claudiu',
    }),
    ArticleModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
