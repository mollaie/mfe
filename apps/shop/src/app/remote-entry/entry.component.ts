import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mfe-shop-entry',
  template: `<mfe-nx-welcome [id]="params"></mfe-nx-welcome>`,
})
export class RemoteEntryComponent implements OnInit{
  public params  ="";

  constructor(private readonly activatedRoute:ActivatedRoute){
  }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params["id"];
  }
}
