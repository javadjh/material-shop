export interface ICategory {
  title?: string;
  isMain?: boolean;
  parentId?: string;
  _id?: string;
  icon?: string;
}
export interface IInsertCategory {
  title: string;
  icon: string;
  index: number;
  parentId?: string;
}
