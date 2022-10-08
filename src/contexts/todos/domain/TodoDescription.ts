import { InvalidArgumentError } from '../../shared/domain/errors/InvalidArgumentError';
import { StringValueObject } from '../../shared/domain/value-objects/StringValueObject';

export class TodoDescription extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureDescriptionIsNotEmpty();
  }

  private ensureDescriptionIsNotEmpty(): void {
    if (this.value.length < 1) {
      throw new InvalidArgumentError('Description must be filled.');
    }
  }
}
