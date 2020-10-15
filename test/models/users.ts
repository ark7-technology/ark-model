import { A7Model, Field } from '../../src';

export enum Gender {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
}

export class Name {
  readonly first: string;
  last: string;
}

@A7Model({
  hello: 'world1',
  hello3: 'world3',
})
export class User {
  name?: Name;

  gender: Gender;
}