import { ValueTransformer } from 'typeorm';
import { NewableClass } from '../../domain/NewableClass';
import { ValueObject, ValueObjectType } from '@value-objects/ValueObject';

export const ValueObjectTransformer = <T extends ValueObjectType>(ValueObject: NewableClass<ValueObject<any>>): ValueTransformer => {
  return {
    to: (value: ValueObject<T>) => value.value,
    from: (value: T): ValueObject<T> => new ValueObject(value),
  };
};
