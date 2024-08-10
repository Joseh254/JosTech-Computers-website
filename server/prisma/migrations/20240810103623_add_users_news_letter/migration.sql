/*
  Warnings:

  - You are about to drop the `newsletterSubscribers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "newsletterSubscribers";

-- CreateTable
CREATE TABLE "newslettersubscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "newslettersubscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newslettersubscribers_email_key" ON "newslettersubscribers"("email");
