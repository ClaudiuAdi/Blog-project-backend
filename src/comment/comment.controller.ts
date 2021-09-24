import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';

@Injectable()
@Controller('comments/:articleId')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAll(@Param('articleId') articleId: string) {
    return await this.commentService.findAll(articleId);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.commentService.findOne(id);
  }

  @Post()
  async addArticle(@Body() comment: CommentEntity) {
    return await this.commentService.create(comment);
  }

  @Put()
  async updateComment(@Body() comment: CommentEntity) {
    await this.commentService.updateComment(comment);
  }

  @Delete('/:id')
  async deleteComment(@Param('id') id: string) {
    await this.commentService.remove(id);
  }
}
