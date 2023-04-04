import { Controller, Param, Get } from '@nestjs/common';
import { TemplateSetDTO } from './dto/templateSet.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TemplateService } from './templates.service';

@Controller('api/v1/template')
export class TemplateController {
  constructor(private readonly TemplateService: TemplateService) {}

  @Get(':token/:instanceID/:templateName')
  async setTemplate(@Param() data: TemplateSetDTO) {
    return this.TemplateService.setTemplate(data);
  }
  @Get('create/:templateName')
  async createTemplate(@Param('templateName') templateName: string) {
    return this.TemplateService.createTemplate(templateName);
  }
}
