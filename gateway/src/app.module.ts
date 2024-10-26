import { Module } from '@nestjs/common';
import { CategoryModule, LocalizationModule, ProductModule, UserModule } from '@modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CategoryModule, ProductModule, UserModule, LocalizationModule,
    MongooseModule.forRoot('mongodb://localhost:27017/microservice')
  ],
})
export class AppModule { }
