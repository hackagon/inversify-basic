import { injectable } from 'inversify';

@injectable()
export class Person {
  private readonly name: string = "Hackagon";

  public getName(): string {
    return this.name;
  }
}

@injectable()
export class Animal {
  private readonly name: string = "Husky";

  public getName(): string {
    return this.name;
  }
}