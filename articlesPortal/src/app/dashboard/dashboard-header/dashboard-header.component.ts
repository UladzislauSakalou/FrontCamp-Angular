import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../../models';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Input()
  selectedSource: Source
  public placeHolder: String = "Please select a source";

  constructor() { }

  ngOnInit() {
  }

}
