import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [ButtonModule, InputTextModule],
  exports: [ButtonModule, InputTextModule],
})
export class PrimeModule {}
