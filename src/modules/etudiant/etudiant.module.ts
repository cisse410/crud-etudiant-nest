import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EtudiantController } from './etudiant.controller';
import { EtudiantService } from './etudiant.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EtudiantController],
  providers: [EtudiantService],
})
export class EtudiantModule {}
