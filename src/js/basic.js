export default class ErrorRepository {
  constructor(){
      this.errorLog = new Map();
  }
  add(errorCode, errorDescr){
      if (!this.errorLog.has(errorCode)) {
          this.errorLog.set(errorCode,errorDescr)
      }
      else return this.errorLog.get(errorCode);
  }
  translate(errorCode){
      if (this.errorLog.has(errorCode)) {
          return this.errorLog.get(errorCode);
      } else {
          throw new Error('Unknown error');
      }
  }
}
