import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { TransformInterceptor } from './app.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.setGlobalPrefix('v1');
  app.useGlobalInterceptors(new TransformInterceptor());
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
