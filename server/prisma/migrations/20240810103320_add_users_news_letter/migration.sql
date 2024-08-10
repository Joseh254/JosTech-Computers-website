/*
  Warnings:

  - You are about to drop the `NewsletterSubscribers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewsletterSubscribers";

-- CreateTable
CREATE TABLE "newsletterSubscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "newsletterSubscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newsletterSubscribers_email_key" ON "newsletterSubscribers"("email");
