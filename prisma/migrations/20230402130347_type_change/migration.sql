/*
  Warnings:

  - The primary key for the `Journal` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Journal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Journal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journal" ("clientId", "createdAt", "id") SELECT "clientId", "createdAt", "id" FROM "Journal";
DROP TABLE "Journal";
ALTER TABLE "new_Journal" RENAME TO "Journal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
