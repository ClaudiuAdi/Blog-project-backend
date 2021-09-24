import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './article.entity';
import { Repository } from 'typeorm';
import { ArticleRepository } from './article.repository';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: ArticleRepository,
  ) {}

  findAll(): Promise<ArticleEntity[]> {
    return this.articleRepository.find();
  }

  findOne(id: string): Promise<ArticleEntity> {
    return this.articleRepository.findOne(id);
  }

  async create(article: ArticleEntity) {
    return await this.articleRepository.save(article);
  }

  async updateArticle(article: ArticleEntity) {
    const found: ArticleEntity = await this.articleRepository.findOne(
      article.id,
    );
    if (found) {
      return this.articleRepository.save(article);
    } else return null;
  }

  async remove(id: string) {
    await this.articleRepository.delete(id);
  }
}
