import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specififications: Specification[];

    constructor() {
        this.specififications = [];
    }
    
    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specififications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specififications.find(
            (specification)=> specification.name === name
        );
        return specification;
    }
}

export { SpecificationsRepository };
