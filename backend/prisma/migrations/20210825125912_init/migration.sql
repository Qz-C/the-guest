/*
  Warnings:

  - You are about to drop the `_usertovisit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_usertovisit` DROP FOREIGN KEY `_usertovisit_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_usertovisit` DROP FOREIGN KEY `_usertovisit_ibfk_2`;

-- DropTable
DROP TABLE `_usertovisit`;

-- CreateTable
CREATE TABLE `__uservisits` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `__uservisits_AB_unique`(`A`, `B`),
    INDEX `__uservisits_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `__uservisits` ADD FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `__uservisits` ADD FOREIGN KEY (`B`) REFERENCES `Visit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
