import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavService {

    public changeNavColor = new Subject<any>();

}
