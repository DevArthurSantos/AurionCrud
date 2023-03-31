/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Req
} from '@nestjs/common';
import { FragmenteCreateDTO } from './dto/fragmentCreate.dto';
import { FragmenteRequestDTO } from './dto/fragmenteRequest.dto';
import { FragmenteFindDTO } from './dto/fragmentFind.dto';
import { FragmenteModifyDTO } from './dto/fragmentModify.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FragmentService } from './fragment.service';

@Controller('api/v1/fragment')
export class FragmentController {
  constructor(private readonly FragmentService: FragmentService) { }

  @Post(':token/new/:instanceName')
  async createFragment(@Req() request: Request, @Param() params: FragmenteRequestDTO) {
    const fragmentData: FragmenteCreateDTO = {
      ...params,
      data: request.body,
    }
    return this.FragmentService.createFragment(fragmentData);
  }

  @Post(':token/find/:instanceName')
  async findFragment(@Body() Body: FragmenteFindDTO, @Param() params: FragmenteRequestDTO) {
    const fragmentData: FragmenteFindDTO = {
      ...params,
      fragmentID: Body.fragmentID,
    }
    return this.FragmentService.findFragment(fragmentData);
  }

  @Put(':token/modify/:instanceName')
  async modifyFragment(@Body() Body: FragmenteModifyDTO, @Param() params: FragmenteRequestDTO) {
    const fragmentData: FragmenteModifyDTO = {
      ...params,
      fragmentID: Body.fragmentID,
      data: Body.data,
    }
    return this.FragmentService.modifyFragment(fragmentData);
  }

  @Delete(':token/erase/:instanceName')
  async eraseFragment(@Body() Body: FragmenteFindDTO, @Param() params: FragmenteRequestDTO) {
    const fragmentData: FragmenteFindDTO = {
      ...params,
      fragmentID: Body.fragmentID,
    }
    return this.FragmentService.eraseFragment(fragmentData);
  }
}
