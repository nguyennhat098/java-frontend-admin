import {  ChatMessage } from './chat';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFireDatabase) { }
getMessages(user) :Observable<any>{
  return this.db
  .list('Chat/' + user + '/messages', ref => {
  return ref.orderByChild('timeStamp');
  })
  .valueChanges();
}
getRoomsChat():Observable<any>{
  return this.db
  .list('RoomName', ref => {
  return ref.orderByChild('timeStamp').limitToLast(100);
  })
  .valueChanges();
}
updateRoom(chatRoom:ChatMessage):void{
  this.db.database.ref(`RoomName/${chatRoom.keyData}`).update(chatRoom);
}
sendMessage(chatMessage:ChatMessage, chatID) :void{
  this.db.list(`Chat/${chatID}/messages`).push(chatMessage);
  this.db.database.ref(`RoomName/${chatMessage.keyData}`).once('value').then(snapshort=>{
    var roomData = Object.assign({}, snapshort.val());
    roomData.new=false;
    this.db.database.ref(`RoomName/${chatMessage.keyData}`).update(roomData);
  });
  this.db.database.ref(`Chat/${chatID}/meta-data`).once('value').then(snapshort=>{
    var metaData = Object.assign({}, snapshort.val());
    metaData.totalNew+=1;
    this.db.database.ref(`Chat/${chatID}/meta-data`).update(metaData);
  });
  

}
}
