import { Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Role } from "../roles.entity";
import { User } from "src/user/user.entity";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    value: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}