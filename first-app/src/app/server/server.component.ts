import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{
  color:white;
  }`]
})
export class ServerComponent implements OnInit {
  allowNewServer:boolean=true;
  serverCreationStatus='No server was created!';
  serverName='Name1';
  serverStatus:string='';
  serverCreated=true;
  constructor() {
    this.serverStatus=Math.random()>0.5?'online':'offline';
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
