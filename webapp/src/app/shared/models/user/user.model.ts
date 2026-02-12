import {BaseEntity, IBaseEntity} from '../../../root/base-entity';
import {FileApp} from '../file/file-app-model';
import {Role} from '../role/role.enum';

export interface IUser extends IBaseEntity {
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  files?: FileApp[];
  authorities?: string[];
}

export class User extends BaseEntity implements IUser {
  public name?: string;
  public email?: string;
  public password?: string;
  public role?: Role;
  public files?: FileApp[];
  public authorities?: string[];
}
