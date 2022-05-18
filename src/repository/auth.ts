import { User } from '../entity/User';
import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { IAuth } from '../interface';
import bcrypt from 'bcrypt'

export class AuthRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = AppDataSource.getRepository(User)
  }

  async add({ email, password }: IAuth){
    const user = new User()
    user.email = email;
    user.password = await bcrypt.hash(password,10) ;
    return await this.repository.save(user);
  }

  async checkEmail(email: string){
    return await this.repository.findOneByOrFail({
      email
    });
  }

  async checkPassword(password: string){
    const pass = await this.repository.findOneByOrFail({ password });
    // if (pass ) {
      
    // }
  }

  async find(){
    return await this.repository.find()
  }
}