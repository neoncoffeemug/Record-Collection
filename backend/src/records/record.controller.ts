import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { RecordService } from './record.service';
import { Record } from './record.entity';

@Controller('records')
export class RecordController {
    constructor(private readonly recordService: RecordService) { }

    @Get()
    async findALL() {
        return this.recordService.findAll();
    }

    @Get(':id')
    async getRecord(@Param('id', ParseIntPipe) id: number): Promise<Record> {
        return this.recordService.findOne(id)
    }

    @Post()
    create(@Body() data: Partial<Record>) {
        return this.recordService.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<Record>) {
        return this.recordService.update(+id, data);
    }
}