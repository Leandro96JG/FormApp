import { Component } from '@angular/core';

interface MenuItem{
  titte:string;
  route:string;
}


@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

public reactiveMenu:MenuItem[]=[
  {
    titte:'Basicos',
    route:'./reactive/basic'
  },
  {
    titte:'Dinamicos',
    route:'./reactive/dynamic'
  },
  {
    titte:'Switches',
    route:'./reactive/switches'
  },


]

public authMenu: MenuItem[]=[
  {
  titte:'Registro',
  route:'./auth'
  },
]

}
