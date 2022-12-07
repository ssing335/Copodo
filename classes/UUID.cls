public class UUID {

    public String ServiceOrder (string MyKey){
    Blob b = Crypto.GenerateAESKey(128);
        String h = EncodingUtil.ConvertTohex(b);
        String guid = h.SubString(0,8)+ '-' + h.SubString(8,12) + '-' +  h.SubString(12,16)+ '-' + h.SubString(16,20)+ '-' + h.SubString(20,32);  
       Order acc = new Order();
        acc.Id = MyKey;
        acc.UUIDText__c = guid;
        Update acc;
       // system.debug(acc);
          return guid;
    }
}