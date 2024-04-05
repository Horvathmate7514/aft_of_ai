import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService, private router: Router) { } //private router: Router oldalak navigálását teszi lehetővé

  categories: any[] = [];
  paintings: any[] = [];
categoryId: string = '';


  ngOnInit() {
    this.httpService.getCategories().subscribe({
      next: (resp) => {
        // console.log(resp);
        this.categories = resp;

      },
      error: (err) => {
        console.log(err);
      }

    });
    this.selectCategory()
  }

  selectCategory() {
    this.paintings = [];
    this.httpService.getPaintings(this.categoryId).subscribe({
      next: (resp) => {
        this.paintings = resp;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  bid(paintingID: number, imageUrl: string){
    this.router.navigate(['/bidding'], {queryParams: {
      paintingID: paintingID,
      imageUrl: imageUrl
    }})
  }

}

