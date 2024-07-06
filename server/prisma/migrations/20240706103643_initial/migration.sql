-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email_aadress" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_email_aadress_key" ON "Product"("email_aadress");
