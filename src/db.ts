import dotenv from 'dotenv';
import { DataTypes, Sequelize } from 'sequelize';
import { AppointmentModel, UserModel } from './types';

dotenv.config()

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }
  
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
        require: true,
        rejectUnauthorized: false,
        },
    },
});

export const User = sequelize.define<UserModel>('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  user: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
  timestamps: false,
});

export const Appointment = sequelize.define<AppointmentModel>('Appointment', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  user_id: DataTypes.STRING,
  amount: DataTypes.INTEGER,
  status: DataTypes.STRING,
  email: DataTypes.STRING,
  date: DataTypes.STRING,
}, {
  timestamps: false,
});

sequelize.sync();