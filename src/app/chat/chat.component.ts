import { Users } from './../users/user';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMessage } from './chat';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthenticationServices } from './../helpers/authentication.service';

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
  dataListRoomProperties: string[];
  user: Users;
  currentFullName: string;
  currentImage: string;
  selectedRoom: ChatMessage;
  mes: string;
  isTyping: boolean;
  showTyping: boolean;
  totalNew: number = 0;
  roomIndex: string;
  textNarBar:string='UP';
  @ViewChildren('allTheseThings') things: QueryList<any>;
  constructor(private chatService: ChatService, private _router: Router, private _titleService: Title,private _authenticationService: AuthenticationServices,) {
    _router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (this.roomName) {
          this.chatService.changeTyping(this.roomName, false);
        }
      }
    });
  }
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    if (this.roomName) {
      this.chatService.changeTyping(this.roomName, false);
      event.returnValue = false;
    }
  }

  ngAfterViewInit(): void {
    this.things.changes.subscribe(t => {
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  }

  ngOnInit(): void {
    if(!this._authenticationService.checkAuthenticate('VIEW CHAT')){
      this._router.navigateByUrl('/auth');
    }
    this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    this.getListRoom();
    document.getElementById("content").style.height = document.getElementsByTagName('body')[0].clientHeight-50+"px";
  }

  selectedMessage(roomIndex: string) {
    if (this.roomName) {
      this.chatService.changeTyping(this.roomName, false);
      this.isTyping = false;
    }

    this.mes = null;
    this.roomIndex = roomIndex;
    this.roomName = this.roomList[roomIndex].roomName;
    this.currentFullName = this.roomList[roomIndex].fullName;
    this.currentImage = this.roomList[roomIndex].image;
    var roomData: ChatMessage = new ChatMessage({
      fullName: this.currentFullName,
      image: this.currentImage,
      messageBody: this.roomList[roomIndex].messageBody,
      new: false,
      senderID: this.roomList[roomIndex].senderID,
      senderName: this.roomName,
      timeStamp: this.roomList[roomIndex].timeStamp,
      keyData: this.roomList[roomIndex].keyData,
      roomName: this.roomList[roomIndex].roomName,
      totalNew: 0,
    });

    this.selectedRoom = roomData;
    this.chatService.updateRoom(roomData);
    this.chatService.getMessages(this.roomName).subscribe(messages => {
      this.messagesList = messages;
      this.properties = Object.keys(this.messagesList).map(val => val);
    });
    if (this.roomList[roomIndex].isTyping) {
      this.showTyping = true;
    } else {
      this.showTyping = false;
    }
  }

  getListRoom(): void {
    this.chatService.getRoomsChat().subscribe(roomData => {
      this.totalNew = 0;
      this.roomList = roomData;
      this.dataListRoomProperties = Object.keys(roomData).map(val => val);
      for (let index = 0; index < this.dataListRoomProperties.length; index++) {
        const item = this.roomList[index];
        if (item.new) {
          this.totalNew += item.totalNew;
          this._titleService.setTitle(`(${this.totalNew}) Admin`);
        }
      }

      if (this.totalNew == 0) {
        this._titleService.setTitle(`Admin`);
      }

      if (this.roomIndex) {
        if (this.roomList[this.roomIndex].isTyping) {
          this.showTyping = true;
        } else {
          this.showTyping = false;
        }
      }
    })
  }

  postMessage(val): void {
    if (!val) return;

    const chat: ChatMessage = new ChatMessage({
      messageBody: val,
      senderName: this.user.userName,
      timeStamp: new Date().getTime(),
      fullName: this.user.fullName,
      image: this.user.image ? this.user.image : 'https://image.flaticon.com/icons/svg/145/145867.svg',
      new: true,
      senderID: this.user.id,
      keyData: this.selectedRoom.keyData
    });
    this.chatService.sendMessage(chat, this.roomName);
    this.mes = null;
    this.isTyping = false;
  }

  ChangeTyping(): void {
    if (this.mes.length > 0 && !this.isTyping) {
      this.isTyping = true;
      this.chatService.changeTyping(this.roomName, true);
    }
    if (this.mes.length == 0 && this.isTyping) {
      this.isTyping = false;
      this.chatService.changeTyping(this.roomName, false);
    }
  }

  openNarBarMobile(){
    var checkExist=document.getElementsByClassName('opened');
    if(checkExist[0]){
      document.getElementById("sidebar").classList.remove('opened');
      this.textNarBar='UP';
    }else{
      document.getElementById("sidebar").classList.add('opened');
      this.textNarBar='DOWN';
    }
  }

  calculateDiff(sentDate): string {
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
