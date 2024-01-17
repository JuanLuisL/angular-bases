import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./heroe/heroe.component";


@NgModule({
  declarations: [
    HeroeComponent,
  ],
  exports: [
    HeroeComponent,
  ],
  imports: [
    CommonModule
  ]

})
export class HeroesModule {

}
