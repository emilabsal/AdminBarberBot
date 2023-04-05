/*
  Warnings:

  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `priceId` on the `Service` table. All the data in the column will be lost.
  - Added the required column `price` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Price";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "service" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Service" ("id", "service") SELECT "id", "service" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientName" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "text" TEXT NOT NULL,
    "barberName" TEXT NOT NULL,
    CONSTRAINT "Review_clientName_fkey" FOREIGN KEY ("clientName") REFERENCES "Client" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_barberName_fkey" FOREIGN KEY ("barberName") REFERENCES "Barber" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("barberName", "clientName", "id", "rating", "text") SELECT "barberName", "clientName", "id", "rating", "text" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
