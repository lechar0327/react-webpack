import ToDoStore from './modules/todo';
import CnBlogStore from './modules/cnblog';
import TodoStore from './modules/todo';

class Store {
    constructor() {
        this.todo = new TodoStore();
        this.cnblog = new CnBlogStore();
    }
}

export default new Store();