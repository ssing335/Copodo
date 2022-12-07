trigger OrderTrigger on Order (before insert) {
for(Order a : Trigger.new) {
        Blob b = Crypto.GenerateAESKey(128);
        String h = EncodingUtil.ConvertTohex(b);
        String guid = h.SubString(0,8)+ '-' + h.SubString(8,12) + '-' +  h.SubString(12,16)+ '-' + h.SubString(16,20)+ '-' + h.SubString(20,32);  
      Order acc = new Order();
        a.UUIDText__c = guid;
        system.debug(a);
    } 
}