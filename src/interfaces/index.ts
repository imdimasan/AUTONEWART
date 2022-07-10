export interface IModel {
  make: string;
  models: string[];
}

export interface ICar {
  car: IModel;
}

export interface ICars {
  cars: IModel[];
}
