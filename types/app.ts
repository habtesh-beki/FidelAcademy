import { UserI } from "../Entites/userIntity";

export interface ServerSeccussResponse<T> {
  status: string;
  data: T;
}
