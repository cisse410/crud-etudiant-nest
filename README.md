<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# CRUD Étudiant avec NestJS et Prisma

Ce projet est une application de gestion d'étudiants (CRUD) construite avec [NestJS](https://nestjs.com/) et Prisma ORM.

## Technologies utilisées

- [NestJS](https://nestjs.com/) - Framework Node.js moderne et progressif
- [Prisma](https://www.prisma.io/) - ORM moderne pour Node.js et TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle
- TypeScript - Langage de programmation typé

## Fonctionnalités

- Gestion complète des étudiants (CRUD)
- Validation des données
- Base de données PostgreSQL avec Prisma
- API RESTful

## Structure du modèle de données

Le modèle `Etudiant` comprend les champs suivants :

```prisma
model Etudiant {
  id          Int      @id @default(autoincrement())
  name        String
  username    String   @unique
  email       String   @unique
  ine         String   @unique
  phone       String
  filiere     String
  departement String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Installation

1. Cloner le projet :
```bash
git clone [url-du-projet]
cd crud-etudiant-nest
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement :
   - Créer un fichier `.env` à la racine du projet
   - Ajouter votre chaîne de connexion PostgreSQL :
```env
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
```

4. Appliquer les migrations Prisma :
```bash
npx prisma migrate dev
```

## Démarrage de l'application

```bash
# Mode développement
npm run start:dev

# Mode production
npm run start:prod
```

## Tests

```bash
# Tests unitaires
npm run test

# Tests end-to-end
npm run test:e2e

# Couverture des tests
npm run test:cov
```

## Structure du projet

```
src/
├── database/          # Configuration de la base de données
├── etudiant/         # Module de gestion des étudiants
│   ├── etudiant.controller.ts
│   ├── etudiant.module.ts
│   └── etudiant.service.ts
├── app.module.ts     # Module principal
└── main.ts          # Point d'entrée de l'application
```

## API Endpoints

- `GET /etudiant` - Récupérer tous les étudiants
- `GET /etudiant/:id` - Récupérer un étudiant par son ID
- `POST /etudiant` - Créer un nouvel étudiant
- `PUT /etudiant/:id` - Mettre à jour un étudiant
- `DELETE /etudiant/:id` - Supprimer un étudiant

## Licence

Ce projet est sous licence MIT.
