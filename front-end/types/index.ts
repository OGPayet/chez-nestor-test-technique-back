export interface IApartment {
  title: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  address: string;
  numberOfParkingSpaces: number;
  numberOfBathrooms: number;
  numberOfBedrooms: number;
  isFeatured: boolean;
  isCondominium: boolean;
  stateOfFurniture: string;
  area: number;
  pricePerSquareMeter: number;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IUserData {
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  id: number;
  role: string;
}

export interface IToken {
  Authorization: string;
  data: IUserData;
  expiresIn: string;
}
