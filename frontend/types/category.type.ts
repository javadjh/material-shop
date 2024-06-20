export interface ICategory {
  title: string;
  isMain?: boolean;
  categoryName?: string;
  parentId?: string;
  _id?: string;
  icon?: string;
}
export interface IInsertCategory {
  title: string;
  parentId?: string;
}
