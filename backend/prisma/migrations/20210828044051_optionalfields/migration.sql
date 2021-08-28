/*
  Warnings:

  - You are about to drop the column `placeId` on the `facility` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[facilityId]` on the table `Place` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `facilityId` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `facility` DROP FOREIGN KEY `facility_ibfk_3`;

-- AlterTable
ALTER TABLE `facility` DROP COLUMN `placeId`;

-- AlterTable
ALTER TABLE `place` ADD COLUMN `facilityId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Place_facilityId_unique` ON `Place`(`facilityId`);

-- AddForeignKey
ALTER TABLE `Place` ADD FOREIGN KEY (`facilityId`) REFERENCES `Facility`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
