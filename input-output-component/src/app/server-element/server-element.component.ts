import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None//None,Emulated,ShadowDom
  //It will apply shadow DOM functionality which is basically adding an attribute to the given tag in html
})
export class ServerElementComponent implements OnInit,OnChanges{

  @Input('srvElement') element:{type:string,name:string,content:string};
  @Input() name:string;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit is called");
  }
}
