import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { Item } from '../ilist.module';

@Component({
    selector:"selectitem",
    templateUrl:"./selectitem.component.html",
    styleUrls:["./selectitem.component.css"]
})
export class selectitemcomponent{

    List:Item[]=[];
    @Input("item") list:Item;
   amount:number=0;
   @Output() myamount=new EventEmitter();
   @Output() flag=new EventEmitter();
   
    ngOnChanges(){
        console.log(this.list);
           this.List.push(this.list);
        
        this.amount=this.amount+this.list.Price;
    }


    remove(i:Item){
        this.myamount.emit(i.Price);
        this.flag.emit(true);
        this.amount=this.amount-i.Price;
        for(var v=0;v<this.List.length;v++){
            if(this.List[v].Iname==i.Iname){
                this.List.splice(v,1);
                break;
            }
        }

        
    }

}