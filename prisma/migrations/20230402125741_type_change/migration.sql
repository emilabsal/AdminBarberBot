/*
  Warnings:

  - Added the required column `updatedAt` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `Journal` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Journal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Journal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journal" ("clientId", "createdAt", "id") SELECT "clientId", "createdAt", "id" FROM "Journal";
DROP TABLE "Journal";
ALTER TABLE "new_Journal" RENAME TO "Journal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
