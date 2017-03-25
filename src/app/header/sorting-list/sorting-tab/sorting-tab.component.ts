import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sorting-tab',
  templateUrl: './sorting-tab.component.html',
  styleUrls: ['./sorting-tab.component.scss']
})
export class SortingTabComponent implements OnInit {
  
  @Input() name: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
