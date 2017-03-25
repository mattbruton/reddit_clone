import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-list',
  templateUrl: './sorting-list.component.html',
  styleUrls: ['./sorting-list.component.scss']
})
export class SortingListComponent implements OnInit {

  constructor() { }

  tabs: any[] = [
    {
      display: "hot",
      url: ""
    },
    {
      display: "new",
      url: "new"
    },
    {
      display: "rising",
      url: "rising"
    },
    {
      display: "controversial",
      url: "controversial"
    },
    {
      display: "top",
      url: "top"
    },
    {
      display: "gilded",
      url: "gilded"
    },
    {
      display: "wiki",
      url: "wiki"
    },
    {
      display: "promoted",
      url: "ads"
    }
  ] 
  ngOnInit() {
  }

}
