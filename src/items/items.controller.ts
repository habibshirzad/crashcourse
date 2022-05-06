import { Body, Controller, Get, Param, Post, Put ,Delete} from '@nestjs/common';
import { Item } from 'src/dto/items.interface';
import { ItemsService } from './items.service';



@Controller('items')
export class ItemsController {
    
    constructor( 
        private readonly itemService:ItemsService
    ){}



    @Get()
    getAll (@Body() Body): Item[] {
        return this.itemService.getAll()
}












        // //  basic functions without database and item serive module. note! we do the same functions but using db
        // @Get()
        // getAll (@Body() Body): Item[] {
        // return 'get all'
        //     // return `get ${all.name,all.description}`
        // }
        // @Post()
        // simpleCreate(@Body() string): string{
        // return 'craeted'
        // }
        // @Post()
        // create(@Body() createItemDto:CreateItemDto ):string{
        // return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`          
        // }
        // @Get(':id')
        // getById(@Param() param):string {
        // return `this is with id ${param.id}`
        // }

        // @Delete(':id')
        // delete(@Param() param):string {
        // return `Delete ${param.id}`
        // }
        // @Put(':id')
        // update(@Body() updateItemDto:CreateItemDto, @Param() param):string{
        // return `update ${param.id} - ${updateItemDto.name}, ${updateItemDto.description}`

        // }
}
