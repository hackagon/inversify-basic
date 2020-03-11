import { Container } from 'inversify';
import { Person, Animal } from './dependencies';

const DIContainer = new Container();

DIContainer.bind<Person>(Person).toSelf();
DIContainer.bind<Animal>(Animal).toSelf();