import { Component } from '@angular/core';

import { onExit } from '@guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements onExit {
  onExit() {
    const rta = confirm('¿Está seguro de que desea salir?');
    return rta;
  }
}
