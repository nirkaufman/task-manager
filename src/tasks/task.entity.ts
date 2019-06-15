import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 128})
    title: string;

    @Column({type: 'text'})
    description: string;

    @Column()
    created_at: string;

    @Column()
    creator_id: number;

    @Column({nullable: true})
    assigned_to: number;
}
