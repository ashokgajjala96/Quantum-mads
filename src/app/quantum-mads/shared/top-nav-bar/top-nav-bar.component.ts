import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxFlagPickerComponent } from 'ngx-flag-picker';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent implements OnInit {
  selectedCountryCode = 'us';
  countryCodes = ['us', 'lu', 'de', 'bs'];

  @ViewChild(NgxFlagPickerComponent,{static:false}) selectFlagsElementRef: NgxFlagPickerComponent;
  constructor() {}

  ngOnInit(): void {}

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }


  mouseEnter(){
    this.selectFlagsElementRef.isShowListCountryFlags=true;
    console.log("mouse enter : " + this.selectFlagsElementRef.isShowListCountryFlags);
 }
 mouseOutEnter(){
  this.selectFlagsElementRef.isShowListCountryFlags=false;
  console.log('mouse leave :' + this.selectFlagsElementRef.isShowListCountryFlags);
 }

 mouseLeave(){
  this.selectFlagsElementRef.isShowListCountryFlags=false;
   console.log('mouse leave :' + this.selectFlagsElementRef.isShowListCountryFlags);
 }

}
