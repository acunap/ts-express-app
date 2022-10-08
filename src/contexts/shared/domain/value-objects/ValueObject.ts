import { InvalidArgumentError } from '@errors/InvalidArgumentError';

export type ValueObjectType = string;

export abstract class ValueObject<T extends ValueObjectType> {
  protected constructor(readonly value: T) {
    this.ensureValueIsDefined(value);
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('Value must be defined');
    }
  }
}
