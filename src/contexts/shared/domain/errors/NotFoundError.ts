import { ResponseError } from '@errors/ResponseError';

export class NotFoundError extends ResponseError {
  constructor(readonly message: string) {
    super(404, message);
  }
}
