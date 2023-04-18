import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>;
  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>;
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  onAddServer(serverName){
    console.log(serverName.value)
    this.serverCreated.emit({serverName:serverName.value,serverContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverName){
    this.serverCreated.emit({serverName:serverName.value,serverContent:this.serverContentInput.nativeElement.value})
  }

}
