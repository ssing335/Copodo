trigger OfferOrder on Order (before update) {
/*    Order Ord = Trigger.new[0];
    List<OrderItem> ordItems = [Select OrderId, Product2Id from OrderItem where OrderId =: Ord.id ];
    for(OrderItem ordItem:ordItems){
        List<Product2> prds=[Select Name,Access_Type__c from Product2 where Id=:ordItem.Product2Id AND vlocity_cmt__SpecificationType__c=:'Offer'];
        for (Product2 prd:prds){
             Ord.Desc__c='Service Order for '+prd.Name;
             Ord.category__c=prd.Access_Type__c;
        }        
    }*/
}