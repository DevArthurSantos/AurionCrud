import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
const line1 =
  'A URL da API possui 4 partes distintas: a propia `URL` da api, as opçãos de endpoints `["customer", "instance", "fragment"]`, o `token` recebido na plataforma e a `instancia` desejada.<br/><br/>';
const line2 =
  'A cada operação realizada pelo o usuario sera adicionado `+1` request ao seu total de requests.<br/><br/>';
const line3 =
  'com `125` requests você atingirar seu limite porem a cada `12h` todas as suas instancias e seus limites serão zerados.<br/><br/>';
const line4 =
  'Ex.: `https://aurioncrud.vercel.app/api/v1/{token}/{endpoint}/{instance}`';
const descriptionText = [line1, line2, line3, line4];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('AurionCrud Docs')
    .setDescription(descriptionText.join(''))
    .setVersion('v1')
    .addTag('customer')
    .addTag('instance')
    .addTag('fragment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);

  await app.listen(3000);
}
bootstrap();
