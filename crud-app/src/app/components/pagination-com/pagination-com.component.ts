import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-com',
  templateUrl: './pagination-com.component.html',
  styleUrls: ['./pagination-com.component.css'],
})
export class PaginationComComponent implements OnInit {
  constructor() {}

  @Input() indexFirst!: number;
  @Input() indexLast!: number;
  @Input() listLength: number | undefined;

  @Output() changeIndexFirst = new EventEmitter<number>();
  @Output() changeIndexSecond = new EventEmitter<number>();

  ngOnInit(): void {}

  prevBtn = () => {
    this.indexFirst -= 5;
    this.indexLast -= 5;
    this.changeIndexFirst.emit(this.indexFirst);
    this.changeIndexSecond.emit(this.indexLast);
    //console.log(this.indexFirst, this.indexLast);
  };
  nextBtn = () => {
    this.indexFirst += 5;
    this.indexLast += 5;
    this.changeIndexFirst.emit(this.indexFirst);
    this.changeIndexSecond.emit(this.indexLast);
    //  console.log(this.indexFirst, this.indexLast);
  };
}
