import {  ChatMessage } from './chat';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFireDatabase) { }
//   getMessagesList() {  
//     return this.db.object('Chat').valueChanges(); 
// }
getMessages(user) {
  return this.db
  .list('Chat/' + user + '/messages', ref => {
  return ref.orderByChild('timeStamp');
  })
  .valueChanges();
}
getRoomsChat(){
  return this.db
  .list('RoomName', ref => {
  return ref.orderByChild('timeStamp').limitToLast(100);
  })
  .valueChanges();
}
updateRoom(chatRoom:ChatMessage){
//   debugger
//   const messageData:ChatRoom = {
//     senderID: user.id,
//     senderName: user.name,
//     fullName:user.fullName,
//     messageBody: message?message:'',
//     new:false,
//     image:user.image,
//     timeStamp: user.timeStamp,
// };
//  this.db
// .list('Chat/' + chatRoom.senderName + '/meta-data')
// .valueChanges().subscribe(val=>{
  this.db.database.ref(`RoomName/${chatRoom.keyData}`).update(chatRoom);
debugger
// });
}
sendMessage(chatMessage:ChatMessage, chatID) {
  // const messageData = {
  //     senderID: user.id,
  //     messageBody: message,
  //     senderName: user.name,
  //     timeStamp: new Date().getTime()
  // };
  debugger
  this.db.list(`Chat/${chatID}/messages`).push(chatMessage);
  chatMessage.new=false;
  chatMessage.timeStamp=chatMessage.timeStamp*-1;
  this.db.database.ref(`RoomName/${chatMessage.keyData}`).update(chatMessage);
  this.db.database.ref(`Chat/${chatID}/meta-data`).update(chatMessage);
  // this.db
  // .list('Chat/' +chatID+'/meta-data').valueChanges().subscribe((val:any)=>{
  //   var chatRoom:ChatMessage=new ChatMessage({
  //     fullName:val[0],
  //     image:val[1],
  //     messageBody:chatMessage.messageBody,
  //     new:val[4],
  //     senderID:val[5],
  //     senderName:val[6],
  //     timeStamp:new Date().getTime()*-1,
  //     keyData:val[3]
  //   })
   
  // });
}
endConversation(chatID) {
  const agentMeta = {
      name: '',
      new: false
  };
  const userMeta = {
      new: false
  };
  this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
  this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
}
}
