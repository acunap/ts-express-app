export abstract class ResponseError extends Error {
  protected constructor(readonly status: number, readonly message: string) {
    super(message);
  }
}
