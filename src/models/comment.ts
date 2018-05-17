import { Model, RelationMappings } from 'objection';

class Comment extends Model {
   public static get tableName(): string {
      return 'comments';
   }

   public static get relationMappings(): RelationMappings {
      return {
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
}
