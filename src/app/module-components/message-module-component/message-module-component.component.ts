import { Component, OnInit } from '@angular/core';
import { MessageModuleServiceService } from '../../module-services/MessageModuleService/message-module-service.service';
import { Message } from '../../module-model/MessageModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserModuleComponentComponent } from '../user-module-component/user-module-component.component';
import { CircleModuleComponentComponent } from '../circle-module-component/circle-module-component.component';
import { Input } from '@angular/core';
import { UserRegistration } from '../../module-model/UserModel';
import { Circle } from '../../module-model/CircleModel';

@Component({
  selector: 'app-message-module-component',
  templateUrl: './message-module-component.component.html',
  styleUrls: ['./message-module-component.component.css'],
})
export class MessageModuleComponentComponent implements OnInit {
  @Input()messages:Message[];

  
  


  
  
  
 
 
  

  constructor(private messageModuleService:MessageModuleServiceService,
    private actvatedroute:ActivatedRoute,
    private location:Location) { }

    

  ngOnInit() {

    
  
    
      }
     

 


}
