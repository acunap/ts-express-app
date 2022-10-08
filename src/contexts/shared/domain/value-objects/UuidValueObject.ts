import { validate } from 'uuid';
import { InvalidArgumentError } from '@errors/InvalidArgumentError';
import { ValueObject } from '@value-objects/ValueObject';

export class UuidValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIdIsValidUuid();
  }

  private ensureIdIsValidUuid(): void {
    if (!validate(this.value)) {
      throw new InvalidArgumentError('Id must be a valid UUID.');
    }
  }
}
