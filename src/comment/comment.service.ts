import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  findAll(articleId): Promise<CommentEntity[]> {
    return this.commentRepository.find({ where: { articleId: articleId } });
  }

  findOne(id: string): Promise<CommentEntity> {
    return this.commentRepository.findOne(id);
  }

  async create(comment: CommentEntity) {
    return await this.commentRepository.save(comment);
  }

  async updateComment(comment: CommentEntity) {
    const found: CommentEntity = await this.commentRepository.findOne(
      comment.id,
    );
    if (found) {
      return await this.commentRepository.save(comment);
    } else return null;
  }

  async remove(id: string) {
    await this.commentRepository.delete(id);
  }
}
