-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'FACILITY');

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "first_access" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "building" VARCHAR(255),
    "customer_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "number_of_employees" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guests" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "justification" VARCHAR(500),
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "visit_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visits" (
    "id" SERIAL NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "place_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "finish_time" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" VARCHAR(500) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts.email_unique" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_unique" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "guests_email_unique" ON "guests"("email");

-- AddForeignKey
ALTER TABLE "places" ADD FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD FOREIGN KEY ("email") REFERENCES "accounts"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guests" ADD FOREIGN KEY ("email") REFERENCES "accounts"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guests" ADD FOREIGN KEY ("visit_id") REFERENCES "visits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visits" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
