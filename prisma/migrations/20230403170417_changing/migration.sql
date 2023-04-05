/*
  Warnings:

  - The primary key for the `Barber` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `barberId` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Journal` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `barberName` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientName` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberName` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientName` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_JournalToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_JournalToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Journal" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_JournalToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Barber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL
);
INSERT INTO "new_Barber" ("id", "name", "rating", "text") SELECT "id", "name", "rating", "text" FROM "Barber";
DROP TABLE "Barber";
ALTER TABLE "new_Barber" RENAME TO "Barber";
CREATE UNIQUE INDEX "Barber_name_key" ON "Barber"("name");
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "telegram" TEXT,
    "phone" INTEGER
);
INSERT INTO "new_Client" ("id", "name", "phone", "telegram") SELECT "id", "name", "phone", "telegram" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_telegram_key" ON "Client"("telegram");
CREATE UNIQUE INDEX "Client_phone_key" ON "Client"("phone");
CREATE UNIQUE INDEX "Client_name_telegram_phone_key" ON "Client"("name", "telegram", "phone");
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "service" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    CONSTRAINT "Service_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("id", "priceId", "service") SELECT "id", "priceId", "service" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientName" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "barberName" TEXT NOT NULL,
    CONSTRAINT "Review_clientName_fkey" FOREIGN KEY ("clientName") REFERENCES "Client" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_barberName_fkey" FOREIGN KEY ("barberName") REFERENCES "Barber" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("id", "rating", "text") SELECT "id", "rating", "text" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE TABLE "new_Journal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientName" TEXT NOT NULL,
    "clientTelegram" TEXT,
    "clientPhone" INTEGER,
    "barberName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Journal_clientName_clientTelegram_clientPhone_fkey" FOREIGN KEY ("clientName", "clientTelegram", "clientPhone") REFERENCES "Client" ("name", "telegram", "phone") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Journal_barberName_fkey" FOREIGN KEY ("barberName") REFERENCES "Barber" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journal" ("createdAt", "id") SELECT "createdAt", "id" FROM "Journal";
DROP TABLE "Journal";
ALTER TABLE "new_Journal" RENAME TO "Journal";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "name", "password") SELECT "id", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_JournalToService_AB_unique" ON "_JournalToService"("A", "B");

-- CreateIndex
CREATE INDEX "_JournalToService_B_index" ON "_JournalToService"("B");
