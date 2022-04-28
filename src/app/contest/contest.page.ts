import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contest',
  templateUrl: './contest.page.html',
  styleUrls: ['./contest.page.scss'],
})
export class ContestPage implements OnInit {
  @ViewChild('myModal') myModal: any;

  porticipated: boolean = false;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this._modalService.open(this.myModal, { centered: true });
  }

}
