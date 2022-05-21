import { User } from '../entity/User';
import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';

export class ProtecRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = AppDataSource.getRepository(User)
  }

  async findUser(id: string ){
    return await this.repository.findOneOrFail({
      where: { id: parseInt(id) }
    })
  }
}