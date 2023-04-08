/*
  Warnings:

  - You are about to drop the column `clientName` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `clientPhone` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `clientTelegram` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `barberName` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `clientName` on the `Review` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Barber_name_key";

-- DropIndex
DROP INDEX "Client_name_key";

-- DropIndex
DROP INDEX "Client_name_telegram_phone_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Journal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    CONSTRAINT "Journal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Journal_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journal" ("barberId", "id", "time") SELECT "barberId", "id", "time" FROM "Journal";
DROP TABLE "Journal";
ALTER TABLE "new_Journal" RENAME TO "Journal";
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "text" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    CONSTRAINT "Review_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("id", "rating", "text") SELECT "id", "rating", "text" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
