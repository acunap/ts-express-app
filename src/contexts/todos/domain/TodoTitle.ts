export class TodoTitle {
  constructor(readonly value: string) {
    this.ensureTitleIsNotEmpty();
  }

  private ensureTitleIsNotEmpty(): void {
    if (this.value.length < 1) {
      throw new Error('Title must be filled.');
    }
  }
}
