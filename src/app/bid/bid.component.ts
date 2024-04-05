import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrl: './bid.component.css'
})
export class BidComponent implements OnInit {
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  imageUrl: string = '';
  model = {
    paintingId: 0,
    email: '',
    price: 0
  }
  atou=false
  showMessage = false;

  ngOnInit() {
    this.route.queryParams.subscribe({
      next: (value: any) => {
        if (value.paintingID && value.paintingID) {
          this.imageUrl = value.imageUrl;
          this.model.paintingId = value.paintingID;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  bid() {
    this.httpService.sendBid(this.model).subscribe({
      next: (resp) => {
      this.showMessage = true;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
