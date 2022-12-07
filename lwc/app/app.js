import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';

import staticCSS from '@salesforce/resourceUrl/staticCSS';

export default class App extends LightningElement {
    @api recordId;
    @api objectApiName;

    @api hasRendered = false;
    renderedCallback(){
        if (this.hasRendered) return;
        this.hasRendered = true;
        Promise.all([loadStyle(this, staticCSS)]);
    }
   

    @api editMode = false;
    @api buttonLabel = "EDIT";
    @api finalDecision = false;
    // @api refreshDataInHeader = false;
    editModeToggle(e) {
        console.log("App Component1 => " + e.detail);

        this.editMode = e.detail.toggleEditMode;
        this.buttonLabel = e.detail.buttonLabel;
        // this.refreshDataInHeader = e.detail.refreshData;
        if(e.detail.refreshData){
            this.template.querySelector('c-opportunity-header').refreshHeader();
        }
        console.log("App Component2 => " + e.detail);
        this.finalDecision = this.editMode && this.buttonLabel === "UPDATE";
    }


}