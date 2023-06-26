import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(MessagesModule);
  await app.listen(3000);
}
bootstrap();
