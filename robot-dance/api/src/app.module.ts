import { Module } from '@nestjs/common';
import {RobotsModule} from "./robots/robots.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(), RobotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
