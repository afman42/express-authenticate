import { User } from '../entity/User';
import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { IAuth } from '../interface';
import bcrypt from 'bcrypt'
import { UserRegisterDto } from '../dto/auth.dto';

export class AuthRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = AppDataSource.getRepository(User)
  }

  async add(data: UserRegisterDto): Promise<User>{
    const user = new User()
    user.email = data.email;
    user.password = await bcrypt.hash(data.password,10) ;
    return await this.repository.save(user);
  }

  async checkEmail(email: string): Promise<User>{
    return await this.repository.findOne({
      where: { email }
    });
  }

  async checkPassword(password: string, hashPassword: string): Promise<Boolean>{
    return await bcrypt.compare(password,hashPassword);
  }

  async find(){
    return await this.repository.find()
  }
}