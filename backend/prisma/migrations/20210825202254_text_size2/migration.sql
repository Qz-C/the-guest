/*
  Warnings:

  - The primary key for the `visitor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `place` MODIFY `street` VARCHAR(255) NOT NULL,
    MODIFY `building` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `visit` MODIFY `description` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `visitor` DROP PRIMARY KEY,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `justification` VARCHAR(500),
    ADD PRIMARY KEY (`email`);
