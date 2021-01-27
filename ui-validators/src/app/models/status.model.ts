import { BusinessRule } from "./business-rule.model";

export class Status {
    id: string | undefined;
    title: string | undefined;
    isCurrent: boolean = false;
    businessRules: Array<BusinessRule> = [];
}
