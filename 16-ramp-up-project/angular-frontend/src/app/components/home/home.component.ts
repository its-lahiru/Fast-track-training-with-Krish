import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedFile: File = null;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void { }

  onfileSelected(event) {
    // casting to type "File"
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.homeService.uploadFile(formData)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }
}
