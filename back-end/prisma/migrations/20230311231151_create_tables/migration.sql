-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "titleSlug" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "numberOfParkingSpaces" INTEGER NOT NULL,
    "numberOfBathrooms" INTEGER NOT NULL,
    "numberOfBedrooms" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "pricePerSquareMeter" INTEGER NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "apartmentId" INTEGER NOT NULL,
    "dateOfArrival" TIMESTAMP(3) NOT NULL,
    "dateOfDeparture" TIMESTAMP(3) NOT NULL,
    "cleaningService" BOOLEAN NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
