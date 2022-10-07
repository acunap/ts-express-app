import { ResponseError } from './ResponseError';

export class InvalidArgumentError extends ResponseError {
  constructor(readonly message: string) {
    super(400, message);
  }
}
