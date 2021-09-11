import {Role} from './role';

export interface Visitor {
  firstName: string;
  lastName: string;
  email: string;
  userPhone: string;
  address: string;
  role: string;
  createdAtt: Date;
}
