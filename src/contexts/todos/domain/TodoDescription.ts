export class TodoDescription {
  constructor(readonly value: string) {
    this.ensureDescriptionIsNotEmpty();
  }

  private ensureDescriptionIsNotEmpty(): void {
    if (this.value.length < 1) {
      throw new Error('Description must be filled.');
    }
  }
}
