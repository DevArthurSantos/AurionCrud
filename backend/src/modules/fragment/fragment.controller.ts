import {
  Controller,
  Post,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Body,
  Put,
  Delete,
  Param,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FragmenteCreateDTO } from './dto/fragmentCreate.dto';
import { FragmenteRequestDTO } from './dto/fragmenteRequest.dto';
import { FragmenteFindDTO } from './dto/fragmentFind.dto';
import { FragmenteModifyDTO } from './dto/fragmentModify.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FragmentService } from './fragment.service';

@ApiTags('fragment')
@Controller('api/v1/fragment')
export class FragmentController {
  constructor(private readonly FragmentService: FragmentService) {}

  @Post(':token/new/:instanceName')
  @ApiOperation({ summary: 'Utilizado para criar um fragmento' })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiParam({
    name: 'Data',
    example: '{ "Nome": "Arthur", "Idade": 22, "Pais": "Brasil" }',
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  })
  async createFragment(
    @Req() request: any,
    @Param() params: FragmenteRequestDTO,
  ) {
    const fragmentData: FragmenteCreateDTO = {
      ...params,
      data: request.body,
    };
    return this.FragmentService.createFragment(fragmentData);
  }

  @ApiOperation({ summary: 'Utilizado para busca um fragmento' })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiParam({
    name: 'fragmentID',
    example: '04974bc8-34c0-4e8c-a7b2-8104b134fafd',
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        data: { type: 'object' },
      },
    },
  })
  @Post(':token/find/:instanceName')
  async findFragment(
    @Body() Body: FragmenteFindDTO,
    @Param() params: FragmenteRequestDTO,
  ) {
    const fragmentData: FragmenteFindDTO = {
      ...params,
      fragmentID: Body.fragmentID,
    };
    return this.FragmentService.findFragment(fragmentData);
  }

  @ApiOperation({ summary: 'Utilizado para modificar um fragmento' })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiParam({
    name: 'fragmentID',
    example: '04974bc8-34c0-4e8c-a7b2-8104b134fafd',
  })
  @ApiParam({
    name: 'data',
    example: {
      Nome: 'Arthur',
      Idade: 22,
      Pais: 'Brasil',
    },
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        data: { type: 'object' },
      },
    },
  })
  @Put(':token/modify/:instanceName')
  async modifyFragment(
    @Body() Body: FragmenteModifyDTO,
    @Param() params: FragmenteRequestDTO,
  ) {
    const fragmentData: FragmenteModifyDTO = {
      ...params,
      fragmentID: Body.fragmentID,
      data: Body.data,
    };
    return this.FragmentService.modifyFragment(fragmentData);
  }

  @ApiOperation({ summary: 'Utilizado para apagar um fragmento' })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiParam({
    name: 'fragmentID',
    example: '04974bc8-34c0-4e8c-a7b2-8104b134fafd',
  })
  @ApiResponse({
    status: 200,
  })
  @Delete(':token/erase/:instanceName')
  async eraseFragment(
    @Body() Body: FragmenteFindDTO,
    @Param() params: FragmenteRequestDTO,
  ) {
    const fragmentData: FragmenteFindDTO = {
      ...params,
      fragmentID: Body.fragmentID,
    };
    return this.FragmentService.eraseFragment(fragmentData);
  }
}
