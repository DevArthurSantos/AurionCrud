/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from '../verification/verification.service';
import { TemplateDTO } from './dto/templateSet.dto';
import models from "./models/index"

@Injectable()
export class TemplateService {
  constructor(
    private Prisma: PrismaService,
    private Verification: VerificationService,
  ) { }

  async setTemplate({ instanceID, templateName, token }: TemplateDTO) {
    await this.Verification.requestsVerification(token)
    const instance = await this.Verification.InstanceVerificationForID({
      token,
      instanceID,
    });

   
    
    models[templateName].forEach( async template => {
      await this.Prisma.instanceFragments.create({
        data: {
          fragment: {
            create: {
              data: Buffer.from(JSON.stringify(template))
            },
          },
          instance: {
            connect: {
              id: instanceID
            }
          }
        },
      })
    })
    return;
  }
}
