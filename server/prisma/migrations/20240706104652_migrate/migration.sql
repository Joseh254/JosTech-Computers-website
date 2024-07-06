-- CreateTable
CREATE TABLE "user_messages" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "Phone_number" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "user_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_messages_email_key" ON "user_messages"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_messages_Phone_number_key" ON "user_messages"("Phone_number");
