import { SSNValidator } from './app';
import readline from 'readline';
import process from 'process';
import chalk from 'chalk';
import figlet from 'figlet';

export class SSNValidatorConsoleApp {
  ssnValidator: SSNValidator;
  readLine: any;
  constructor() {
    this.ssnValidator = new SSNValidator();
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  init() {
    console.clear();
    console.log(chalk.magenta(figlet.textSync('SSN Validator', {horizontalLayout: 'full'})));
    console.log('Bienvenido a SSN Validator');
    console.log(chalk.green('Seleccione una Opción'));
    console.log(chalk.green('1- Validar SSN.'));
    console.log(chalk.green('2- Salir.'));

    this.readLine.question('Opción: ', (input: string) => {
      switch(input.trim()) {
        case '1':
          this.validatorMenu();
          break;
        case '2':
          process.exit();
        default:
          this.init();
      }
    });
  }

  validatorMenu() {
    console.clear();
    console.log(chalk.magenta('Validar SSN'));
    this.readLine.question('Ingresar SSN: ', (input: string) => {
      this.ssnValidator.validateSocialSecurityNumber(input) ? console.log('El SSN ingresado es válido') : console.log('El SSN ingresado es inválido');
      console.log(' ');
      console.log('¿Desea Repetir?');
      console.log('1- Si.');
      console.log('2- No.');

      this.readLine.question('Opción: ', (input: string) => {
        switch(input.trim()) {
          case '1':
            this.validatorMenu();
            break;
          case '2':
            this.init();
            break;
          default:
            this.validatorMenu();
        }
      });
    });
  }
}

let ssnValidatorApp = new SSNValidatorConsoleApp();
ssnValidatorApp.init();