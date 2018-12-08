import { IEmployee } from 'app/shared/model//employee.model';

export interface IManager {
  id?: number;
  managerId?: number;
  managerName?: string;
  managerAddress?: string;
  employee?: IEmployee;
}

export const defaultValue: Readonly<IManager> = {};
