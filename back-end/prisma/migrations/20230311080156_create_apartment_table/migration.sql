-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "numberOfParkingSpaces" INTEGER NOT NULL,
    "numberOfBathrooms" INTEGER NOT NULL,
    "numberOfBedrooms" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "pricePerSquareMeter" INTEGER NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);
