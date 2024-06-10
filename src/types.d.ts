import { Model } from 'sequelize';

export interface UserModel extends Model{
  id: string;
  user: string;
  password: string;
  email: string;
}

export interface AppointmentModel extends Model{
  id: string;
  user_id: string;
  amount: number;
  status: string;
  email: string;
  date: string;
}