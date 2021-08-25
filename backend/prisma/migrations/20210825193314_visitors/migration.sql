/*
  Warnings:

  - You are about to drop the `__uservisits` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lead` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `__uservisits` DROP FOREIGN KEY `__uservisits_ibfk_1`;

-- DropForeignKey
ALTER TABLE `__uservisits` DROP FOREIGN KEY `__uservisits_ibfk_2`;

-- AlterTable
ALTER TABLE `customer` ADD COLUMN `lead` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `__uservisits`;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Visitor` (
    `email` VARCHAR(191) NOT NULL,
    `accepted` BOOLEAN NOT NULL DEFAULT false,
    `justification` VARCHAR(191),
    `visitId` INTEGER NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin` ADD FOREIGN KEY (`id`) REFERENCES `Account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Visitor` ADD FOREIGN KEY (`visitId`) REFERENCES `Visit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
