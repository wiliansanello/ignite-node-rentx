import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
