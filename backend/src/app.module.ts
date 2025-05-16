import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RecordModule } from './records/record.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lucas',
      password: 'postgres',
      database: 'teste',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      logging: ['query', 'error']
    }),
    RecordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
