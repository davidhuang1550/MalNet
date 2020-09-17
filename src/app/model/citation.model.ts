import {Person} from './person.model';

export class Citation {
    title: string;
    person: Person[];
    description: string;
    project: string;
    pdf: string;
    demo: string;
    video: string;
    code: string;
    bibtex: string;
    other: string;

    constructor(title: string, person: Person[], description: string,
                project: string, pdf: string, demo: string, video: string,
                code: string, bibtex: string, other: string) {
        this.title = title;
        this.description = description;
        this.person = person;
        this.project = project;
        this.pdf = pdf;
        this.demo = demo;
        this.video = video;
        this.code = code;
        this.bibtex = bibtex;
        this.other = other;
    }

}
