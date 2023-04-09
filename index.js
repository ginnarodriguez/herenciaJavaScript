/*Importación de clases*/
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const empleado = new Empleado("Juan Pérez", "52635", 10000);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado, "12345"));
const gerente = new Gerente("Pedro Rivas", "52636", 12000);
//const director = new Director("Elena Moreno", "52639", 15000);

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave("4563");
console.log(SistemaAutenticacion.login(cliente, "4563"));



