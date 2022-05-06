import { Injectable } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { Item } from 'src/dto/items.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '5435345',
            name: 'item one',
            qty: 100,
            description: 'item one.'
        },
        {
            id: '324234',
            name: 'item two',
            qty: 200,
            description: 'item two.'
        },

    ]

    getAll(){
        return this.items;    }
}
