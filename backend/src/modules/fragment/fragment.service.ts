/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from '../verification/verification.service';
import { FragmenteCreateDTO } from './dto/fragmentCreate.dto';
import { FragmenteFindDTO } from './dto/fragmentFind.dto';
import { FragmenteModifyDTO } from './dto/fragmentModify.dto';
import { FragmentToLinkTheInstanceDTO } from './dto/fragmentToLinkTheInstance.dto';

@Injectable()
export class FragmentService {
  constructor(
    private Prisma: PrismaService,
    private Verification: VerificationService,
  ) { }

  async createFragment(fragment: FragmenteCreateDTO) {

    console.log(fragment)
    const intance: FragmentToLinkTheInstanceDTO = await this.Verification.InstanceVerification(fragment, { BadRequest: true, ExistsOrNoExist: 'not-existing' });

    const newFragment = await this.Prisma.instanceFragments.create({
      data: {
        fragment: {
          create: {
            data: JSON.stringify(fragment.data)
          },
        },
        instance: {
          connect: {
            id: intance.id
          }
        }
      },
    })

    return { fragmentID: newFragment.fragment_id };
  }

  async findFragment(fragment: FragmenteFindDTO) {

    await this.Verification.InstanceVerification(fragment, { BadRequest: true, ExistsOrNoExist: 'not-existing' });

    const findFragment = await this.Prisma.fragment.findFirst({
      where: {
        id: fragment.fragmentID
      }
    })

    return {
      id: findFragment.id,
      data: JSON.parse(findFragment.data),
    }
  }
  async eraseFragment(fragment: FragmenteFindDTO) {

    await this.Verification.FragmentVerification(fragment, {BadRequest: true})

    await this.Prisma.fragment.delete({
      where: {
        id: fragment.fragmentID
      }
    })
    
    return;
  }
  async modifyFragment(fragment: FragmenteModifyDTO) {

    await this.Verification.FragmentVerification(fragment, {BadRequest: true})

    const newFragment = await this.Prisma.fragment.update({
      where: {
        id: fragment.fragmentID
      },
      data: {
        data: JSON.stringify(fragment.data)
      }
    })
    
    return newFragment;
  }
}
