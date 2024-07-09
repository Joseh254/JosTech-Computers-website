-- CreateTable
CREATE TABLE "jostech_users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,
    "password" TEXT NOT NULL,

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
    "productPrice" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motherboars" (
    "id" TEXT NOT NULL,
    "motherboardName" TEXT NOT NULL,
    "motherboardPrice" TEXT NOT NULL,
    "motherboardDescription" TEXT NOT NULL,
    "motherboardImage" TEXT NOT NULL,

    CONSTRAINT "motherboars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "desktops" (
    "id" TEXT NOT NULL,
    "desktopName" TEXT NOT NULL,
    "desktopPrice" TEXT NOT NULL,
    "desktopDescription" TEXT NOT NULL,
    "desktopImage" TEXT NOT NULL,

    CONSTRAINT "desktops_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jostech_users_email_address_key" ON "jostech_users"("email_address");

-- CreateIndex
CREATE UNIQUE INDEX "user_messages_email_key" ON "user_messages"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_messages_Phone_number_key" ON "user_messages"("Phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "products_productName_key" ON "products"("productName");

-- CreateIndex
CREATE UNIQUE INDEX "motherboars_motherboardName_key" ON "motherboars"("motherboardName");

-- CreateIndex
CREATE UNIQUE INDEX "desktops_desktopName_key" ON "desktops"("desktopName");
