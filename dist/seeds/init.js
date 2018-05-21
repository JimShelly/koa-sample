"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('ideas').del();
        knex('ideas').insert([
            { creator: 'Ali', idea: 'A To Do List app!' },
            { creator: 'Ali', idea: 'A Blog!' },
            { creator: 'Ali', idea: 'A calculator' }
        ]);
    });
};
//# sourceMappingURL=init.js.map