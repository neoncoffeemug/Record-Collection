import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { Record } from "./record.entity";

@Injectable()
export class RecordService {
    constructor(
        @InjectRepository(Record)
        private readonly recordRepo: Repository<Record>,
    ) { }

    findAll() {
        return this.recordRepo.find({
            order: {
                id: 'ASC'
            }
        })
    }

    async findOne(id: number): Promise<Record> {
        const record = await this.recordRepo.findOneBy({ id })

        if (!record) {
            throw new NotFoundException('not found')
        }

        return record
    }

    create(data: Partial<Record>) {
        const record = this.recordRepo.create(data);
        return this.recordRepo.save(record);
    }

    update(id: number, data: Partial<Record>) {
        return this.recordRepo.update(id, data);
    }
}
