-- CreateTable
CREATE TABLE "NewsletterSubscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsletterSubscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscribers_email_key" ON "NewsletterSubscribers"("email");
