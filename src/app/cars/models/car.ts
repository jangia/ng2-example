import {User} from "./user";
/**
 * Created by jangia on 10.3.2017.
 */

export class Car{

  constructor(
    public manufacture: string,
    public model: string,
    public yearOfConstruction: number,
    public registerPlates: string,
    public owner: string,
  ){}
}
