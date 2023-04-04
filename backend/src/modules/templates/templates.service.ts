/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from '../verification/verification.service';
import { TemplateSetDTO } from './dto/templateSet.dto';
import models from "./models/index"



@Injectable()
export class TemplateService {
  constructor(
    private Prisma: PrismaService,
    private Verification: VerificationService,
  ) { }

  async setTemplate({ instanceID, templateName, token }: TemplateSetDTO) {
    await this.Verification.requestsVerification(token)
    await this.Verification.InstanceVerificationForID({
      token,
      instanceID,
    });



    const { data, type } = await this.Prisma.template.findFirst({
      where: {
        type: templateName
      }
    })

    const template = {
      template: {
        type,
        data: JSON.parse(data.toString('utf8'))
      }
    }

    template.template.data.forEach(async template => {
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

    return
  }

  async createTemplate(templateName: string) {


    const newTemplte = await this.Prisma.template.create({
      data: {
        type: templateName,
        data: Buffer.from(JSON.stringify(models[templateName])),
      }
    })

    return {
      id: newTemplte.id,
      type: templateName,
      data: JSON.parse(newTemplte.data.toString('utf8'))
    }
  }
}
