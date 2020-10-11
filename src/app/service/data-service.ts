import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    graphData = '../../assets/config/graph.json';
    imageData = '../../assets/config/image.json';

    graphDataObj: any[] = null;

    imageDataObj: any[] = null;

    constructor(private http: HttpClient) {}

    fetch(fileName) {
        return this.http.get(fileName)
            .toPromise()
            .then( result => {
                return result;
            }).catch(err => {
                console.log(err.message);
                return err;
            });
    }
    async getImageData() {
        if(this.imageDataObj == null) {
            await this.fetch(this.imageData)
                .then(async result => {
                    this.imageDataObj = result;
                });
        }
        return this.imageDataObj;
    }

    async getGraphData() {
        if(this.graphDataObj == null) {
            await this.fetch(this.graphData)
                .then(async result => {
                    this.graphDataObj = result;
                });
        }
        return this.graphDataObj;
    }
}