import { LightningElement, api, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
// import { refreshApex } from '@salesforce/apex';
import { getRecordNotifyChange } from 'lightning/uiRecordApi';
import cartIconImport from '@salesforce/resourceUrl/cartIcon';
import getOpportunity from '@salesforce/apex/OpportunityClass.getOpportunity';
// import oppName  from '@salesforce/schema/Opportunity.Name';
// import LOADICON from '@salesforce/resourceUrl/loadIcon';

// import STAGE from '@salesforce/schema/Opportunity.StageName';

 

export default class OpportunityHeader extends NavigationMixin(LightningElement) {

    @api recordId;
    @api objectNameApi;
    // @api refreshDataInHeader = false;


    // renderedCallback(){
    //     // const style = document.createElement('style');
    //     // style = `
    //     // span.slds-page-header__name-meta {
    //     //     font-size: 14px;
    //     // }
    //     // `;
    //     // console.log("test => "+this.template.querySelector('# id="header__info"'));
        
    // }


    @api wiredData;
    opportunityName; accountName; closeDate; ownerName; STAGE;
    @wire(getOpportunity,{recordId : '$recordId'}) wiredOpportunity({data, error}){
        console.log("data from line 37 = > "+data);
        if(data){
            console.log(data);
            this.opportunityName = data[0].Name;
            this.accountName = data[0].AccountName__c;
            this.closeDate = data[0].CloseDate;
            this.ownerName = data[0].Owner.Name;
            this.STAGE = data[0].StageName;
            console.log("data => "+JSON.stringify(data));
        }else if(error) {
            console.log("Error found =>"+error);
        }
    }
 
    @api async refreshHeader() {
        console.log("wiredOpportunity => "+JSON.stringify(this.wiredOpportunity));
        console.log("Inside refreshHeader" );
        // if(refreshDataInHeader){
        //    refreshApex(this.opportunityName);
        console.log(this.recordId);
        getRecordNotifyChange([{recordId: this.recordId}]);
        // }
        
    }

    // opportunity = wiredOpportunity.Name;

    cartIcon = cartIconImport;

    constructor(){

        super();

        setTimeout(()=>{

            this.template.querySelector('.charterErrorIcon').classList.add('charterCustomStepborder');

        },1000);        

        // this.template.querySelector('.slds-progress-bar__value').style="background:lightgreen";

    }    
    // LoadIcon = LOADICON;
    renderedCallback() {

        const style = document.createElement('style');

        style.innerText = `.slds-progress-bar__value{

            background: lightgreen;

        }

        .slds-progress__item.slds-is-completed .slds-progress__marker_icon{

            color: lightgreen;

        }

        .slds-progress__marker{

            border: 2px solid white;

        }

        .slds-progress{

             max-width: 89%;

         }
         `;

         

        this.template.querySelector('lightning-progress-step').appendChild(style);
        // .slds-progress__marker.slds-button_icon.slds-progress__marker_icon
        // let step = this.template.querySelector('[id^=charterErrorIcon]');
        // console.log(step);
        this.stepProgress();
          
            
       

 

        // const style1 = document.createElement('style');

        // style.innerText = `.slds-progress{

        //     max-width: 89%;

        // }`;

        // this.template.querySelector('lightning-progress-indicator').appendChild(style1);

    }

    // handleProgressChange(){
    //     if
    // }

    connectedCallback(){
        // Promise.all([loadStyle(this, LOADICON  )]).then(()=>{
        //     // let target = this.template.querySelector('.charterErrorIcon .slds-button .slds-progress__marker slds-button_icon .slds-progress__marker_icon')
        //     // console.log(target);
        //     console.log("Inside NavigationMixin");
        // })
    }

    handleNavigation() {
        this[NavigationMixin.Navigate]({
         type: 'standard__component',
         attributes: {
             componentName: 'c__opportunityRecordPageToCart'
         },
         state: {
             c__recordId: this.recordId
         }
     });
    }
    @track progress = "0";
    stepProgress(){
        console.log("Inside progress");
        if(this.STAGE === 'Prospecting'){
            console.log(2);
            this.progress = "2";
            return 2;
        }else if(this.STAGE === 'Qualification'){
            console.log(3);
            this.progress = "3";
            return 3;
        }else if(this.STAGE === 'Needs Analysis'){
            console.log(4);
            this.progress = "4";
            return 4;
        }else if(this.STAGE === 'Value Proposition'){
            console.log(5);
            this.progress = "5";
            return 5;
        }else if(this.STAGE === 'Id. Decision Makers'){
            console.log(6);
            this.progress = "6";
            return 6;
        }else if(this.STAGE === 'Perception Analysis'){
            console.log(7);
            this.progress = "7";
            return 7;
        }else if(this.STAGE === 'Proposal/Price Quote'){
            console.log(8);
            this.progress = "8";
            return 8;
        }else if(this.STAGE === 'Negotiation/Review'){
            console.log(9);
            this.progress = "9";
            return 9;
        }else if(this.STAGE === 'Closed Won'){
            console.log(10);
            this.progress = "10";
            return 10;
        }else if(this.STAGE === 'Closed Lost'){
            console.log(11);
            this.progress = "11";
            return 11;
        }else if(this.STAGE === 'Order in Progress'){
            console.log(12);
            this.progress = "12";
            return 11;
        }
        else if(this.STAGE === 'Won'){
            console.log(13);
            this.progress = "13";
            return 13;
        }

    }

}