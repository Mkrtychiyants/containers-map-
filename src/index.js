// import './css/style.css';

// import './js/app';

// TODO: write your code in app.js

class ErrorRepository {
  constructor() {
    this.errorLog = new Map();
  }

  add(errorCode, errorDescr) {
    if (!this.errorLog.has(errorCode)) {
      return this.errorLog.set(errorCode, errorDescr);
    } return this.errorLog.get(errorCode);
  }

  translate(errorCode) {
    if (this.errorLog.has(errorCode)) {
      return this.errorLog.get(errorCode);
    }
    throw new Error('Unknown error');
  }
}

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
console.log('err1 added');
console.log(rep1.errorLog.size);
console.log('err size');

rep1.add(err1.num, err1.value);
console.log('err1 second add');

console.log(rep1.errorLog.size);
rep1.add(err2.num, err2.value);
rep1.add(err3.num, err3.value);
console.log('err2 err3 add');
for (const vegetable of rep1.errorLog.values()) {
  console.log(vegetable); // огурец, помидор, лук
}
console.log(rep1.errorLog.size);

rep1.translate(err3.num);
console.log(rep1.translate(err3.num));
console.log('err3 translate');

rep1.translate(4);
console.log('err4 translate');

console.log(rep1.size);
