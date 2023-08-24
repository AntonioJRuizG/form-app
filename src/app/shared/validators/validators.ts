import { FormControl } from '@angular/forms';
// La finalidad de este archivo es centralizar las validaciones para poder usarlas en todo la aplicación y evitar repetir funciones.

export const cantBeStrider = (control: FormControl) => {
  const value: string = control.value.trim().toLowerCase();
  if (value === 'strider') {
    return {
      noStrider: true,
    };
  }
  return null;
};

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
