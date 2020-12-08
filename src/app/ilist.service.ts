import { Injectable } from '@angular/core';
import { Item } from './ilist.module';

@Injectable()
export class ItemService{

    I1=[new Item("PopCorn",100),
    new Item("SweetCorn",150),
    new Item("ChocolateCorn",175),
    new Item("SaltyCorn",50),];

    I2=[new Item("Pepsi",50),
    new Item("Coca Cola",75),
    new Item("Mirenda",80),
    new Item("Sprite",60)];

    getAllI1():Item[]{
        return this.I1;
    }

    getAllI2():Item[]{
        return this.I2;
    }
}