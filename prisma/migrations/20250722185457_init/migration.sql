-- CreateTable
CREATE TABLE "Etudiant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ine" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "filiere" TEXT NOT NULL,
    "departement" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Etudiant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_username_key" ON "Etudiant"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_email_key" ON "Etudiant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_ine_key" ON "Etudiant"("ine");
