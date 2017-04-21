import {Injectable} from '@angular/core';

@Injectable()
export class Utils {

isEmpty(obj) {
    for(var prop in obj) {
        if(prop != ""){
          return false;
        }
    }
    return true;
}

}