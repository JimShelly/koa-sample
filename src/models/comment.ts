import { Model, RelationMappings } from 'objection';
// import { join } from 'path';
import { Idea } from './idea';

export class Comment extends Model {
   public static get tableName(): string {
      return 'comments';
   }

   public static relationMappings: RelationMappings = {
      idea: {
         relation: Model.BelongsToOneRelation,
         modelClass: Idea,
         join: {
            from: 'comments.ideas_id',
            to: 'ideas.id'
         }
      }
   };
}
