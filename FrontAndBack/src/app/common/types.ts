import { Observable } from 'rxjs';

// use-case
export interface IUseCase<K, T> {
  execute: (args: K) => Observable<T>;
}

// model
export interface IProduct {
  id?: number;
  name: string;
  price: number;
  count: number;
  category?: string;
  img?: string;
  discount?: number;
}
export interface IAdvertisment {
  id?: number;
  title: string;
  text: string;
  img?: string;
}
export interface ICategory {
  id?: number;
  name: string;
  img?: string;
}

// authorization
export interface IUserRegisterDto {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
}
export interface IUserLoginDto {
  email: string;
  password: string;
}
export interface IUserGetDto {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}


export interface IFilterOptions {
  title: string;
  options: {label: string, value: boolean}[]
}
