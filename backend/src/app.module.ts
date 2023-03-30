import { Module } from '@nestjs/common';
import { CustomerController } from './modules/customer/customer.controller';
import { CustomerService } from './modules/customer/customer.service';
import { PrismaService } from './modules/database/prisma.service';
import { InstanceController } from './modules/instance/instance.controller';
import { InstanceService } from './modules/instance/instance.service';
import { VerificationService } from './modules/verification/verification.service';

@Module({
  imports: [],
  controllers: [CustomerController, InstanceController],
  providers: [
    PrismaService,
    VerificationService,
    CustomerService,
    InstanceService,
  ],
})
export class AppModule {}
