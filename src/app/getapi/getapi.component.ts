import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent implements OnInit {
  moves: any;

  constructor(private apis: ApiService) { }

  ngOnInit() {
    this.apis.getdatas().subscribe(datas => {
      console.log(datas);
      this.moves = datas;
    });
  }

}
