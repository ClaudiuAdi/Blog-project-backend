import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleEntity } from './article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getAll() {
    return await this.articleService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.articleService.findOne(id);
  }

  @Post()
  async create(@Body() article: ArticleEntity) {
    return await this.articleService.create(article);
  }

  @Put()
  async updateArticle(@Body() article: ArticleEntity) {
    await this.articleService.updateArticle(article);
  }

  @Delete('/:id')
  async deleteArticle(@Param('id') id: string) {
    await this.articleService.remove(id);
  }
}
