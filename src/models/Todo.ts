export interface Todo {
    id?: string;
    description: string;
    responsible: string;
    priority: "low" | "medium" | "high";
    isComplete: boolean;
}
