import { Controller, Param, Put } from '@nestjs/common';
import { TemplateDTO } from './dto/templateSet.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TemplateService } from './templates.service';

@Controller('api/v1/template')
export class TemplateController {
  constructor(private readonly TemplateService: TemplateService) {}

  @Put(':token/:instanceID/:templateName')
  async setTemplate(@Param() data: TemplateDTO) {
    return this.TemplateService.setTemplate(data);
  }
}
