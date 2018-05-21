"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ideas = {
    get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = {
                status: 'success',
                message: 'This is all users'
            };
        });
    },
    getOne(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'This action returns idea #' + ctx.params.id;
        });
    },
    post(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Saving user...';
        });
    },
    put(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Updating idea...';
        });
    },
    remove() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Removing idea...';
        });
    }
};
//# sourceMappingURL=ideas-controller.js.map