import { Component, OnInit, Input } from '@angular/core';
import { RoleService } from '../role.service';
import { Roles } from '../Role';
import { Actions } from '../Actions';
import { Permission } from './Permission';
import { RoleActions } from '../RoleActions';
import { ToastrService } from 'ngx-toastr';
import { SearchRequest } from './../../shared/search-request';
import { ActionResponse } from './../../shared/action-response';
const arrPermission = [
  { actionName: 'Category', view: 'VIEW CATEGORY', add: 'ADD CATEGORY', edit: 'EDIT CATEGORY', delete: 'DELETE CATEGORY',nameDb:'CATEGORY' },
  { actionName: 'PRODUCT', view: 'VIEW PRODUCT', add: 'ADD PRODUCT', edit: 'EDIT PRODUCT', delete: 'DELETE PRODUCT',nameDb:'PRODUCT' },
  { actionName: 'ROLE', view: 'VIEW ROLE', add: 'ADD ROLE', edit: 'EDIT ROLE', delete: 'DELETE ROLE',nameDb:'ROLE' },
  { actionName: 'USER', view: 'VIEW USER', add: 'ADD USER', edit: 'EDIT USER', delete: 'DELETE USER',nameDb:'USER' },
  { actionName: 'ORDERS', view: 'VIEW ORDERS', add: '', edit: 'EDIT ORDERS', delete: '',nameDb:'ORDERS' },
  { actionName: 'CHAT', view: 'VIEW CHAT', add: '', edit: '', delete: '',nameDb:'CHAT' },
  { actionName: 'Permission', view: '', add: 'ADD PERMISSION', edit: 'EDIT PERMISSION', delete: 'DELETE PERMISSION',nameDb:'PERMISSION' },
];
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {
  data = arrPermission;
  activePermissionList:Permission[]=[];
  @Input() item: Roles;
  actionsActive:Actions[]=[];
   actionsAvailableList: Actions[] = [];
   selectPermission:string[]=[];
  constructor(private _roleService: RoleService,private _toastr:ToastrService) { }

  ngOnInit() {
    this._roleService.getActionByRoleAction(new SearchRequest({ id: this.item.id })).subscribe(val=>{
      for (let index = 0; index < val.length; index++) {
        let actions = new Actions();
        actions.id = val[index][0];
        actions.actionName = val[index][1];
        actions.description = val[index][2];
        this.actionsAvailableList.push(actions);
      }
    });
    this._roleService.getActionByRole(this.item.id).subscribe(val => {
      for (let index = 0; index < val.length; index++) {
        let actions = new Actions();
        actions.id = val[index][0];
        actions.actionName = val[index][1];
        actions.description = val[index][2];
        this.actionsActive.push(actions);
      }
      for (let index = 0; index < this.data.length; index++) {
        const currentPermission = this.data[index];
        var obj:Permission=new Permission();
        obj.actionName=currentPermission.actionName;
        obj.add=this.actionsActive.find(x => x.actionName == currentPermission.add)? currentPermission.add:null;
        obj.edit=this.actionsActive.find(x => x.actionName == currentPermission.edit)? currentPermission.edit:null;
        obj.delete=this.actionsActive.find(x => x.actionName == currentPermission.delete)? currentPermission.delete:null;
        obj.view=this.actionsActive.find(x => x.actionName == currentPermission.view)? currentPermission.view:null;
        obj.nameDb=currentPermission.nameDb;
        this.activePermissionList.push(obj);
      }
    });
  }
  activeAction(permission:string,actionName: string): void {
    if (this.selectPermission.find(x => x == `${permission} ${actionName}`)) {
     this.selectPermission=this.selectPermission.filter(x=>x!=`${permission} ${actionName}`);
    }else{
      this.selectPermission.push(`${permission} ${actionName}`);
    }
  }
  saveChanges(){
    var roleActionAdd:RoleActions[]=[];
    var roleActionRemove:RoleActions[]=[];
    for (let index = 0; index < this.selectPermission.length; index++) {
      const name = this.selectPermission[index];
      var currentPermission=this.actionsActive.find(x=>x.actionName==name);
      var roleAction=new RoleActions();
      if(currentPermission){
        roleAction.actionId=new Actions({id:currentPermission.id,actionName:currentPermission.actionName});
        roleAction.roleId=new Roles({id:this.item.id});
        roleActionRemove.push(roleAction);
      }else{
        currentPermission=this.actionsAvailableList.find(x=>x.actionName==name);
        roleAction.actionId=new Actions({id:currentPermission.id,actionName:currentPermission.actionName});
        roleAction.roleId=new Roles({id:this.item.id});
        roleActionAdd.push(roleAction);
      }
    }
    this._roleService.deleteMutipleAction(roleActionRemove).subscribe((val: ActionResponse<Roles>) => {
    });
    this._roleService.addMutipleAction(roleActionAdd).subscribe((val: ActionResponse<RoleActions>) => {
    });
    this._toastr.success('Changes saved', 'Success');
    this.selectPermission=[];
  }
}
