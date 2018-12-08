import { IManager } from 'app/shared/model//manager.model';

export interface IEmployee {
  id?: number;
  empoloyeeId?: number;
  empoloyeeName?: string;
  managerIds?: IManager[];
}

export const defaultValue: Readonly<IEmployee> = {};
