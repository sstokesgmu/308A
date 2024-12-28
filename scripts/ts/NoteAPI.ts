export default class NoteAPI {

    /**
     * @class {Note} 
     * @constructor 
     *      @param {string} title 
     *      @param {string} body
     * @description 
     */
    static Note = class {
        /*When we sent the constructor parameter as public we are saying create a class propeter with the same name as the parameter, and assign that new prop to that value
        */
        protected lastUpdated:Date;
        constructor(public title = "", public body = ""){
            this.lastUpdated = new Date();
        }
    };


    static getAllNotes():Array<InstanceType<typeof NoteAPI.Note>>{
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");
        


        notes.sort((a:object,b:object) => {return new Date(a.lastUpdated) > new Date(b.lastUpdated)});
        return notes;
    }
    // static getNote(id:number):typeof NoteAPI.Note{
        
    // }



}