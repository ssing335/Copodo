import { LightningElement, wire, api, track } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';

import getPriceListEntryInfo from '@salesforce/apex/PriceListEntryClass.getPriceListEntryInfo';

import insertProductIntoCart from '@salesforce/apex/OpportunityClass.insertProductIntoCart';

import getCartItems from '@salesforce/apex/OpportunityClass.getCartItems';

import deleteCartItem from '@salesforce/apex/OpportunityClass.deleteCartItem';

import getOpportunity from '@salesforce/apex/OpportunityClass.getOpportunity';

import EYEICON from '@salesforce/resourceUrl/EYEICON';

import EDITICON from '@salesforce/resourceUrl/EDITICON';

import CHEVRONDOWNICON from '@salesforce/resourceUrl/CHEVRONDOWNICON';

import PLUSICON from '@salesforce/resourceUrl/PLUSICON';

import FILTERICON from '@salesforce/resourceUrl/FILTERICON';

import CHECKMARK from '@salesforce/resourceUrl/CHECKMARK';

import BINICON from '@salesforce/resourceUrl/binIcon';


// import { findConfigFile } from 'typescript';



export default class UpdatedCartUIForOpportunity extends NavigationMixin(LightningElement) {



    filerDataDD;


    @api recordId;
    @api wiredData;

    @api userDesiredDropdownValue = "a5ef0000000vNErAAM";

    opportunityName; accountName; oppId;

    @wire(getOpportunity, { recordId: '$recordId' }) wiredOpportunity({ data, error }) {
        if (data) {
            console.log(data);
            this.accountName = data[0].AccountName__c;
            this.opportunityName = data[0].Name;
            this.oppId = data[0].Id;
        } else {
            console.log(error);
        }
    }
    @wire(getPriceListEntryInfo, { recordId: '$userDesiredDropdownValue' }) wiredPriceListEntryInfo({ data, error }) {

        if (data) {
            // console.log(data);
            this.wiredData = data;

            this.filerDataDD = this.wiredData;

            this.error = undefined;

            console.log("wired data => "+JSON.stringify(this.wiredData));

            // this.firstData = this.wiredData[0].vlocity_cmt__ProductId__r.Name;

            // this.secondData = this.wiredData[1].vlocity_cmt__ProductId__r.Name;

            // console.log(this.firstData + ' ' + this.secondData);    



        } else {

            this.wiredData = undefined;

            this.error = error;

        }

    }





    eyeIcon = EYEICON;

    editIcon = EDITICON;

    chevronDown = CHEVRONDOWNICON;

    plusIcon = PLUSICON;

    filterIcon = FILTERICON;

    checkMark = CHECKMARK;

    binIcon = BINICON;

    rowVisible = false;

    priceListData = false;

    initialPriceListValue;

    tickCondition;

    promoMsg = false;

    discMsg = false;

    prodMsg = true;

    isCheckedProd = true;

    isCheckedPromo = false;

    isCheckedDisc = false;

    b2cTick = true;

    xTick = false;



    listData = ['Default RateCard', 'Tesla corp', 'Space X'];



    constructor() {

        super();

        this.initialPriceListValue = 'Default RateCard';  //B2C Charter Communications

        // setTimeout(() => {
            // this.handleLoad();
        // }, 2000);

    }

    isRenderedCallbackActionExecuted = false;

    renderedCallback() {
        if (this.isRenderedCallbackActionExecuted) {
            return;
        }
        this.isRenderedCallbackActionExecuted = true;
        
            this.handleSpinner("From renderedCallback");
        
        // setTimeout(() => {
            // this.handleLoad();
        // }, 2000);
    }

    connectedCallback(){
        this.handleLoad();
    }



    connectionCheckFilter(event) {
        console.log("event.currentTarget.id => " + event.currentTarget.id);
        if (event.currentTarget.id.includes('products')) {

            setTimeout(() => {

                this.template.querySelector('.searchPlaceholder').innerHTML = 'Products';

                this.template.querySelector('.chaterSearch').value = "Search Products";

            }, 500);

            this.promoMsg = false;

            this.discMsg = false;

            this.prodMsg = true;

            this.isCheckedProd = true;

            this.isCheckedPromo = false;

            this.isCheckedDisc = false;

        }

        if (event.currentTarget.id.includes('promotions')) {

            setTimeout(() => {

                this.template.querySelector('.searchPlaceholder').innerHTML = 'Promotions';

                this.template.querySelector('.chaterSearch').value = "Search Promotions";

            }, 500);

            this.promoMsg = true;

            this.discMsg = false;

            this.prodMsg = false;

            this.isCheckedProd = false;

            this.isCheckedPromo = true;

            this.isCheckedDisc = false;

        }

        if (event.currentTarget.id.includes('discounts')) {

            setTimeout(() => {

                this.template.querySelector('.searchPlaceholder').innerHTML = 'Discounts';

                this.template.querySelector('.chaterSearch').value = "Search Discounts";

            }, 500);

            this.discMsg = true;

            this.promoMsg = false;

            this.prodMsg = false;

            this.isCheckedProd = false;

            this.isCheckedPromo = false;

            this.isCheckedDisc = true;

        }

    }

    contentEditableOrNot(e) {

    }



    addProducts(e) {

        this.rowVisible = !this.rowVisible;
        // console.log(e.currentTarget, this.wiredData[Number(e.currentTarget.dataset.rowparam)]);

        // let targetObj = this.wiredData[Number(e.currentTarget.dataset.rowparam)];
        // let modifiedObj = {
        //     "ItemName" : targetObj.vlocity_cmt__ProductId__r.Name,
        //     "TotalQuantity":'$25',
        //      "RecurringCharge":'$25', "RecurringTotal":'$25',
        //       "OneTimeCharge":'$25', 
        //       "OneTimeTotal":'$25', 
        //       "Actions":'Add', 
        //       "Promotions":'HSN23..'
        // };
        // this.tabData.unshift(modifiedObj);
        // console.log(this.tabData);

    }



    priceListOptions() {

        this.priceListData = !this.priceListData;

    }



    listSelection(event) {

        this.initialPriceListValue = event.currentTarget.innerHTML;

        if (this.initialPriceListValue == 'Space X') {

            this.userDesiredDropdownValue = 'a5ef0000000vNEwAAM';

            this.promoMsg = false;

            this.discMsg = false;

            this.b2cTick = false;

            this.xTick = true;

        }

        else if (this.initialPriceListValue === 'Default RateCard') {

            this.userDesiredDropdownValue = 'a5ef0000000vNErAAM';

            this.promoMsg = false;

            this.discMsg = false;

            this.b2cTick = true;

            this.xTick = false;

        }

        // console.log(this.APIPriceListsCpqV2.getPriceLists({
        //     methodName: getPriceLists
        //     cartId: 80146000000 iwCx
        //     pagesize: 2
        // }));    

        this.priceListData = false;

    }



    updateSearch(event) {

        this.filerDataDD = [];

        var reg = event.target.value.toLowerCase();



        for (let i = 0; i < this.wiredData.length; i++) {

            if (this.wiredData[i].vlocity_cmt__ProductId__r.Name.toLowerCase().match(reg)) {

                this.filerDataDD[i] = this.wiredData[i];

            }

        }

        this.filerDataDD = this.filerDataDD.filter(function (el) {

            return el != null;

        });

        console.log(this.filerDataDD);

    }




    @track loaded = false;

    handleSpinner(str, loadedParameterValue = true) {
        console.log("handleSpinner called from => " + str);
        this.loaded = !this.loaded;
        if (this.loaded) {
            this.template.querySelector('.exampleHolder').style.display = "none";
        }

    }


    // skelData = [{ItemName:'Fiber Access ++', TotalQuantity:'$125', RecurringCharge:'$125', RecurringTotal:'$125', OneTimeCharge:'$25', OneTimeTotal:'$25', Actions:'Add', Promotions:'HSN23..'},

    // {ItemName:'Fiber connection', TotalQuantity:'$125', RecurringCharge:'$125', RecurringTotal:'$125', OneTimeCharge:'$25', OneTimeTotal:'$25', Actions:'Add', Promotions:'HSN23..'}];

    skelData = [];

    @track targetObj;
    @track ItemName;
    @track tabData = [];
    @track stringFromGetOpportunity;
    @track arr;
    @api cartId;

    handleLoad() {
        this.cartId = this.recordId;

           console.log("cartId => "+this.cartId, this.oppId);
        // setTimeout(()=>{
        // console.log("cartId => "+this.cartId);
        getCartItems({ recordId: this.cartId }).then(successMsg => {

            // this.template.querySelector('lightning-spinner').handleClick();
            // stringFromGetOpportunity = JSON.stringify(successMsg);
            // console.log("Got Cart Products =>" + JSON.stringify((successMsg)));
            // for(i=0;i<JSON.stringify(successMsg);i++){
            //     console.log(JSON.stringify(successMsg[i]));
            // }
            // stringFromGetOpportunity = ;

            // console.log((successMsg));
            // successMsg.map(element => console.log(element));
            //    console.log("Got cart Products => "+this.stringFromGetOpportunity);
            this.stringFromGetOpportunity = successMsg;
            console.log(this.stringFromGetOpportunity);
            if(this.stringFromGetOpportunity.result.records === undefined) {
                return;
            }
            this.arr = this.stringFromGetOpportunity.result.records;
            console.log(this.arr);
            for (let i = 0; i < this.arr.length; i++) {
                console.log(this.arr[i].fields.Id.value); 
                console.log("Item no. =>"+(i+1));
                console.log(i + "th record : Name =>" + JSON.stringify(this.arr[i].fields.Name));
                console.log(i + "th record : Recurring Price =>", "$" + JSON.stringify(this.arr[i].fields.vlocity_cmt__RecurringPrice__c));
                console.log(i + "th record : Quantity =>" + JSON.stringify(this.arr[i].fields.Quantity.value));
                console.log(i + "th record : Effective Recurring Total =>" + JSON.stringify(this.arr[i].fields.vlocity_cmt__EffectiveRecurringTotal__c.value));
                console.log(i + "th record : One Time Charge =>" + JSON.stringify(this.arr[i].fields.vlocity_cmt__OneTimeCharge__c.value));
                console.log(i + "th record : One Time Total =>" + JSON.stringify(this.arr[i].fields.vlocity_cmt__OneTimeTotal__c.value));
                console.log(i + "th record : Action =>" + JSON.stringify(this.arr[i].fields.action));

                let modifiedObj = {
                    "ItemName": this.arr[i].fields.Name,
                    "RecurringCharge": "$" + (this.arr[i].fields.vlocity_cmt__RecurringPrice__c),
                    "TotalQuantity": +(this.arr[i].fields.Quantity.value),
                    "RecurringTotal": "$" + (this.arr[i].fields.vlocity_cmt__EffectiveRecurringTotal__c.value),
                    "OneTimeCharge": "$" + (this.arr[i].fields.vlocity_cmt__OneTimeCharge__c.value),
                    "OneTimeTotal": "$" + (this.arr[i].fields.vlocity_cmt__OneTimeTotal__c.value),
                    "Actions": (this.arr[i].fields.action),
                    "LineItemId": this.arr[i].fields.Id.value
                };
                // console.log("LineItemId => "+this.arr[i].fields.Id.value);
                console.log("modifiedObj => " + JSON.stringify(modifiedObj));

                // console.log("pre tabData => " +JSON.stringify(this.tabData));
                this.tabData.push((modifiedObj));
                // console.log("post tabData => " +JSON.stringify(this.tabData));


            }
            //  getWhileLoading().then(tabData =>{
            //         console.log("tabData from handleLoad => " + tabData);
            //     }).catch(error =>{
            //         console.log("Error => "+error);
            //     });



            // this.handleSpinner("From handleLoad");
            // console.log("Done with UI changes");
            // return this.arr;
        })
            .catch(error => {
                console.log("Error final => " + (error));
            });
        // },1000);
    }
    @api loaded = false;
    @api toBeAddedProduct = [];
    @track demoArrForInsert = [];
    addDum(e) {



        // this.handleSpinner("From addDum", true);
        // this.loaded = false;
        this.targetObj = this.wiredData[Number(e.currentTarget.dataset.rowparam)];
        // targetObj.vlocity_cmt__ProductId__r.Name;
        this.ItemName = "cool";
        // setTimeout(function(){
        this.ItemName = this.targetObj.vlocity_cmt__ProductId__r.Name;
        // console.log("target Object => "+ JSON.stringify(targetObj));    
        console.log(this.ItemName);
        //Fiber Connect +    Test Product    Fiber Internet Connection
        let modifiedObj = {};
        if (this.ItemName === 'Fiber Connect +') {
            modifiedObj = {
                "ItemName": this.ItemName,
                "TotalQuantity": '1',
                "RecurringCharge": '$50',
                "RecurringTotal": '$50',
                "OneTimeCharge": '$0',
                "OneTimeTotal": '$0',
                "Actions": 'Add',
                "Promotions": 'HSN23..',
                // "LineItemId" : ,

            };
        } else if (this.ItemName === 'Test Product') {
            modifiedObj = {
                "ItemName": this.ItemName,
                "TotalQuantity": '1',
                "RecurringCharge": '$0',
                "RecurringTotal": '$0',
                "OneTimeCharge": '$200',
                "OneTimeTotal": '$200',
                "Actions": 'Add',
                "Promotions": 'HSN23..',
                // "LineItemId" : ,

            };
        } else if (this.ItemName === 'Fiber Internet Connection') {
            modifiedObj = {
                "ItemName": this.ItemName,
                "TotalQuantity": '1',
                "RecurringCharge": '$95',
                "RecurringTotal": '$95',
                "OneTimeCharge": '$250',
                "OneTimeTotal": '$550',
                "Actions": 'Add',
                "Promotions": 'HSN23..',
                // "LineItemId" : ,

            };
        }
        else if (this.ItemName === 'Fiber Internet Access') {
            modifiedObj = {
                "ItemName": this.ItemName,
                "TotalQuantity": '1',
                "RecurringCharge": '$100',
                "RecurringTotal": '$100',
                "OneTimeCharge": '$950',
                "OneTimeTotal": '$2100',
                "Actions": 'Add',
                "Promotions": 'HSN23..',
                // "LineItemId" : ,

            };
        } else {
            modifiedObj = {
                "ItemName": this.ItemName,
                "TotalQuantity": '1',
                "RecurringCharge": '$25',
                "RecurringTotal": '$25',
                "OneTimeCharge": '$25',
                "OneTimeTotal": '$25',
                "Actions": 'Add',
                "Promotions": 'HSN23..',
                // "LineItemId" : ,

            };
        }
        console.log(this.recordId, this.wiredData[Number(e.currentTarget.dataset.rowparam)].vlocity_cmt__ProductId__r.Name);
        insertProductIntoCart({ recordId: this.recordId, productName: this.wiredData[Number(e.currentTarget.dataset.rowparam)].vlocity_cmt__ProductId__r.Name }).then(successMsg => {
            // this.handleSpinner("from insertProductIntoCart", false);
            console.log("Inserted Successfully" + JSON.stringify(successMsg));
            this.demoArrForInsert = successMsg.result.records;
            console.log(this.demoArrForInsert);
            modifiedObj.LineItemId = ((this.demoArrForInsert[0].fields.vlocity_cmt__OpportunityGroupId__c.actions.availablesites.remote.params.id));
            // console.log(JSON.stringify(this.demoArrForInsert));
            for (let i = 0; i < this.demoArrForInsert.length; i++) {
                // console.log("demoArrForInsert[" + i +"] => " + JSON.stringify(this.demoArrForInsert[i]));
            }
            this.tabData.unshift(modifiedObj);

            console.log(this.tabData, modifiedObj);
        }).catch(error => {
            console.log("Error" + (error));
        })

        // console.log(this.ItemName);

        // this.tabData.push(JSON.parse(JSON.stringify(this.skelData[this.skelData.length-1])))
        // for(let i=0; i<this.skelData.length; i++){

        //     this.tabData.push(JSON.parse(JSON.stringify(this.skelData[i])));

        // }        

        // console.log('tabData => '+JSON.stringify(this.tabData[0].ItemName));


        // this.toBeAddedProduct = e.currentTarget.dataset.rowparam;
        // console.log(this.toBeAddedProduct);
        // console.log(e.currentTarget.id);
        // setTimeout(()=>{
        // console.log("ItemName in setTimeout => "+ this.ItemName);


        // }, 500);

    }

    canEditRow = false;

    editRow(e) {
        // this.canEditRow = !this.canEditRow;
        console.log(e.currentTarget.dataset.rowparam, e.currentTarget.dataset.rowparam, e.target.dataset.rowparam);
        // this.handleLoad();
        let rowNo = e.currentTarget.dataset.rowparam;
        console.log(this.tabData[rowNo], this.arr[rowNo]);
    }

    @track savedRecordIdForDeletion;
    @track rowContentForDeletion;
    delDum() {
        // console.log(this.recordId, this.arr[e.currentTarget.dataset.rowparam].fields.Id.value);
        // console.log(this.tabData[e.currentTarget.dataset.rowparam]);
        // this.handleLoad();
        // this.tabData = [];
        // "tabData => "+JSON.stringify(this.tabData)  
        console.log("Event Object from delDum => " + this.eventObject);
        this.isModalOpen = false;
        // console.log("row no. => "+this.eventObject.target.dataset.rowparam, "reocrd from tabData => "+(this.tabData[this.eventObject.target.dataset.rowparam].LineItemId));
        deleteCartItem({ recordId: this.savedRecordIdForDeletion, oppLineItemId: (this.rowContentForDeletion) }).then(successMsg => {
            console.log(successMsg.result.messages);
            let msg = successMsg.result.messages[0].message;

            if (msg === "Successfully deleted.") {
                this.tabData.splice(this.eventObject.target.dataset.rowparam, 1);
                location.reload();
                // console.log(e.currentTarget.dataset.rowparam, e.currentTarget.dataset.rowparam, e.target.dataset.rowparam);
            }
            else {

                location.reload();
                //     deleteCartItem({recordId : this.recordId, oppLineItemId : (this.tabData[e.target.dataset.rowparam].LineItemId)}).then(function(){
                //         if(msg === "Successfully deleted."){
                //     this.tabData.splice(e.target.dataset.rowparam, 1);
                // // console.log(e.currentTarget.dataset.rowparam, e.currentTarget.dataset.rowparam, e.target.dataset.rowparam);
                // }
                //     })
            }

        }).catch(() => {
            console.log("Inside catch");
        })
        // console.log(this.tabData);

    }

    handleNavigation() {
        //     this[NavigationMixin.Navigate]({
        //      type: 'standard__component',
        //      attributes: {
        //         //  componentName: 'c__opportunityCartToRecordPage'
        //         url: `https://cgdevops--vprime.lightning.force.com/lightning/r/Opportunity/${this.recordId}/view`
        //      },
        //      state: {
        //          c__recordId: this.recordId
        //      }
        //  });
        window.open(`https://cgdevops--vprime.lightning.force.com/lightning/r/Opportunity/${this.recordId}/view`, "_self");
    }
    @track isModalOpen = false;
    openModal(e) {
        // to open modal set isModalOpen tarck value as true
        this.eventObject = e;
        this.savedRecordIdForDeletion = this.recordId;
        this.rowContentForDeletion = this.tabData[e.target.dataset.rowparam].LineItemId;
        console.log("row no. => " + this.savedRecordIdForDeletion, "record from tabData => " + (this.rowContentForDeletion));
        this.isModalOpen = true;
        console.log("Event Object from openModal => " + e);
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails(e) {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        // this.isModalOpen = false;
        // this.delDum(e);
    }

}