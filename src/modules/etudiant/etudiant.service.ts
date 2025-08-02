import { Injectable } from '@nestjs/common';
import { Etudiant, Prisma } from 'generated/prisma';
import { EtudiantRepository } from './etudiant.repository';

@Injectable()
export class EtudiantService {
  constructor(private readonly etudiantRepository: EtudiantRepository) {}
  async create(
    createEtudiantDto: Prisma.EtudiantCreateInput,
  ): Promise<Etudiant> {
    return this.etudiantRepository.create(createEtudiantDto);
  }

  async findAll(): Promise<Etudiant[]> {
    return await this.etudiantRepository.findAll();
  }

  async findOne(id: number) {
    return this.etudiantRepository.findOne(id);
  }

  async update(id: number, updateEtudiantDto: Prisma.EtudiantUpdateInput) {
    return this.etudiantRepository.update(id, updateEtudiantDto);
  }

  async remove(id: number): Promise<void> {
    await this.etudiantRepository.remove(id);
  }
}
