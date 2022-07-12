let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"cartId":"{Parent.cartId}"},"ipMethod":"CPQ_GetAppliedDiscounts","resultVar":"[\"response\"][\"records\"]","vlocityAsync":false}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625914116480-2cg87hy5a","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1614712284583","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625914142459-nmcxe4mdw","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1625914139433","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_apply_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_apply_response","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625914116480-qdtxy1ndt","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1614712702801","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1625914142459-ohpgei5oq","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1625914150598","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_delete_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_delete_response","eventtype":"pubsub","key":"event-1","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqAppliedDiscounts_1_Vlocity","Id":"0Rb5g000000QVBTCA4","ManageableState":"unmanaged","MasterLabel":"cfCpqAppliedDiscounts_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"states":[{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-0-Field-0","key":"element_element_element_block_0_0_block_0_0_outputField_0_0","name":"Field","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","label":"{Allocation['selectedDiscountType']['value']}","placeholder":"{name}","record":"{record}","styles":{"label":{"textAlign":"left"}},"type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields uppercase","container":{"class":""},"customClass":"cpq-discounts_fields uppercase","elementStyleProperties":{"styles":{"label":{"textAlign":"left"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields uppercase","container":{"class":""},"customClass":"cpq-discounts_fields uppercase","elementStyleProperties":{"styles":{"label":{"textAlign":"left"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-0-Text-1","key":"element_element_element_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"vlocity_cmt__AppliesToAllItems__c.value","id":"state-new-condition-7","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BLabel.CPQAppliesToAllItems%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_discount_applies_all","container":{"class":""},"customClass":"cpq_discount_applies_all","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_discount_applies_all","container":{"class":""},"customClass":"cpq_discount_applies_all","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"8","isResponsive":true,"large":"4","medium":"12","small":"8"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"8","isResponsive":true,"large":"4","medium":"12","small":"8"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_12-of-12 slds-small-size_8-of-12 slds-size_8-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Field-0","key":"element_element_element_block_0_0_block_1_0_outputField_0_0","name":"Field","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"fieldName":"","label":"{Label.CPQApproval}","placeholder":"","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields, cpq-discounts_dynamic-align","container":{"class":""},"customClass":"cpq-discounts_fields, cpq-discounts_dynamic-align","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Block-1-Icon-1","key":"element_element_element_block_0_0_block_1_0_flexIcon_1_0","name":"Icon","parentElementKey":"element_element_block_0_0_block_1_0","property":{"color":"#FFFFFF","data-conditions":{"group":[{"field":"Status[\"value\"]","id":"state-new-condition-10","operator":"==","type":"custom","value":"Approved"},{"field":"Status[\"value\"]","id":"state-new-condition-2","logicalOperator":"||","operator":"==","type":"custom","value":"Not Submitted"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon-action-approval slds-icon_container--circle","iconName":"action:approval","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"notsubmit__icon","container":{"class":""},"customClass":"notsubmit__icon","elementStyleProperties":{"color":"#FFFFFF"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"approved__icon","container":{"class":""},"customClass":"approved__icon","elementStyleProperties":{"color":"#FFFFFF"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"conditionString":"Status[\"value\"] == Approved","conditions":{"group":[{"field":"Status[\"value\"]","id":"state-new-condition-20","operator":"==","type":"custom","value":"Approved"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":false,"isopen":true,"key":1,"label":"Approved","name":"Approved","styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"approved__icon","container":{"class":""},"customClass":"approved__icon","elementStyleProperties":{"color":"#FFFFFF"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"conditionString":"Status[\"value\"] == Not Submitted","conditions":{"group":[{"field":"Status[\"value\"]","id":"state-new-condition-27","operator":"==","type":"custom","value":"Not Submitted"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":2,"label":"Not Submitted","name":"Not Submitted","styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"notsubmit__icon","container":{"class":""},"customClass":"notsubmit__icon","elementStyleProperties":{"color":"#FFFFFF"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-2-clone-0","key":"element_element_element_block_0_0_block_1_0_outputField_2_0","name":"Text","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Status[\"value\"]","id":"state-new-condition-40","operator":"==","type":"custom","value":"Not Submitted"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BLabel.CPQNotSubmitted%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 10px;\ncolor: rgba(0, 0, 0, 0.6);","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         font-size: 10px;\ncolor: rgba(0, 0, 0, 0.6);","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 10px;\ncolor: rgba(0, 0, 0, 0.6);","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         font-size: 10px;\ncolor: rgba(0, 0, 0, 0.6);","text":{"align":"center","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_0_block_1_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":true,"large":"2","medium":"2","small":"4"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"4","isResponsive":true,"large":"2","medium":"2","small":"4"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_2-of-12 slds-small-size_4-of-12 slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-clone-0-Field-0","key":"element_element_element_block_0_0_block_2_0_outputField_0_0","name":"Field","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][0]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"One-time"},{"field":"Discount['discounts'][0]['value']","id":"state-new-condition-53","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Discount['discounts'][0]['chargeType']}","placeholder":"{Discount['discounts'][0]['value']} {Discount['discounts'][0]['selectedAdjustmentMethod']['value']}","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-2-Field-0-clone-0","key":"element_element_element_block_0_0_block_2_0_outputField_1_0","name":"Field","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][0]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"One-time"},{"field":"Discount['discounts'][0]['value']","id":"state-new-condition-53","logicalOperator":"&&","operator":"==","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Label.OmniOneTime}","placeholder":"-","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-2-Field-1-clone-1","key":"element_element_element_block_0_0_block_2_0_outputField_2_0","name":"Field","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][1]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"One-time"},{"field":"Discount['discounts'][1]['value']","id":"state-new-condition-53","logicalOperator":"&&","operator":"==","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Label.OmniOneTime}","placeholder":"-","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-2-Field-0-clone-0","key":"element_element_element_block_0_0_block_2_0_outputField_3_0","name":"Field","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][1]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"One-time"},{"field":"Discount['discounts'][1]['value']","id":"state-new-condition-65","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Discount['discounts'][1]['chargeType']}","placeholder":"{Discount['discounts'][1]['value']} {Discount['discounts'][1]['selectedAdjustmentMethod']['value']}","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-2","key":"element_element_block_0_0_block_2_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":true,"large":"2","medium":"3","small":"3"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":true,"large":"2","medium":"3","small":"3"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_3-of-12 slds-small-size_3-of-12 slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-clone-0-Field-0","key":"element_element_element_block_0_0_block_3_0_outputField_0_0","name":"Field","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][1]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"Recurring"},{"field":"Discount['discounts'][1]['value']","id":"state-new-condition-102","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Discount['discounts'][1]['chargeType']}","placeholder":"{Discount['discounts'][1]['value']} {Discount['discounts'][1]['selectedAdjustmentMethod']['value']}","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-3-Field-0-clone-0","key":"element_element_element_block_0_0_block_3_0_outputField_1_0","name":"Field","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][1]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"Recurring"},{"field":"Discount['discounts'][1]['value']","id":"state-new-condition-85","logicalOperator":"&&","operator":"==","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Label.DCRecurring}","placeholder":"-","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-3-Field-1-clone-0","key":"element_element_element_block_0_0_block_3_0_outputField_2_0","name":"Field","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][0]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"Recurring"},{"field":"Discount['discounts'][0]['value']","id":"state-new-condition-85","logicalOperator":"&&","operator":"==","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Label.DCRecurring}","placeholder":"-","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-3-Field-0-clone-0","key":"element_element_element_block_0_0_block_3_0_outputField_3_0","name":"Field","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Discount['discounts'][0]['chargeType']","id":"state-new-condition-0","operator":"==","type":"custom","value":"Recurring"},{"field":"Discount['discounts'][0]['chargeType']","id":"state-new-condition-125","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"{Discount['discounts'][0]['chargeType']}","placeholder":"{Discount['discounts'][0]['value']} {Discount['discounts'][0]['selectedAdjustmentMethod']['value']}","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-3","key":"element_element_block_0_0_block_3_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":true,"large":"2","medium":"3","small":"3"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":true,"large":"2","medium":"3","small":"3"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_3-of-12 slds-small-size_3-of-12 slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-2-clone-0-Field-0","key":"element_element_element_block_0_0_block_4_0_outputField_0_0","name":"Field","parentElementKey":"element_element_block_0_0_block_4_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"vlocity_cmt__Duration__c['value']","id":"state-new-condition-14","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"fieldName":"","label":"{Label.CPQDuration}","placeholder":"{vlocity_cmt__Duration__c['value']} {vlocity_cmt__DurationUnitOfMeasure__c['value']}","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-4-Field-0-clone-0","key":"element_element_element_block_0_0_block_4_0_outputField_1_0","name":"Field","parentElementKey":"element_element_block_0_0_block_4_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"vlocity_cmt__Duration__c['value']","id":"state-new-condition-14","operator":"==","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"fieldName":"","label":"{Label.CPQDuration}","placeholder":"-","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_fields","container":{"class":""},"customClass":"cpq-discounts_fields","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-4","key":"element_element_block_0_0_block_4_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":true,"large":"1","medium":"2","small":"3"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"padding-right: 0px;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":true,"large":"1","medium":"2","small":"3"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_2-of-12 slds-small-size_3-of-12 slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         padding-right: 0px;","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-0-Block-3-clone-0-Action-0","key":"element_element_element_block_0_0_block_5_0_action_0_0","name":"Action","parentElementKey":"element_element_block_0_0_block_5_0","property":{"actionList":[{"card":"{card}","iconColor":"#333","iconSize":"small","record":"{record}","stateAction":{"displayName":"","eventName":"cpq_{recordId}","extraParams":{"actionObjName":"deleteDiscount","handleResponseMethod":"processDeleteDiscountResponse","input":"{\"ipMethod\":\"CPQ_DeleteCartDiscount\"}","methodName":"deleteDiscount","record":"{record}","responseEventName":"cpq_discount_delete_response"},"hasExtraParams":true,"id":"flex-action-1628448402959","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"utility:close"},"stateObj":"{record}"}],"card":"{card}","displayAsButton":true,"hideActionIcon":false,"iconColor":"#333","iconName":"utility:close","iconOnly":true,"iconSize":"small","label":"\\ remove {name} discount","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{"iconColor":"#333","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"right","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-5","key":"element_element_block_0_0_block_5_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":true,"large":"1","medium":"2","small":"3"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__applied_discount__remove_container slds-p-around_x-small ","container":{"class":"cpq__applied_discount__remove_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":true,"large":"1","medium":"2","small":"3"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_2-of-12 slds-small-size_3-of-12 slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__applied_discount__remove_container slds-p-around_x-small ","container":{"class":"cpq__applied_discount__remove_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":true,"large":"1","medium":"2","small":"3"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_2-of-12 slds-small-size_3-of-12 slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"name","id":"state-new-condition-335","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":true,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background-color: #FFFFFF;\npadding: 0px;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             background-color: #FFFFFF;\npadding: 0px;","text":{"align":"","color":""}},"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"name","id":"state-new-condition-346","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BLabel.PCNoItemsToShow%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none cpq-discounts-list_container","container":{"class":"slds-card"},"customClass":"cpq-discounts-list_container","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAppliedDiscounts","Id":"a798G0000008pMlQAI","vlocity_cmt__GlobalKey__c":"cpqAppliedDiscounts/Vlocity/2/1611250278823"};
  export default definition