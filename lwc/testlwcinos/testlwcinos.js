import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

export default class Testlwcinos extends OmniscriptBaseMixin(LightningElement) 
{
    AccountPhone;
    Name;
    UpdatedName;
    _omniJsonData;
    AdditionalInfo;
  @api
  set omniJsonData(omniData) {
    if (omniData) {
        this._omniJsonData = omniData;
        this.AccountPhone=omniData.AccountDetails.AccountPhone;
        //this.Name=omniData.UserInfo.Name;

        console.log('i m on 17 line');
    }
  }
  get omniJsonData() {
    return this._omniJsonData;
  }
  CallHandler(event)
  {
   let UpdatedName=event.target.value;
   if(this.omniJsonData)
   {

    let updateOmniJsonData = JSON.parse(JSON.stringify(this.omniJsonData));
    
    updateOmniJsonData.updateName=UpdatedName;
    this.omniApplyCallResp(updateOmniJsonData);
   }
  
    // let updateOmniJsonData = JSON.parse(JSON.stringify(this.omniJsonData));
    
    // updateOmniJsonData.UserInfo.Name=this.Name;
    // this.omniApplyCallResp(updateOmniJsonData);
  }
  updateHandler()
  {
    
  }
  Handler(event)
  {
    this.AdditionalInfo=event.target.value;
    console.log('anything');
    console.log('this is line 48'+ this.AdditionalInfo);
    let updateOmniJsonData = JSON.parse(JSON.stringify(this.omniJsonData)); 
    //updateOmniJsonData.TestElement = "upadted From LWC";
    //updateOmniJsonData.testObject2.Name = "updated name from LWC";
   // updateOmniJsonData.testObject2.Name = this.AdditionalInfo;
  //  updateOmniJsonData.testObject2.InfoCheck = this.AdditionalInfo;
    updateOmniJsonData.AccountDetails.InfoCheck1 = this.AdditionalInfo;
    updateOmniJsonData.AccountDetails.AccountName = this.AdditionalInfo;
   // updateOmniJsonData.InfoCheck2 = this.AdditionalInfo;
   // updateOmniJsonData.Name1 = this.AdditionalInfo;
   // updateOmniJsonData.UserInfo.Text3 = this.AdditionalInfo;
  //  console.log('this is line 58'+ updateOmniJsonData.UserInfo.Name);
   // console.log('updateOmniJsonData.UserInfo.InfoCheck2'+  updateOmniJsonData.UserInfo.InfoCheck2);
   // updateOmniJsonData.AdditionalInfo=this.AdditionalInfo;
    this.omniApplyCallResp(updateOmniJsonData);
  }
}