import { Injectable } from "@angular/core";
import { Adaptor } from "../Adaptors/Adaptor";

export class StudentsModel {
    constructor(
        public name: String,
        public city: String,
        public age: String,
        public id: String,
        public batch: String,
        public address: String,
        public dateOfBirth: String,
        public fatherName: String,
        public gender: String,
        public rollNumber: String,
        public degreeStatus: String
    ){}
}

@Injectable({
    providedIn: "root",
})

export class StudentsAdaptor implements Adaptor<StudentsModel> {
    adapt(item: any): StudentsModel {
        return new StudentsModel(item.name, item.city, item.age, item.id, item.batch, item.address, item.dateOfBirth, 
            item.fatherName, item.gender, item.rollNumber, item.degreeStatus);
    }
}