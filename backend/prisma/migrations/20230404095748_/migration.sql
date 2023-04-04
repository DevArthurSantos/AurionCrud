/*
  Warnings:

  - You are about to alter the column `data` on the `template` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `template` MODIFY `data` JSON NOT NULL;
