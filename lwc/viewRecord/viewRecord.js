import { LightningElement, api } from 'lwc';
import OPPORTUNITY_OWNER from '@salesforce/schema/Opportunity.OwnerId';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_NAME from '@salesforce/schema/Opportunity.AccountId';
import  OPPORTUNITY_TYPE from '@salesforce/schema/Opportunity.Type';
import PRIMARY_CAMPAIGN_SOURCE from '@salesforce/schema/Opportunity.CampaignId';
//import ENGINEERING_REQUIRED from '@salesforce/schema/Opportunity.EngineeringRequired__c';
import PRODUCTION_TYPE from '@salesforce/schema/Opportunity.product_type__c';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import STAGE from '@salesforce/schema/Opportunity.StageName';
import PROBABILITY from '@salesforce/schema/Opportunity.Probability';
import AMOUNT  from '@salesforce/schema/Opportunity.Amount';

export default class ViewRecord extends LightningElement {

    @api recordId;
    @api objectApiName;

    

   // fieldss = FIELDSS;
    oppOwner = OPPORTUNITY_OWNER; oppName = NAME_FIELD; accName = ACCOUNT_NAME; oppType = OPPORTUNITY_TYPE;
     primaryCampaignSource = PRIMARY_CAMPAIGN_SOURCE; 
    productionType = PRODUCTION_TYPE; closeDate = CLOSE_DATE; stage = STAGE; probability = PROBABILITY; amount = AMOUNT; 
    // fields = [OPPORTUNITY_OWNER,NAME_FIELD, ACCOUNT_NAME, OPPORTUNITY_TYPE, PRIMARY_CAMPAIGN_SOURCE, //ENGINEERING_REQUIRED, 
    //     PRODUCTION_TYPE, CLOSE_DATE, STAGE, PROBABILITY, AMOUNT, ACCOUNT_NAME, OPPORTUNITY_TYPE];

    fields = [NAME_FIELD, CLOSE_DATE, PROBABILITY, STAGE,
              NAME_FIELD, CLOSE_DATE, PROBABILITY, STAGE,
              NAME_FIELD, CLOSE_DATE, PROBABILITY, STAGE,
              NAME_FIELD, CLOSE_DATE, PROBABILITY, STAGE];
              
    activeSections = ['A', 'C'];
    activeSectionsMessage = '';

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }

    handleSubmit(event){
        //you can change values from here
        //const fields = event.detail.fields;
        //fields.Name = 'My Custom  Name'; // modify a field
        console.log('Opportunity detail : ',event.detail.fields);
        console.log('Opportunity name : ',event.detail.fields.Name);
    }
    @api toggleEditMode = false;
    @api buttonLabel = "EDIT";
    editModeStatusToParent() {
        // this.event.target.label.style.fontweight = '900';  
        this.toggleEditMode = !this.toggleEditMode;
        
        //const editButton = this.template.querySelector("#edit-button");

        if(this.toggleEditMode == true){
            console.log("Inside button label change " + this.buttonLabel);
            this.buttonLabel = "UPDATE";
            console.log("Inside button label change " + this.buttonLabel);
        }

        this.dispatchEvent(new CustomEvent('pass', { detail: {
            toggleEditMode : this.toggleEditMode,
            buttonLabel : this.buttonLabel
        }}));  

        console.log("Inside editModeStatusToParent func in viewRecord component" + "toggleEditMode =>" + this.toggleEditMode);
    }

}