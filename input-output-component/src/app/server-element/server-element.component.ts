import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom//None,Emulated,ShadowDom
  //It will apply shadow DOM functionality which is basically adding an attribute to the given tag in html
})
export class ServerElementComponent {

  @Input('srvElement') element:{type:string,name:string,content:string};
}
