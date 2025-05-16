import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('records')
export class Record {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    album: string;

    @Column({ length: 100 })
    artist: string;

    @Column()
    year: number;

    @Column({ length: 100 })
    genre: string;

    @Column({ length: 100 })
    label: string;

    @Column('numeric')
    rating: number;

    @Column()
    review: string;
}

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 60 })
    pswd: string;

}