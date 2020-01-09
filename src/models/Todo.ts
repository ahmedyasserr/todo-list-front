export interface Todo {
    id?: string;
    description: string;
    responsible: string;
    priority: TodoPriority;
    isComplete: boolean;
}

export type TodoPriority = "low" | "medium" | "high";