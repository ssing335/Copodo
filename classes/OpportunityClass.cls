public with sharing class OpportunityClass {



    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOpportunity(String recordId){
        return  [SELECT AccountName__c,CloseDate,Id,Name,Owner.Name, StageName FROM Opportunity where Id = :recordId];
    }



    @AuraEnabled
     public static Map<String, Object> getCartItems(String recordId) {
        Map<String, Object> inputMap = new Map<String, Object>();
        Map<String, Object> outputMap = new Map<String, Object>();
        Map<String, Object> optionsMap = new Map<String, Object>();
        Map<String, Object> itemsMap = new Map<String, Object>();
     
        // String recordId = '';
        Id cartId = Id.valueOf(recordId);
        // System.debug('cartId => '+cartId);
       
        inputMap.put('cartId', cartId);
        inputMap.put('validate', false);
        inputMap.put('price', false);
        vlocity_cmt.CpqAppHandler CpqAppHandlerService = new vlocity_cmt.CpqAppHandler();
        CpqAppHandlerService.invokeMethod('getCartsItems', inputMap , outputMap, optionsMap);
        System.debug('outputMap :' + json.serialize(outputMap));
        String j = json.serialize(outputMap);
        System.debug(j);
        Map<String, Object> tmpResult = (Map<String, Object>) JSON.deserializeUntyped(j);
        System.debug(tmpResult);
        return tmpResult;
    }

    @AuraEnabled
    public static Map<String, Object> insertProductIntoCart(String recordId, String productName){
        //String priceBookEntryId, String cartId
        // if(priceBookEntryId == '01uf000002KsDAOAA3'){

        // }else if(priceBookEntryId == '')
            System.debug('productName => '+productName);
            Product2 pid = [Select Id, Name from Product2 where Name = :productName];
            System.debug('pid => '+pid);
            PricebookEntry pbeid = [Select Id from PricebookEntry where Product2Id = : pid.Id];
            System.debug('pbeid => '+pbeid);
            Map<String, Object> inputMap = new Map<String, Object>();
            Map<String, Object> outputMap = new Map<String, Object>();
            Map<String, Object> optionsMap = new Map<String, Object>();
            Map<String, Object> itemsMap = new Map<String, Object>();
            List<Object> items = new List<Object>();
            // Id priceBookEntryId = Id.valueOf(pbeid);
            Id cartId = Id.valueOf(recordId);
            itemsMap.put('itemId', pbeid.Id);
            items.add(itemsMap);
            inputMap.put('items', items);
            inputMap.put('cartId', cartId);
            inputMap.put('validate', false);
            inputMap.put('price', true);
            vlocity_cmt.CpqAppHandler CpqAppHandlerService = new vlocity_cmt.CpqAppHandler();
            CpqAppHandlerService.invokeMethod('postCartsItems', inputMap , outputMap, optionsMap);
            System.debug('outputMap :' + outputMap);
            String j = json.serialize(outputMap);
            Map<String, Object> tmpResult = (Map<String, Object>) JSON.deserializeUntyped(j);
            return tmpResult;
    }
    @AuraEnabled
    public static Map<String, Object> deleteCartItem(String recordId, String oppLineItemId){


        Map<String, Object> inputMap = new Map<String, Object>();
        Map<String, Object> outputMap = new Map<String, Object>();
        Map<String, Object> optionsMap = new Map<String, Object>();
        Map<String, Object> itemsMap = new Map<String, Object>();
     
        // String recordId = '006f000000QM1iPAAT';
        Id cartId = Id.valueOf(recordId);
        System.debug('cartId => '+cartId);
        inputMap.put('cartId', cartId);
        Id LineItemId = Id.valueOf(oppLineItemId);
        inputMap.put('id', LineItemId);
        inputMap.put('validate', false);
        inputMap.put('price', false);
        vlocity_cmt.CpqAppHandler CpqAppHandlerService = new vlocity_cmt.CpqAppHandler();
        CpqAppHandlerService.invokeMethod('deleteCartsItems', inputMap , outputMap, optionsMap);
        System.debug('outputMap :' + json.serialize(outputMap));
        String j = json.serialize(outputMap);
        System.debug(j);
        Map<String, Object> tmpResult = (Map<String, Object>) JSON.deserializeUntyped(j);
        System.debug(tmpResult);
        return tmpResult;



    }

}