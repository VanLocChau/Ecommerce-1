import { ConfigModule, PrismaModule } from '@app/common'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { QueueName } from 'common/constants/queue.constant'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'

@Module({
  imports: [
    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: 'PRODUCT_SERVICE',
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            transport: Transport.RMQ,
            options: {
              urls: [configService.get<string>('rabbitmq.uri')],
              queue: QueueName.product,
              queueOptions: {
                durable: true
              }
            }
          }),
          inject: [ConfigService]
        }
      ]
    }),
    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: 'USER_SERVICE',
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            transport: Transport.RMQ,
            options: {
              urls: [configService.get<string>('rabbitmq.uri')],
              queue: QueueName.user,
              queueOptions: {
                durable: true
              }
            }
          }),
          inject: [ConfigService]
        }
      ]
    }),
    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: 'STORE_SERVICE',
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            transport: Transport.RMQ,
            options: {
              urls: [configService.get<string>('rabbitmq.uri')],
              queue: QueueName.store,
              queueOptions: {
                durable: true
              }
            }
          }),
          inject: [ConfigService]
        }
      ]
    }),
    PrismaModule,
    JwtModule
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
