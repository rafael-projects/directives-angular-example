import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  [x: string]: any;
  count = 0;

  text: string = '';


  constructor () {}

  ngOnInit(): void {

      let interval = setInterval(() => {
        this.count++;
          if(this.count === 10){
            clearInterval(interval);
          }
        }, 1000)
      }



}