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
   roomList;
  properties: string[];
  formRef: FormGroup;
  submitted = false;
  dataListRoomProperties:string[];
  user:Users;
  currentFullName:string;
  currentImage:string;
  constructor(private chatService: ChatService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('currentUser')).user;
    this.getListRoom();
    this.formRef = this.formBuilder.group({
      chatMessage: ['', Validators.required],
    })
  }
  selectedMessage(roomName:string){
    this.roomName=this.roomList[roomName].senderName;
    this.currentFullName=this.roomList[roomName].fullName;
    this.currentImage=this.roomList[roomName].image;
     this.chatService.getMessages(this.roomName).subscribe(messages=>{
      this.messagesList=messages;
      this.properties = Object.keys(this.messagesList).map(val=>val);
     });
  }
  getListRoom(){
    this.chatService.getRoomsChat().subscribe(roomData=>{
      debugger
      this.roomList=roomData;
      this.dataListRoomProperties = Object.keys(roomData).map(val=>val);
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
  calculateDiff(sentDate) {
    var date1: any = new Date(sentDate);
    var date2: any = new Date();

    var diffMinus: any = Math.ceil((date2 - date1) / (60 * 1000));
    if (diffMinus < 60) {
      return diffMinus + ' minutes ago';
    }
    var diffHour: any = Math.ceil((date2 - date1) / (60 * 1000 * 60));
    if (diffHour < 60) {
      return diffHour + ' hours ago';
    }
    var diffDays = Math.ceil((date2 - date1) / (60 * 1000 * 24 * 60));
    if (diffDays < 30) {
      return diffDays + ' days ago';
    }
    var diffMonth = Math.ceil((date2 - date1) / (60 * 1000 * 24 * 60 * 30));
    if (diffMonth < 12) {
      return diffMonth + ' months ago';
    }
    var diffYear = Math.ceil((date2 - date1) / (60 * 1000 * 24 * 60 * 30 * 12));
    return diffYear + ' years ago';
  }
  endConversation() {
    this.chatService.endConversation('this.agent._id');
  }
}
