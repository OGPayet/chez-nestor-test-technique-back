export interface IApartment {
  title: string;
  imageSrc: string;
  price: number;
  address: string;
  numberOfParkingSpaces: number;
  numberOfBathrooms: number;
  numberOfBedrooms: number;
  isFeatured?: boolean;
  isCondominium?: boolean;
  stateOfFurniture?: string;
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

export interface IDashboardFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zipcode: string;
}
