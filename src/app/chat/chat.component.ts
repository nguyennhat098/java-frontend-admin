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
  chatMessage: string;
  roomChat: string;
  messagesList;
  roomList: string[];
  keyArr: string[];
  activeChat: boolean = true;
  formRef: FormGroup;
  submitted = false;
  constructor(private chatService: ChatService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.roomChat = 'de';
    this.chatService.getMessagesList().subscribe((messagesList: any) => {
      this.messagesList = messagesList.de.messages;
      this.roomList = Object.keys(messagesList).map((val: any) => {
        return val;
      });
      this.keyArr = Object.keys(messagesList.de.messages).map((val: any) => {
        return val;
      });
    });
    this.formRef = this.formBuilder.group({
      message: ['', Validators.required],
    })
  }
  get f() { return this.formRef.controls; }
  postMessage() {
    this.submitted=true;
    // const user = {
    //   id: 'ab',
    //   name: 'nhat'
    // };
    // this.chatService.sendMessage(user, this.chatMessage, this.roomChat);
  }
  showChat() {
    if (this.activeChat) {
      this.activeChat = false;
    } else {
      this.activeChat = true;
    }
  }
  endConversation() {
    this.chatService.endConversation('this.agent._id');
  }
}
