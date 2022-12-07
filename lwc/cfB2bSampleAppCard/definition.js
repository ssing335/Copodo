let definition = 
                {"Cards":[],"GlobalKey__c":"b2bSampleAppCard/11/Vlocity Express/1650269607438","componentName":"cfB2bSampleAppCard","customPreviewPages":[{"group":"Custom Pages","label":"","namespacePrefix":"","page":""}],"dataSource":{"type":null,"value":{"bundle":"","inputMap":{"":""},"optionsMap":{"vlcClass":"vlocity_cmt.IntegrationProcedureService"},"resultVar":""}},"enableLwc":true,"lwc":{"DeveloperName":"b2bSampleApp","Id":"0Rb3t000000d2jJCAQ","MasterLabel":"b2bSampleApp","name":"b2bSampleApp","omniSupport":true},"previewType":"runTime","repeatCards":false,"sessionVars":[{"name":"b2bOfferConfig","val":"{\"fields\":[{\"label\":\"One Time Total\",\"valueMap\":\"vlocity_cmt__OneTimeTotal__c\",\"dataType\":\"Currency\"},{\"label\":\"Recurring Total\",\"valueMap\":\"vlocity_cmt__RecurringTotal__c\",\"dataType\":\"Currency\"},{\"label\":\"One Time\",\"valueMap\":\"vlocity_cmt__OneTimeCharge__c\",\"dataType\":\"Currency\"},{\"label\":\"Recurring\",\"valueMap\":\"vlocity_cmt__RecurringCharge__c\",\"dataType\":\"Currency\"}],\"APIConfig\":{\"connectedCallback\":{\"getCartItems\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"methodName\":\"getCartsItems\",\"cartId\":\"this.params.id\",\"fields\":\"vlocity_cmt__BillingAccountId__c,vlocity_cmt__ServiceAccountId__c,Quantity,vlocity_cmt__RecurringTotal__c,vlocity_cmt__OneTimeTotal__c,vlocity_cmt__OneTimeManualDiscount__c,vlocity_cmt__RecurringManualDiscount__c,vlocity_cmt__ProvisioningStatus__c,vlocity_cmt__RecurringCharge__c,vlocity_cmt__OneTimeCharge__c,ListPrice,vlocity_cmt__ParentItemId__c,vlocity_cmt__BillingAccountId__r.Name,vlocity_cmt__ServiceAccountId__r.Name,vlocity_cmt__PremisesId__r.Name,vlocity_cmt__InCartQuantityMap__c,vlocity_cmt__EffectiveQuantity__c\",\"pagesize\":\"10\",\"price\":false,\"priceDetailsFields\":\"vlocity_cmt__OneTimeCharge__c,vlocity_cmt__OneTimeManualDiscount__c,vlocity_cmt__OneTimeCalculatedPrice__c,vlocity_cmt__OneTimeTotal__c,vlocity_cmt__RecurringCharge__c,vlocity_cmt__RecurringCalculatedPrice__c,vlocity_cmt__RecurringTotal__c\",\"validate\":false}}},\"updateItems\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"fields\":\"vlocity_cmt__BillingAccountId__c,vlocity_cmt__ServiceAccountId__c,Quantity,vlocity_cmt__RecurringTotal__c,vlocity_cmt__OneTimeTotal__c,vlocity_cmt__OneTimeManualDiscount__c,vlocity_cmt__RecurringManualDiscount__c,vlocity_cmt__ProvisioningStatus__c,vlocity_cmt__RecurringCharge__c,vlocity_cmt__OneTimeCharge__c,ListPrice,vlocity_cmt__ParentItemId__c,vlocity_cmt__BillingAccountId__r.Name,vlocity_cmt__ServiceAccountId__r.Name,vlocity_cmt__PremisesId__r.Name,vlocity_cmt__InCartQuantityMap__c,vlocity_cmt__EffectiveQuantity__c\",\"filters\":null,\"methodName\":\"putCartsItems\",\"hierarchy\":-1,\"includeAttachment\":false,\"lastRecordId\":null,\"pagesize\":10,\"price\":true,\"query\":null,\"validate\":true}},\"modifyattributes\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"methodName\":\"putItemAttributes\",\"items\":[{\"itemId\":null}],\"filters\":null,\"itemId\":null,\"id\":null,\"cartId\":null}},\"deleteItem\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"methodName\":\"deleteCartsItems\",\"fields\":\"vlocity_cmt__BillingAccountId__c,vlocity_cmt__ServiceAccountId__c,Quantity,vlocity_cmt__RecurringTotal__c,vlocity_cmt__OneTimeTotal__c,vlocity_cmt__OneTimeManualDiscount__c,vlocity_cmt__RecurringManualDiscount__c,vlocity_cmt__ProvisioningStatus__c,vlocity_cmt__RecurringCharge__c,vlocity_cmt__OneTimeCharge__c,ListPrice,vlocity_cmt__ParentItemId__c,vlocity_cmt__BillingAccountId__r.Name,vlocity_cmt__ServiceAccountId__r.Name,vlocity_cmt__PremisesId__r.Name,vlocity_cmt__InCartQuantityMap__c,vlocity_cmt__EffectiveQuantity__c\",\"filters\":null,\"hierarchy\":-1,\"includeAttachment\":false,\"lastRecordId\":null,\"pagesize\":10,\"price\":true,\"query\":null,\"validate\":true}},\"postCartsItems\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"methodName\":\"postCartsItems\",\"price\":true,\"validate\":true,\"includeAttachment\":false,\"pagesize\":10,\"lastRecordId\":null,\"hierarchy\":-1,\"query\":null}}}}"},{"name":"b2bProductItem","val":"{\"fields\":[],\"APIConfig\":{\"postCartsItems\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"methodName\":\"postCartsItems\",\"price\":true,\"validate\":true,\"includeAttachment\":false,\"pagesize\":10,\"lastRecordId\":null,\"hierarchy\":-1,\"query\":null}}}}"},{"name":"b2bItemsList","val":"{\"fields\":[],\"APIConfig\":{\"connectedCallback\":{\"createWorkingCart\":{\"type\":\"IntegrationProcedure\",\"ipMethod\":\"create_WorkingCart\",\"inputMap\":{\"SalesQuoteId\":\"\"},\"optionsMap\":{}},\"getCartProducts\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"includeAttachment\":false,\"pagesize\":20,\"hierarchy\":0,\"methodName\":\"getCartsProducts\",\"includeAttributes\":true,\"includeIneligible\": true}}}}}"},{"name":"b2bCategoriesList","val":"{\"fields\":[],\"APIConfig\":{\"connectedCallback\":{\"getCatalogs\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"includeProducts\":true,\"hierarchy\":-1,\"methodName\":\"getCatalogHierarchy\"}}}}}"},{"name":"b2bQuoteSummaryConfig","val":"{\"columnMap\":[{\"label\":\"Id\",\"valueMap\":\"Id.value\",\"visible\":false},{\"label\":\"Group/Member\",\"valueMap\":\"gm\"},{\"label\":\"Name\",\"valueMap\":\"Name\",\"collapsable\":true,\"showAttrs\":true},{\"label\":\"Quantity\",\"valueMap\":\"Quantity.value\",\"align\":\"center\"},{\"label\":\"One Time Total\",\"valueMap\":\"vlocity_cmt__OneTimeTotal__c.value\",\"dataType\":\"Currency\",\"align\":\"right\"},{\"label\":\"Recurring Total\",\"valueMap\":\"vlocity_cmt__RecurringTotal__c.value\",\"dataType\":\"Currency\",\"align\":\"right\"}],\"groupMap\":[{\"condition\":\"vlocity_cmt__QuoteMemberId__r.vlocity_cmt__MemberType__c == Location\",\"valueMap\":[\"vlocity_cmt__QuoteMemberId__r.vlocity_cmt__StreetAddress__c\",\"vlocity_cmt__QuoteMemberId__r.vlocity_cmt__City__c\",\"vlocity_cmt__QuoteMemberId__r.vlocity_cmt__State__c\"]},{\"condition\":\"vlocity_cmt__QuoteMemberId__r.vlocity_cmt__MemberType__c == Subscriber\",\"valueMap\":[\"vlocity_cmt__QuoteMemberId__r.Name\"]},{\"condition\":\"vlocity_cmt__QuoteGroupId__r\",\"valueMap\":[\"vlocity_cmt__QuoteGroupId__r.Name\"]}],\"APIConfig\":{\"connectedCallback\":{\"getCartItems\":{\"type\":\"ApexRemote\",\"remoteClass\":\"CpqAppHandler\",\"params\":{\"methodName\":\"getCartsItems\",\"cartId\":\"this.params.id\",\"fields\":\"vlocity_cmt__ValidationDate__c,vlocity_cmt__IsValidated__c,vlocity_cmt__BillingAccountId__r.BillingAddress,vlocity_cmt__ServiceIdentifier__c,vlocity_cmt__ConnectDate__c,vlocity_cmt__QuoteMemberId__r.vlocity_cmt__StreetAddress__c,vlocity_cmt__QuoteMemberId__r.vlocity_cmt__MemberType__c,vlocity_cmt__QuoteGroupId__r.Name,vlocity_cmt__QuoteGroupId__r.vlocity_cmt__MemberType__c,vlocity_cmt__QuoteMemberId__r.Name,vlocity_cmt__QuoteMemberId__r.vlocity_cmt__City__c,vlocity_cmt__QuoteMemberId__r.State__c\",\"pagesize\":\"10\",\"price\":false,\"priceDetailsFields\":\"vlocity_cmt__OneTimeCharge__c,vlocity_cmt__OneTimeManualDiscount__c,vlocity_cmt__OneTimeCalculatedPrice__c,vlocity_cmt__OneTimeTotal__c,vlocity_cmt__RecurringCharge__c,vlocity_cmt__RecurringCalculatedPrice__c,vlocity_cmt__RecurringTotal__c\",\"validate\":false}}}}}"},{"name":"b2bCartSummaryProposal","val":"/lightning/cmp/vlocity_cmt__vlocityLWCOmniWrapper?c__target=c:b2bExpressCLMGenerateProposalDocumentLWCMultiLanguage&c__layout=lightning&c__tabIcon=custom:custom18&c__ContextId="},{"name":"b2bTableWrapperTotalColumn","val":"[{\"name\": \"Postal Code\",\"methodToCalculateSummary\": \"\",\"currency\" : true},{\"name\": \"Projects\",\"methodToCalculateSummary\": \"\"}]"},{"name":"b2bProductFamily","val":"[{\"name\":\"Internet\",\"value\":\"Internet-test\",\"icon\":\"custom:custom68\"},{\"name\":\"Landline\",\"value\":\"Landline-test\",\"icon\":\"standard:call_coaching\"},{\"name\":\"TV\",\"value\":\"TV-test\",\"icon\":\"custom:custom99\"},{\"name\":\"Mobile\",\"value\":\"Mobile-test\",\"icon\":\"custom:custom28\"}]"},{"name":"b2bEligibilityContextValue","val":"{\"vlocity_cmt__City__c\":\"City\"}"}],"templates":{"0":{"templateUrl":"b2b-express-quote-actions-card-template"}},"workspace":[]}; 
            export default definition