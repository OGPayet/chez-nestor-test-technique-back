<template>
  <Apartment
    :title="apartment.title"
    :imageSrc="apartment.imageSrc"
    :imageAlt="apartment.imageAlt"
    :price="apartment.price"
    :address="apartment.address"
    :numberOfParkingSpaces="apartment.numberOfParkingSpaces"
    :numberOfBathrooms="apartment.numberOfBathrooms"
    :numberOfBedrooms="apartment.numberOfBedrooms"
    :isFeatured="apartment.isFeatured"
    :isCondominium="apartment.isCondominium"
    :stateOfFurniture="apartment.stateOfFurniture"
    :area="apartment.area"
    :pricePerSquareMeter="apartment.pricePerSquareMeter"
  ></Apartment>
  <Form></Form>
</template>