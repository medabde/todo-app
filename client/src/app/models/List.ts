export class List {
    _id?:string;
    title:string;
    name:string;
    creator:string;
    todos:string[];

    constructor(){
        this.title="";
        this.name="";
        this.creator="";
        this.todos=[];
    }
}