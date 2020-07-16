import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {
  movieform: FormGroup;
  constructor(private formbuild: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.movieform = this.formbuild.group({
      Title: ['', Validators.required],
      Type: ['', Validators.required],
      Poster: ['', Validators.required],
      Year: ['', Validators.required]
    });
  }
  postnow() {
    this.api.postmovie(this.movieform.value).subscribe(datas => {
      console.log(datas);
    });
  }
}
