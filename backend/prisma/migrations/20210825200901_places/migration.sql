/*
  Warnings:

  - You are about to drop the column `facilityId` on the `place` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `place` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[placeName]` on the table `Facility` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[placeId]` on the table `Facility` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `placeId` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeName` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finishTime` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `place` DROP FOREIGN KEY `place_ibfk_1`;

-- DropIndex
DROP INDEX `Place.name_unique` ON `place`;

-- AlterTable
ALTER TABLE `facility` ADD COLUMN `placeId` INTEGER NOT NULL,
    ADD COLUMN `placeName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `place` DROP COLUMN `facilityId`,
    DROP COLUMN `name`;

-- AlterTable
ALTER TABLE `visit` ADD COLUMN `description` VARCHAR(500) NOT NULL,
    ADD COLUMN `finishTime` DATETIME(3) NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `visitor` MODIFY `justification` VARCHAR(500);

-- CreateIndex
CREATE UNIQUE INDEX `Facility.placeName_unique` ON `Facility`(`placeName`);

-- CreateIndex
CREATE UNIQUE INDEX `Facility_placeId_unique` ON `Facility`(`placeId`);

-- AddForeignKey
ALTER TABLE `Facility` ADD FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
