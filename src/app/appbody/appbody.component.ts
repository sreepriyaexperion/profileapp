import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appbody',
  templateUrl: './appbody.component.html',
  styleUrls: ['./appbody.component.css']
})
export class AppbodyComponent implements OnInit {
  @Input()details;
  @Input()showLoader;
  constructor() { }

  ngOnInit() {
  }
}
