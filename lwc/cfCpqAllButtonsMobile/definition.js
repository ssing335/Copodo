let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625913125918-o3bbbgxuv","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1623821093875","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqAllButtonsMobile_1_Vlocity","Id":"0RbRN00000017Up0AI","ManageableState":"unmanaged","MasterLabel":"cfCpqAllButtonsMobile_1_Vlocity","NamespacePrefix":"c"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":["cpqInProgressSubmittedMobile"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqInProgressSubmittedMobile","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order InProgress Submitted"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-0","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-2","operator":"==","type":"custom","value":"In Progress"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-3","logicalOperator":"||","operator":"==","type":"custom","value":"Submitted"}],"id":"state-condition-1","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 1","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqReadyToSubmitCancelledMobile"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqReadyToSubmitCancelledMobile","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order ReadyToSubmit Cancelled"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-4","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-6","operator":"==","type":"custom","value":"Ready To Submit"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-7","logicalOperator":"||","operator":"==","type":"custom","value":"Cancelled"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-8","logicalOperator":"||","operator":"==","type":"custom","value":"Activated"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-9","logicalOperator":"||","operator":"==","type":"custom","value":"Complete"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-10","logicalOperator":"||","operator":"==","type":"custom","value":"Queued"}],"id":"state-condition-5","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 2","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqAmendRequestedMobile"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqAmendRequestedMobile","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order AmendRequested"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-4","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-6","operator":"==","type":"custom","value":"Amend Requested"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-7","logicalOperator":"||","operator":"==","type":"custom","value":"Rejected"}],"id":"state-condition-5","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 3","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqOrderStatusDiscardedMobile"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqOrderStatusDiscardedMobile","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order Discarded"},"size":{"default":"12","isResponsive":false},"stateIndex":3,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-11","operator":"==","type":"custom","value":"Order"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 4","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqQuoteButtonsMobile"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-2","name":"FlexCard","property":{"cardName":"cpqQuoteButtonsMobile","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Quote"},"size":{"default":"12","isResponsive":false},"stateIndex":4,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-12","operator":"==","type":"custom","value":"Quote"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Quote","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAllButtonsMobile","Id":"a798G00000004iaQAA","vlocity_cmt__GlobalKey__c":"cpqAllButtonsMobile/Vlocity/2/1623334999548"};
  export default definition