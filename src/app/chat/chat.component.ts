import { Users } from './../users/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  roomName: string;
  messagesList;
  // roomList: string[];
  properties: string[];
  formRef: FormGroup;
  submitted = false;
  dataListRoomProperties:string[];
  user:Users;
  constructor(private chatService: ChatService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('currentUser')).user;
    this.getListRoom();
    this.formRef = this.formBuilder.group({
      chatMessage: ['', Validators.required],
    })
  }
  selectedMessage(roomName:string){
    this.roomName=roomName;
     this.chatService.getMessages(roomName).subscribe(messages=>{
      this.messagesList=messages;
      this.properties = Object.keys(this.messagesList).map(val=>val);
     });
  }
  getListRoom(){
    this.chatService.getRoomsChat().subscribe(roomData=>{
      this.dataListRoomProperties = Object.keys(roomData[0]).map(val=>val);
    })
  }
  postMessage() {
    this.submitted=true;
    if(this.formRef.invalid){
      return;
    }
    const user = {
      id: this.user.id,
      name: this.user.userName
    };
    this.chatService.sendMessage(user, this.formRef.value.chatMessage, this.roomName);
    this.formRef.reset();
  }
  endConversation() {
    this.chatService.endConversation('this.agent._id');
  }
}
