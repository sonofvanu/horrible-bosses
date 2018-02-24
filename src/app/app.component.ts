import {Component} from '@angular/core';
import {UserModuleComponentComponent} from './module-components/user-module-component/user-module-component.component';
import {CircleModuleComponentComponent} from './module-components/circle-module-component/circle-module-component.component';
import {UserRegistration} from './module-model/UserModel';
import {Circle} from './module-model/CircleModel';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {UserModuleServiceService} from './module-services/UserModuleService/user-module-service.service';
import {CircleModuleServiceService} from './module-services/CircleModuleService/circle-module-service.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {NgModule} from '@angular/core/src/metadata/ng_module';
import {ViewChild} from '@angular/core';
import {MessageModuleComponentComponent} from './module-components/message-module-component/message-module-component.component';
import {MessageModuleServiceService} from './module-services/MessageModuleService/message-module-service.service';
import {Message} from './module-model/MessageModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
closeResult: string;
  title = 'Horrible-Bosses';
  users: UserRegistration[];
  circles: Circle[];
  circle: Circle;
  messages: Message[];
  private bodyText: string;

  cl: number;


  constructor(private userService: UserModuleServiceService,
    private circleService: CircleModuleServiceService, private actvatedroute: ActivatedRoute,
    private location: Location,
    private messageService: MessageModuleServiceService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCircles();
    this.bodyText = 'This text can be updated in modal 1';

  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data.json();
      }
    );

  }


  getCircles(): void {
    this.circleService.getCircles().subscribe(
      (data) => {
        this.circles = data.json();
      }
    );

  }


  getCircleMessages($event): void {
    const id: number = $event;
    console.log(id);
    this.messageService.getSingleCircleMessage(id).subscribe(
      (data) => {
        this.messages = data.json();
      }
    );
  }

  getUserMessages($event): void {
    const id: string = $event;
    console.log(id);
    this.messageService.getSingleUserMessage(id).subscribe(
      (data) => {
        this.messages = data.json();
      }
    );
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  addCircle(circle:Circle)
  {
    
    //this.circle.circleName=circleName.toString();
    //this.circleService.createCircle(this.circle);
    console.log(circle.circleName.trim()+" has been created");
  }


}
