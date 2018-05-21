import { Model, RelationMappings } from 'objection';
// import { join } from 'path';
import { Comment } from './comment';

export class Idea extends Model {
   public static tableName: string = 'ideas';

   public static relationMappings: RelationMappings = {
      comments: {
         relation: Model.HasManyRelation,
         modelClass: Comment,
         join: {
            from: 'ideas.id',
            to: 'comments.ideas_id'
         }
      }
   };
}