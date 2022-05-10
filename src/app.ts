export class SSNValidator {
  ssnValidator: RegExp;
  constructor(){
    this.ssnValidator = /^(?!666|000|9)[0-9]{3}\-(?!00)[0-9]{2}\-(?!0000)[0-9]{4}$/;
  }
  
  validateSocialSecurityNumber(ssn: string): boolean {
    return this.ssnValidator.test(ssn);
  }

  validateSSNWithoutRegExp(ssn: string): boolean {
    const _ssn: string[] = ssn.split('-');
    let result: boolean = false;
    if(ssn !== '' && _ssn.length === 3) {
      if(_ssn[0] === '000' || _ssn[0] === '666' || _ssn[0][0] === '9') {
        result = false;
      } else if(_ssn[1].length !== 2 || Number(_ssn[1]) < 1) {
        result = false;
      } else if(_ssn[2].length !== 4 || Number(_ssn[2]) < 1) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }
}