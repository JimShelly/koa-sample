"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
// import { join } from 'path';
const idea_1 = require("./idea");
class Comment extends objection_1.Model {
    static get tableName() {
        return 'comments';
    }
}
Comment.relationMappings = {
    idea: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: idea_1.Idea,
        join: {
            from: 'comments.ideas_id',
            to: 'ideas.id'
        }
    }
};
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map