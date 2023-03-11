import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.apartment.createMany({
    data: [
      {
        title: 'Git-le-Coeur',
        titleSlug: 'git-le-coeur',
        address: '15 Rue Git-le-Coeur',
        imageSrc: '/images/apartments/apartment-1.jpg',
        price: 100,
        numberOfParkingSpaces: 1,
        numberOfBathrooms: 1,
        numberOfBedrooms: 1,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'La Madeleine',
        titleSlug: 'la-madeleine',
        address: '33 Place de la Madeleine',
        imageSrc: '/images/apartments/apartment-2.jpg',
        price: 200,
        numberOfParkingSpaces: 2,
        numberOfBathrooms: 2,
        numberOfBedrooms: 2,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'General Leclerc',
        titleSlug: 'general-leclerc',
        address: '4 Avenue du General Leclerc',
        imageSrc: '/images/apartments/apartment-3.jpg',
        price: 300,
        numberOfParkingSpaces: 3,
        numberOfBathrooms: 3,
        numberOfBedrooms: 3,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'Boulevard de Picpus',
        titleSlug: 'boulevard-de-picpus',
        address: '50 Boulevard de Picpus',
        imageSrc: '/images/apartments/apartment-4.jpg',
        price: 400,
        numberOfParkingSpaces: 4,
        numberOfBathrooms: 4,
        numberOfBedrooms: 4,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'Boulevard Saint-Germain',
        titleSlug: 'boulevard-saint-germain',
        address: '52 Boulevard Saint-Germain',
        imageSrc: '/images/apartments/apartment-5.jpg',
        price: 500,
        numberOfParkingSpaces: 5,
        numberOfBathrooms: 5,
        numberOfBedrooms: 5,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'Avenue Corentin Cariou',
        titleSlug: 'avenue-corentin-cariou',
        address: '33 Avenue Corentin Cariou',
        imageSrc: '/images/apartments/apartment-6.jpg',
        price: 600,
        numberOfParkingSpaces: 6,
        numberOfBathrooms: 6,
        numberOfBedrooms: 6,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'Rue Thorel',
        titleSlug: 'rue-thorel',
        address: '16 Rue Thorel',
        imageSrc: '/images/apartments/apartment-7.jpg',
        price: 700,
        numberOfParkingSpaces: 7,
        numberOfBathrooms: 7,
        numberOfBedrooms: 7,
        area: 50,
        pricePerSquareMeter: 50,
      },
      {
        title: 'Rue des Petits Hotels',
        titleSlug: 'rue-des-petits-hotels',
        address: '5 Rue des Petits Hotels',
        imageSrc: '/images/apartments/apartment-8.jpg',
        price: 800,
        numberOfParkingSpaces: 8,
        numberOfBathrooms: 8,
        numberOfBedrooms: 8,
        area: 50,
        pricePerSquareMeter: 50,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
