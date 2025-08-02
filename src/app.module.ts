import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { AuthModule } from './modules/auth/auth.module';
import { EtudiantModule } from './modules/etudiant/etudiant.module';

@Module({
  imports: [DatabaseModule, EtudiantModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
