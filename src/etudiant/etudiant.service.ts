import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EtudiantService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEtudiantDto: Prisma.EtudiantCreateInput) {
    return this.databaseService.etudiant.create({ data: createEtudiantDto });
  }

  async findAll() {
    return this.databaseService.etudiant.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.etudiant.findUnique({ where: { id: id } });
  }

  async update(id: number, updateEtudiantDto: Prisma.EtudiantUpdateInput) {
    return this.databaseService.etudiant.update({
      where: { id: id },
      data: updateEtudiantDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.etudiant.delete({ where: { id: id } });
  }
}
