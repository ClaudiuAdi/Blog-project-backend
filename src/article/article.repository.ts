import { EntityRepository, Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';

@EntityRepository(ArticleEntity)
export class ArticleRepository extends Repository<ArticleEntity> {}
