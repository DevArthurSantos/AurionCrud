import { Module } from '@nestjs/common';
import { CustomerController } from './modules/customer/customer.controller';
import { CustomerService } from './modules/customer/customer.service';
import { PrismaService } from './modules/database/prisma.service';
import { FragmentController } from './modules/fragment/fragment.controller';
import { FragmentService } from './modules/fragment/fragment.service';
import { InstanceController } from './modules/instance/instance.controller';
import { InstanceService } from './modules/instance/instance.service';
import { TemplateController } from './modules/templates/templates.controller';
import { TemplateService } from './modules/templates/templates.service';
import { VerificationService } from './modules/verification/verification.service';

@Module({
  imports: [],
  controllers: [
    CustomerController,
    InstanceController,
    FragmentController,
    TemplateController,
  ],
  providers: [
    PrismaService,
    VerificationService,
    CustomerService,
    InstanceService,
    FragmentService,
    TemplateService,
  ],
})
export class AppModule {}
