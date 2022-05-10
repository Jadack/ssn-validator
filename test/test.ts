import { SSNValidator } from '../src/app';
import { expect } from 'chai';

describe('Social Security Number Validator with RegExp', () => {
  let ssnValidator = new SSNValidator();

  it('Should return false with empty input', () => {
    expect(ssnValidator.validateSocialSecurityNumber('')).false;
  });

  it('Should return false if input not have 9 digits', () => {
    expect(ssnValidator.validateSocialSecurityNumber('65-00-87')).false;
  });

  it('Should return false if input is not divided by hyphen (-)', () => {
    expect(ssnValidator.validateSocialSecurityNumber('232.85.6520')).false;
  });

  it('Should return false if first part not have three digits', () => {
    expect(ssnValidator.validateSocialSecurityNumber('88-320-8842')).false;
  });

  it('Should return false if first part is equal to 000', () => {
    expect(ssnValidator.validateSocialSecurityNumber('000-85-6520')).false;
  });

  it('Should return false if first part is equal to 666', () => {
    expect(ssnValidator.validateSocialSecurityNumber('666-85-6520')).false;
  });

  it('Should return false if first part is bigger than 899', () => {
    expect(ssnValidator.validateSocialSecurityNumber('900-85-6520')).false;
  });

  it('Should return false if second part not have two digits', () => {
    expect(ssnValidator.validateSocialSecurityNumber('23-815-6520')).false;
  });

  it('Should return false if second part is less than 01', () => {
    expect(ssnValidator.validateSocialSecurityNumber('232-00-6520')).false;
  });

  it('Should return false if third part not have four digits', () => {
    expect(ssnValidator.validateSocialSecurityNumber('2324-851-60')).false;
  });

  it('Should return false if third part is less than 0001', () => {
    expect(ssnValidator.validateSocialSecurityNumber('232-85-0000')).false;
  });

  it('Should return true if meet the valid requirements', () => {
    expect(ssnValidator.validateSocialSecurityNumber('232-85-6520')).true;
  });
});

describe('Social Security Number Validator without RegExp', () => {
  let ssnValidator = new SSNValidator();

  it('Should return false with empty input', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('')).false;
  });

  it('Should return false if input not have 9 digits', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('65-00-87')).false;
  });

  it('Should return false if input is not divided by hyphen (-)', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('232.85.6520')).false;
  });

  it('Should return false if first part not have three digits', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('88-320-8842')).false;
  });

  it('Should return false if first part is equal to 000', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('000-85-6520')).false;
  });

  it('Should return false if first part is equal to 666', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('666-85-6520')).false;
  });

  it('Should return false if first part is bigger than 899', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('900-85-6520')).false;
  });

  it('Should return false if second part not have two digits', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('23-815-6520')).false;
  });

  it('Should return false if second part is less than 01', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('232-00-6520')).false;
  });

  it('Should return false if third part not have four digits', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('2324-851-60')).false;
  });

  it('Should return false if third part is less than 0001', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('232-85-0000')).false;
  });

  it('Should return true if meet the valid requirements', () => {
    expect(ssnValidator.validateSSNWithoutRegExp('232-85-6520')).true;
  });
});