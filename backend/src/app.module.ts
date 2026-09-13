import {Module} from '@nestjs/common';import {ConfigModule} from '@nestjs/config';import {HealthController} from './health.controller';import {ProductsModule} from './products/products.module';@Module({imports:[ConfigModule.forRoot({isGlobal:true}),ProductsModule],controllers:[HealthController]})export class AppModule{}

