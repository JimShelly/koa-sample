import { Context } from 'koa';

export const Ideas = {
      async get(ctx: Context) {
            ctx.body = {
                  status: 'success',
                  message: 'This is all users'
            };
      },

      async getOne(ctx: Context) {
         return 'This action returns idea #' + ctx.params.id;
      },

      async post(ctx: Context) {
            return 'Saving user...';
      },

      async put(ctx: Context) {
            return 'Updating idea...';
      },

      async remove() {
            return 'Removing idea...';
      }
}