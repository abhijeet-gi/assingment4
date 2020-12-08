import { Component } from '@angular/core';
import { Item } from '../ilist.module';
import{ItemService} from'../ilist.service';
@Component({
    selector:"ilist",
    templateUrl:"./ilist.component.html",
    styleUrls:["./ilist.component.css"]
})
export class ilistcomponent{

        List1:Item[];
        List2:Item[];
        amt:number;
        return:number=0;
        pickitem:Item;
        flag=false;
        flag1=false;
        flag3=false;
        constructor(private iservice:ItemService){
            console.log("constructor clled of ilistcomponent");
        }

        ngOnInit(){
            console.log("ngInit  of ilist");
            this.List1=this.iservice.getAllI1();
            this.List2=this.iservice.getAllI2();
        }
        

        add(i:Item){
            this.flag=true;
            if(this.amt>=i.Price){
                this.amt=this.amt-i.Price;
                this.pickitem=i;

            }
            else{
                this.flag1=true;
            }
        }
}