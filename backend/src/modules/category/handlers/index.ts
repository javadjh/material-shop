//command
import { InsertCategoryHandler } from './commands/InsertCategory.commannd';
import { UpdateCategoryHandler } from './commands/UpdateCategory.command';
import { DeleteCategoryHandler } from './commands/DeleteCategory.command';

//queries
import { GetCategoriesHandler } from './queries/GetCategories.query';
export default [
  //commands
  InsertCategoryHandler,
  UpdateCategoryHandler,
  DeleteCategoryHandler,

  //queries
  GetCategoriesHandler,
];
