

export default class Todo {
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.description = json.description
    }
}