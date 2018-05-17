import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';

@JsonController()
export class IdeasController{
   @Get('/ideas')
   public getAll(): string {
      return 'This is all users';
   }

   @Get('/ideas/:id')
   public getOne(@Param('id') id: number): string {
         return 'This action returns idea #' + id;
   }

   @Post('/ideas')
   public post(@Body() idea: any): string {
      return 'Saving user...';
   }

   @Put('/ideas/:id')
   public put(@Param('id') id: number, @Body() user: any) {
      return 'Updating idea...';
   }

   @Delete('/ideas/:id')
   public remove(@Param('id') id: number) {
      return 'Removing idea...';
   }
}