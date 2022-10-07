import { InvalidArgumentError } from '../../shared/errors/InvalidArgumentError';

export class TodoTitle {
  constructor(readonly value: string) {
    this.ensureTitleIsNotEmpty();
  }

  private ensureTitleIsNotEmpty(): void {
    if (this.value.length < 1) {
      throw new InvalidArgumentError('Title must be filled.');
    }
  }
}
