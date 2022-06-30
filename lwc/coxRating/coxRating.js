import { LightningElement,api } from 'lwc'; 
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";
export default class CoxRating extends OmniscriptBaseMixin(LightningElement) { 
    static Rating;
    @api name;
    rating(event){
        if (event.target.name === "Rating"){
            this.Rating = event.target.value;
        }

    }
  
}