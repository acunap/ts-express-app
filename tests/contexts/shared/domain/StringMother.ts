import { MotherCreator } from './MotherCreator';

export class StringMother {
  static random(numberOfWords = 1): string {
    return MotherCreator.random().lorem.words(numberOfWords);
  }
}
