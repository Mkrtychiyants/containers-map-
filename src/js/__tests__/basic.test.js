import ErrorRepository from '../basic';

const err1 = {
  value: 'character1',
  num: 1,
};
const err2 = {
  value: 'character2',
  num: 2,
};
const err3 = {
  value: 'character3',
  num: 3,
};

const rep1 = new ErrorRepository();

rep1.add(err1.num, err1.value);
rep1.add(err2.num, err2.value);
rep1.add(err3.num, err3.value);

test('map test', () => {
  expect(rep1.add(err1.num, err1.value)).toMatch('character1');
  expect(() => (rep1.translate(4))).toThrow(Error);
  expect(rep1.translate(err3.num)).toMatch('character3');
});
