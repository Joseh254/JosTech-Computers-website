/*
  Warnings:

  - You are about to drop the column `email_aadress` on the `jostech_users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email_address]` on the table `jostech_users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email_address` to the `jostech_users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "jostech_users_email_aadress_key";

-- AlterTable
ALTER TABLE "jostech_users" DROP COLUMN "email_aadress",
ADD COLUMN     "email_address" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "jostech_users_email_address_key" ON "jostech_users"("email_address");
