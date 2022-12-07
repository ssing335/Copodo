import { LightningElement, api, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import OPPORTUNITY from '@salesforce/schema/Opportunity';
import OPPORTUNITY_ID from '@salesforce/schema/Opportunity.Id';
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

export default class RecordPage extends LightningElement {
    @api recordId;
    @api objectApiName;
  


    oppOwner = OPPORTUNITY_OWNER; oppName = NAME_FIELD; accName = ACCOUNT_NAME; oppType = OPPORTUNITY_TYPE; 
    primaryCampaignSource = PRIMARY_CAMPAIGN_SOURCE; 
    productionType = PRODUCTION_TYPE; closeDate = CLOSE_DATE; stage = STAGE; probability = PROBABILITY; amount = AMOUNT; 
    fields = [OPPORTUNITY_OWNER,NAME_FIELD, ACCOUNT_NAME, OPPORTUNITY_TYPE, PRIMARY_CAMPAIGN_SOURCE, //ENGINEERING_REQUIRED, 
        PRODUCTION_TYPE, CLOSE_DATE, STAGE, PROBABILITY, AMOUNT];

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


    nameChange; probabilityChange; closeDateChange; productionTypeChange; PrimaryCampaignSource; accNameChange; amountChange; stageChange;
    handleChange(e){
        if(e.target.name === "nameChange"){
            this.nameChange = e.target.value;
            console.log(this.oppName);
        }else if(e.target.name === "productionTypeChange"){
            this.productionTypeChange = e.target.value;
            console.log(this.productionTypeChange);
        }else if(e.target.name === "probabilityChange"){
            this.probabilityChange = e.target.value;
            console.log(this.probabilityChange);
        }else if(e.target.name === "closeDateChange"){
            this.closeDateChange = e.target.value;
            console.log(this.closeDate, this.closeDateChange);
        }else if(e.target.name === "PrimaryCampaignSource"){
            this.PrimaryCampaignSource = e.target.value;
            console.log(this.PrimaryCampaignSource);
        }else if(e.target.name === "accNameChange"){
            this.accNameChange = e.target.value;
            console.log(this.accNameChange);
        }else if(e.target.name === "amountChange"){
            this.amountChange = e.target.value;
            console.log(this.amountChange);
        }else if(e.target.name === "stageChange"){
            this.stageChange = e.target.value;
            console.log(this.stage);
        }
        
    }
    @api hoveredItem = false;
    handleHover(e) {
        this.hoveredItem != this.hoveredItem;
    }






    @api toggleEditMode = false;
    @api buttonLabel = "UPDATE";

    editModeStatusToParent(e) {
        this.toggleEditMode = !this.toggleEditMode;


        const fields = {};

        fields[OPPORTUNITY_ID.fieldApiName] = this.recordId;
        fields[NAME_FIELD.fieldApiName] = this.nameChange;
        fields[PROBABILITY.fieldApiName] = this.probabilityChange;
        fields[CLOSE_DATE.fieldApiName] = this.closeDateChange;
        // fields[PRODUCTION_TYPE.fieldApiName] = this.productionTypeChange;
        fields[STAGE.fieldApiName] = this.stageChange;
        fields[ACCOUNT_NAME.fieldApiName] = this.accNameChange;

        const recordInput = {   
            fields: fields
          };

        updateRecord(recordInput).then(function(record) {
           
            console.log("record to be updated => " +JSON.stringify(record));
            location.reload();
            this.template.querySelector('c-opportunity-header').stepProgress();
            
            // const event = new ShowToastEvent({
            //     title: 'Toast message',
            //     message: 'Toast Message',
            //     variant: 'success',
            //     mode: 'dismissable'
            // });
            // this.dispatchEvent(event);
          }).catch((error) => {
              console.log("Error found => "+(error));
          });
        

            if(this.toggleEditMode == true){
                // console.log("recordPage=> Inside button label change " + this.buttonLabel);
                this.buttonLabel = "EDIT";
                // console.log("recordPage=> Inside button label change " + this.buttonLabel);
            }
    
            this.dispatchEvent(new CustomEvent('pass', { detail: {
                toggleEditMode : this.toggleEditMode,
                buttonLabel : this.buttonLabel,
                refreshData : true
            }}));  
            setTimeout(function(){
            // const event = new ShowToastEvent({
            //     title: 'Toast message',
            //     message: 'Toast Message',
            //     variant: 'success',
            //     mode: 'dismissable'
            // });
            this.dispatchEvent(event);
            
        }, 4000);
        
        
       
    }

    loadStyles(style) {
        console.log("Inside loadStyles");
        this.template.querySelector('.record-form-spinner-holder').appendChild(style);
    }
    
}