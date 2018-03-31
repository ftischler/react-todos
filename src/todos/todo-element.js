export class TodoElement {
    _id;
    description;
    done;

    constructor(description, done = false) {
        this.description = description;
        this.done = done;
    }
}
