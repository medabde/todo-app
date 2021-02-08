export class Todo {
    _id?:string;
    todo:string;
    isDone:boolean;

    constructor(){
        this.todo="";
        this.isDone=false;
    }
}