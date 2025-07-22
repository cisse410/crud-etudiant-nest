import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EtudiantModule } from './etudiant/etudiant.module';

@Module({
  imports: [DatabaseModule, EtudiantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
