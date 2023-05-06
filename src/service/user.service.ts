import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { generateToken } from '../utils/token';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getAll() {
    const allUsers = await this.userModel.find({});
    return allUsers;
  }

  public login() {
    return generateToken()
  }
}
