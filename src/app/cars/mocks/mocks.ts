import {User} from "../models/user";
import {Car} from "../models/car";
/**
 * Created by jangia on 10.3.2017.
 */

export const USERS: Array<string> = [
  'Jan',
  'Miha',
  'Marko',
];

export const CARS: Car[] = [
  new Car('VW', 'Golf', 2015, 'Lj-525-KX', USERS[0]),
  new Car('Ford', 'Focus', 1999, 'MB-525-KX', USERS[1]),
  new Car('Fiat', 'Multipla', 2004, 'GO-OPTI', 'No owner'),
  new Car('Audi', 'A3', 2010, 'Lj-525-KX', USERS[2])
];
