/*
  Warnings:

  - You are about to drop the `instance_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "instance_items";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "item";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "fragment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "instance_fragments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instance_id" TEXT NOT NULL,
    "fragment_id" TEXT NOT NULL,
    CONSTRAINT "instance_fragments_instance_id_fkey" FOREIGN KEY ("instance_id") REFERENCES "instance" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "instance_fragments_fragment_id_fkey" FOREIGN KEY ("fragment_id") REFERENCES "fragment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
