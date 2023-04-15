import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css']

})
export class ServerComponent implements OnInit {
  allowNewServer:boolean=true;
  serverCreationStatus='No server was created!';
  serverName='Name1';
  serverStatus:string='';
  serverCreated=true;
  paragraphShow:boolean=true;
  counterArray=[];
  counter:number=0;
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
  toggleFlag(){
    this.paragraphShow=!this.paragraphShow;
  }
  incrementCounter(){

    this.counterArray.push(this.counter++);
  }
}
