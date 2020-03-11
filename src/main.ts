import "reflect-metadata";
import { Service } from "./service";
import DIContainer from './di-container';

const services: Service = DIContainer.resolve<Service>(Service);

console.log(`Your name is: ${services.getAllNames().join(" - ")}`);