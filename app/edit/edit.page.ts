import { Component, OnInit } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  IDsentbb : string;

  constructor(private catActSV : CatActivityService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let IDsentbb = this.IDsentbb = (this.router.snapshot.paramMap.get('IDsentbb'));
    this.subscription=this.catActSV.get(IDsentbb)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let IDsentbb = this.IDsentbb = (this.router.snapshot.paramMap.get('IDsentbb'));
    let namepro = form.namepro;
    let catepro = form.catepro;
    let statuspro = form.statuspro;
    
    this.catActSV.edit(IDsentbb , namepro,catepro ,statuspro).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(IDsentbb  + namepro + catepro,statuspro);
       
  }

  ngOnInit() {
  }

}