import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CatActivityService} from '../services/cat-activity.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private catActSV : CatActivityService ,private route:Router) { }
 
  ngOnInit() {
  }
  insert(form) {
    let IDsentbb = form.IDsentbb;
    let namepro = form.namepro;
    let catepro = form.catepro;
    let statuspro = form.statuspro;
   
    
    this.catActSV.insert(IDsentbb,namepro, catepro,statuspro).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

}
