import { validate } from 'uuid';

export class TodoId {
  constructor(readonly value: string) {
    this.ensureIdIsValidUuid();
  }

  private ensureIdIsValidUuid(): void {
    if (!validate(this.value)) {
      throw new Error('Id must be a valid UUID.');
    }
  }
}
