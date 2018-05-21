"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
// import { join } from 'path';
const comment_1 = require("./comment");
class Idea extends objection_1.Model {
}
Idea.tableName = 'ideas';
Idea.relationMappings = {
    comments: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: comment_1.Comment,
        join: {
            from: 'ideas.id',
            to: 'comments.ideas_id'
        }
    }
};
exports.Idea = Idea;
//# sourceMappingURL=idea.js.map