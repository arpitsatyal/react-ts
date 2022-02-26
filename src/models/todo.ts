class Todo {
  constructor(title: string, completed?: boolean) {
    this.title = title;
    this.completed = completed;
  }
  title: string;
  completed?: boolean;
}
export default Todo;