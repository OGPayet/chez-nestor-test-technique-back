export interface IApartment {
  id: number;
  title: string;
  titleSlug: string;
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
  isBooked: boolean;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUser {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IToken {
  Authorization: string;
  data: IUser;
  expiresIn: string;
}

export interface IApartmentFormData {
  dateOfArrival: string | Date;
  dateOfDeparture: string | Date;
  cleaningService: boolean;
  errorMessage?: string;
  successMessage?: string;
}

export interface IBooking {
  id?: number;
  dateOfArrival: string | Date;
  dateOfDeparture: string | Date;
  cleaningService: boolean;
  userId?: number;
  apartmentId?: number;
  user?: IUser;
  apartment?: IApartment;
}
