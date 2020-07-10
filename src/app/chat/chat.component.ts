import { Users } from './../users/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMessage } from './chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  roomName: string;
  messagesList;
  roomList;
  properties: string[];
  formRef: FormGroup;
  dataListRoomProperties: string[];
  user: Users;
  currentFullName: string;
  currentImage: string;
  selectedRoom:ChatMessage;
  @ViewChildren('allTheseThings') things: QueryList<any>;
  constructor(private chatService: ChatService, private formBuilder: FormBuilder) { }
  ngAfterViewInit(): void {
    this.things.changes.subscribe(t => {
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    })
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    this.getListRoom();
    this.formRef = this.formBuilder.group({
      chatMessage: ['', Validators.required],
    })
  }
  selectedMessage(roomIndex: string) {
    this.roomName = this.roomList[roomIndex].roomName;
    this.currentFullName = this.roomList[roomIndex].fullName;
    this.currentImage = this.roomList[roomIndex].image;
    var roomData:ChatMessage =new ChatMessage({
      fullName:this.currentFullName,
      image:this.currentImage,
      messageBody:'',
      new:false,
      senderID:this.roomList[roomIndex].senderID,
      senderName:this.roomName,
       timeStamp:this.roomList[roomIndex].timeStamp,
      keyData: this.roomList[roomIndex].keyData,
      roomName:this.roomList[roomIndex].roomName
    }); 
   this.selectedRoom=roomData;
    this.chatService.updateRoom(roomData);
    this.chatService.getMessages(this.roomName).subscribe(messages => {
      this.messagesList = messages;
      this.properties = Object.keys(this.messagesList).map(val => val);
    });
  }
  getListRoom() {
    this.chatService.getRoomsChat().subscribe(roomData => {
      this.roomList = roomData;
      this.dataListRoomProperties = Object.keys(roomData).map(val => val);
    })
  }
  postMessage() {
    if (this.formRef.invalid) {
      return;
    }
    // const chat:ChatMessage = {
    //   name: this.user.userName
    // };
    const chat:ChatMessage = new ChatMessage({
      messageBody:this.formRef.value.chatMessage,
      senderName:this.user.userName,
      timeStamp:new Date().getTime(),
      fullName:this.user.fullName,
      image:this.user.image?this.user.image:'https://image.flaticon.com/icons/svg/145/145867.svg',
      new:true,
      senderID:this.user.id,
      keyData:this.selectedRoom.keyData
    });
    this.chatService.sendMessage(chat, this.roomName);
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
    if (diffHour < 24) {
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
}
