trigger OrderItemTrigger on OrderItem (before insert) {
 for(OrderItem a : Trigger.new) {
       Blob b = Crypto.GenerateAESKey(128);
       String h = EncodingUtil.ConvertTohex(b);
        String guid = h.SubString(0,8)+ '-' + h.SubString(8,12) + '-' +  h.SubString(12,16)+ '-' + h.SubString(16,20)+ '-' + h.SubString(20,32);  
      OrderItem acc = new OrderItem();
        a.UUID__c = guid;
        system.debug(a);
    }   
}