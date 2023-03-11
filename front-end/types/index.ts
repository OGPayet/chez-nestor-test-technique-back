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
}

export interface ILoginFormData {
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
  dateOfArrival: string;
  dateOfDeparture: string;
  cleaningService: boolean;
  errorMessage?: string;
  successMessage?: string;
}

export interface IBooking {
  id?: number;
  dateOfArrival: string;
  dateOfDeparture: string;
  cleaningService: boolean;
  userId: number;
  apartmentId: number;
  user?: IUser;
  apartment?: IApartment;
}
