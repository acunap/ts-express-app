import { InvalidArgumentError } from '@errors/InvalidArgumentError';
import { StringValueObject } from '@value-objects/StringValueObject';

export class TodoTitle extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureTitleIsNotEmpty();
  }

  private ensureTitleIsNotEmpty(): void {
    if (this.value.length < 1) {
      throw new InvalidArgumentError('Title must be filled.');
    }
  }
}
