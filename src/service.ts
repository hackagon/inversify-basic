import { injectable, inject } from 'inversify';
import { Person, Animal } from './dependencies';

@injectable()
export class Service {
  protected person: Person;
  protected animal: Animal;

  constructor(
    @inject(Person) person: Person,
    @inject(Animal) animal: Animal
  ) {
    this.person = person;
    this.animal = animal;
  }

  public getAllNames(): string[] {
    return [this.person.getName(), this.animal.getName()]
  }
}