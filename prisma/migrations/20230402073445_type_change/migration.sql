/*
  Warnings:

  - Added the required column `name` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Journal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    CONSTRAINT "Journal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journal" ("clientId", "id") SELECT "clientId", "id" FROM "Journal";
DROP TABLE "Journal";
ALTER TABLE "new_Journal" RENAME TO "Journal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
