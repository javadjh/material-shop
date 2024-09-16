export interface ILoginUser {
  phone: string;
}
export interface IUser {
  email?: string;
  _id?: string;
  firstName?: string;
  lastName?: string;
  melliCode?: string;
  city?: any;
  province?: any;
  address?: string;
  phone?: string;
  postalCode?: string;
  companyName?: string;
  isAdmin?: boolean;
  isCompleted?: boolean;
  lastChatDate?: string;
  createdAt?: string;
  updatedAt?: string;
}
