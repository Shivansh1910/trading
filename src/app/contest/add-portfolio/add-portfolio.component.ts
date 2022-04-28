import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss'],
})
export class AddPortfolioComponent implements OnInit {
  @ViewChild('myModal') myModal: any;
  buysell = 'Buy';
  ordertype = 'Market';
  advance = 'regular';
  value = 0;

  handleMinus() {
    if (this.value > 0) {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }
  tri;

  constructor(private _modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    var i = 0
    var temp = ''
    for (i = 0; i < 100; i++) {
      console.log(i)
      var j = i * 10
      temp += j + ',' + this.random() + ' '
    }
    this.tri = temp
    console.log(temp)

  }

  random() {
    return Math.floor(Math.random() * 100);
  }

  open() {
    this._modalService.open(this.myModal, { centered: true });
  }

  cancel() {
    console.log('cancell called')
    this.router.navigateByUrl('contest')
    window.location.href = 'contest'
  }

  save() {

  }
}
