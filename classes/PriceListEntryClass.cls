public with sharing class PriceListEntryClass {
    

    @AuraEnabled(cacheable = true)
    public static List<vlocity_cmt__PriceListEntry__c> getPriceListEntryInfo(string recordId){
        List<vlocity_cmt__PriceListEntry__c> l = [select Id, vlocity_cmt__ProductId__r.Name, vlocity_cmt__PricingElementAmount__c,
             vlocity_cmt__ProductId__r.vlocity_cmt__IsOrderable__c 
             from vlocity_cmt__PriceListEntry__c 
             where vlocity_cmt__PriceListId__c = :recordId 
             AND vlocity_cmt__ProductId__r.vlocity_cmt__IsOrderable__c = true];


        return l;     
    } 

    

    

}