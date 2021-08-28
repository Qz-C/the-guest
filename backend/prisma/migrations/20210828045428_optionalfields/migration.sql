/*
  Warnings:

  - You are about to drop the column `facilityId` on the `place` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[placeId]` on the table `Facility` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `place` DROP FOREIGN KEY `place_ibfk_1`;

-- AlterTable
ALTER TABLE `facility` ADD COLUMN `placeId` INTEGER,
    MODIFY `customerId` INTEGER;

-- AlterTable
ALTER TABLE `place` DROP COLUMN `facilityId`;

-- CreateIndex
CREATE UNIQUE INDEX `Facility_placeId_unique` ON `Facility`(`placeId`);

-- AddForeignKey
ALTER TABLE `Facility` ADD FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
