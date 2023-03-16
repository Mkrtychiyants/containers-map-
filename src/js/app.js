// TODO: write your code here
import ErrorRepository from './basic';

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
rep1.add(err1.num, err1.value);

rep1.add(err2.num, err2.value);
rep1.add(err3.num, err3.value);

rep1.translate(err3.num);
console.log(rep1.translate(err3.num));

rep1.translate(4);
