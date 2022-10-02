import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.css']
})
export class PromiseObservableComponent implements OnInit {

  constructor() { }
  isOnline=false;
  status='offline';
  myPromise:any;

  data:number[]=[];
  count=0;
  myObservable:any;

  ngOnInit() {

    this.getStatus();
      // this.checkLogic();
      this.myPromise.then((res: any)=>{
        console.log('promise',res);
        this.checkLogic();
      },(err: any)=>{
        console.log(err);
      })

      // setInterval(()=>{
      //   this.count++;
      //   this.data.push(this.count);
      // },1000)

      this.myObservable=new Observable<number[]>((observer)=>{

        setInterval(()=>{
          this.count++;
          this.data.push(this.count);
          if(this.count<5){
            observer.next(this.data);
          }
          else{
            observer.complete();
          }

        },1000)

      });
  }


  getStatus(){
    console.log('getStatus called');
    // setTimeout(() => {
    //   console.log('received status value');
    //   this.isOnline=true;
    // }, 0);
    this.myPromise=new Promise<boolean>((resolve,reject)=>{

      setTimeout(() => {
        console.log('received status value');
        this.isOnline=true;
        resolve(this.isOnline);
      }, 3000)

    })

  }
  checkLogic(){
    console.log('checkLogic called');
    if(this.isOnline){
      this.status='online';
    }
    else{
      this.status='offline';
    }
  }


  getData(){
    this.myObservable.subscribe((res)=>{
      console.log('observable res',res);
      console.log(this.data);
    },(err)=>{
      console.log(err);
    },()=>{
      console.log('completed');
    })

  }

}
