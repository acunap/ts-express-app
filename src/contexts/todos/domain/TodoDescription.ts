import { InvalidArgumentError } from '../../shared/errors/InvalidArgumentError';

export class TodoDescription {
  constructor(readonly value: string) {
    this.ensureDescriptionIsNotEmpty();
  }

  private ensureDescriptionIsNotEmpty(): void {
    if (this.value.length < 1) {
      throw new InvalidArgumentError('Description must be filled.');
    }
  }
}
