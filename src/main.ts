import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './app.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.useGlobalInterceptors(new TransformInterceptor());
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
