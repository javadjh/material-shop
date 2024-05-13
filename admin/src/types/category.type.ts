export interface ICategory {
  title?: string;
  isMain?: boolean;
  parentId?: string;
  _id?: string;
}
export interface IInsertCategory {
  title: string;
  parentId?: string;
}
