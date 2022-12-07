import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {

    constructor(){
        super();
        setTimeout(()=>{
            this.template.querySelector('.charterErrorIcon').classList.add('charterCustomStepborder');
        },1000);        
        // this.template.querySelector('.slds-progress-bar__value').style="background:lightgreen";
    }    
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
         }`;
        this.template.querySelector('lightning-progress-step').appendChild(style);

        // const style1 = document.createElement('style');
        // style1.innerText = `.charterErrorIcon button lightning-primitive-icon svg{
        //     display: none;            
        // }`;
        // this.template.querySelector('lightning-progress-step').appendChild(style1);

        // const style1 = document.createElement('style');
        // style.innerText = `.slds-progress{
        //     max-width: 89%;
        // }`;
        // this.template.querySelector('lightning-progress-indicator').appendChild(style1);
    }
}