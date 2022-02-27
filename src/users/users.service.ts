import { Injectable,Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './users.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_MODEL')
    private userModel: Model<Users>,
   
  ) {}


  async create(createUserDto: CreateUserDto): Promise<Users> {
    if (this.userModel.findOne({email: createUserDto.email})){
          // existing user
    }else {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
        createUserDto.password = hash
        const createdStock = new this.userModel(createUserDto);
        return createdStock.save();
      }
    }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return this.userModel.findOne({_id: id})
  }

  async update(id: String, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({_id: id.trim() }, updateUserDto).exec();
    
  }

  async remove(id: string) {
    //return await this.stockModel.deleteOne({id: id});
    return await this.userModel.deleteOne({ _id: id.trim() }).exec();
  }

  async login(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({email: createUserDto.email})
    if ( bcrypt.compare(createUserDto.password, user.password.toString())){

      const payload = {
        email: user.email,
        password:  user.password
      }
      return {
        
      };
        //login
    }else {
      // invalid password
    }
  }
}
