import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent implements OnInit {

  constructor(private apis: ApiService) { }

  ngOnInit() {
    this.apis.getdatas().subscribe(datas => {
      console.log(datas);
    });
  }

}
