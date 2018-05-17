class Idea extends Model {
   public static get tableName() {
      return 'ideas'
   }

   static get relationMappings() {
      return {
         comments: {
            relation: Model.HasManyRelation,
            modelClass: Comment,
            join: {
               from: 'ideas.id',
               to: 'comments.ideas_id'
            }
         }
      }
   }
}