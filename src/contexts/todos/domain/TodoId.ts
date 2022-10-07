import { validate } from 'uuid';
import { InvalidArgumentError } from '../../shared/errors/InvalidArgumentError';

export class TodoId {
  constructor(readonly value: string) {
    this.ensureIdIsValidUuid();
  }

  private ensureIdIsValidUuid(): void {
    if (!validate(this.value)) {
      throw new InvalidArgumentError('Id must be a valid UUID.');
    }
  }
}
