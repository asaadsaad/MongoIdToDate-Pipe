import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mongoid',
  template: `
    <p>
      Date using Pipe: {{mongoId | mongoIdToDate | date}}
      Date from Mongo ID: {{dateFromMongoId | date}}
    </p>
  `,
  styles: []
})
export class MongoidComponent implements OnInit {
  public mongoId = '5d56baca148b24753d518ee0'
  public dateFromMongoId = null;

  ngOnInit() {
    const timestamp = this.mongoId.toString().substring(0, 8)
    this.dateFromMongoId = new Date(parseInt(timestamp, 16) * 1000)
  }

}
