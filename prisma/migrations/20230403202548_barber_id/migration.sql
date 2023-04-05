/*
  Warnings:

  - You are about to drop the column `barberName` on the `Journal` table. All the data in the column will be lost.
  - Added the required column `barberId` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Journal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientName" TEXT NOT NULL,
    "clientTelegram" TEXT,
    "clientPhone" INTEGER,
    "barberId" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Journal_clientName_clientTelegram_clientPhone_fkey" FOREIGN KEY ("clientName", "clientTelegram", "clientPhone") REFERENCES "Client" ("name", "telegram", "phone") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Journal_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journal" ("clientName", "clientPhone", "clientTelegram", "createdAt", "id") SELECT "clientName", "clientPhone", "clientTelegram", "createdAt", "id" FROM "Journal";
DROP TABLE "Journal";
ALTER TABLE "new_Journal" RENAME TO "Journal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
