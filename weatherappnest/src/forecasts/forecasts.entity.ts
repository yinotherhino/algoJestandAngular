import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class ForecastsTable extends Model {
    @Column({ allowNull: false, type: DataType.STRING, unique: true, primaryKey: true })
    id: string;
    @Column({ allowNull: false, type: DataType.STRING })
    date: string;
    @Column({ allowNull: false })
    temperatureC: number;
    @Column({ allowNull: false })
    temperatureF: number;
    @Column({ allowNull: false })
    summary: string;
    @Column({ allowNull: false })
    city: string;
    @Column({ allowNull: false })
    sunrise: string;
    @Column({ allowNull: false })
    sunset: string;
    @Column({ allowNull: false })
    rainChance: number;
}