import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer:boolean=true;
  serverCreationStatus='No server was created!';
  serverName='';
  serverCreated=true;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=false
    },3000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=false;
  this.serverCreationStatus='Server was created!'
  }

  onUpdateServerName(event:any){
  this.serverName=event.target.value;
  }
}
