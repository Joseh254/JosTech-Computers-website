-- CreateTable
CREATE TABLE "jostech_users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jostech_users_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" INTEGER NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productsRemaining" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motherboards" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" INTEGER NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,

    CONSTRAINT "motherboards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "desktops" (
    "id" TEXT NOT NULL,
    "desktopName" TEXT NOT NULL,
    "desktopPrice" INTEGER NOT NULL,
    "desktopDescription" TEXT NOT NULL,
    "desktopImage" TEXT NOT NULL,

    CONSTRAINT "desktops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "productid" TEXT NOT NULL,
    "creaeAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jostech_users_email_key" ON "jostech_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_messages_email_key" ON "user_messages"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_messages_Phone_number_key" ON "user_messages"("Phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "desktops_desktopName_key" ON "desktops"("desktopName");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userid_fkey" FOREIGN KEY ("userid") REFERENCES "jostech_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
