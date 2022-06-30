@RestResource(urlMapping='/OrderStatusUpdate/v1/*')
global with sharing class OrderStatusUpdate {    
    @HttpPost
    global static void OrderStatusUpdate()
    {
        RestRequest req = RestContext.request;
        RestResponse res = Restcontext.response;
        String jsonS;
        JSONGenerator gen = JSON.createGenerator(true);
        //Map<String, Object> obj = New Map<String, Object>();
        //String out ='';
        try
        {
        Id orderId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        
        //Reading Data
        Map<String, Object> params = (Map<String, Object>)JSON.deserializeUntyped(RestContext.request.requestBody.toString());
        Object info = params.get('OrderStatus');
        info = info + ',' + params.get('FulfilmentStatus');
        
        String inform = String.valueof(info);
        String[] part;
        part = inform.split('\\,');
        //End of Code Segment
        
        System.debug(req.requestBody);
        
        //Updating Fields
        
        Order testOrder = [SELECT Id, vlocity_cmt__OrderStatus__c, vlocity_cmt__FulfilmentStatus__c, Delivery_Response__c 
                           FROM Order 
                           Where Id =: orderId ];
        if(testOrder != null)
        {
          testOrder.vlocity_cmt__OrderStatus__c = part[0];
          testOrder.vlocity_cmt__FulfilmentStatus__c = part[1];
            if(part[0]=='Complete')
            {
                testOrder.Delivery_Response__c= true;
            }
           try
           {
               update testOrder;  
               gen.writeStartObject();      
               gen.writeStringField('UpdateStatus','Success');
               gen.writeStringField('StatusCode','Updated Successfully');
               gen.writeStringField('message','Success');
               gen.writeEndObject();    
               jsonS = gen.getAsString();
               res.statusCode = 200; //Signifies OK

				
               
               /*obj.put('UpdateStatus','Success');
               obj.put('StatusCode','Updated Successfully');
               obj.put('message','Success');
               out = JSON.serialize(obj);
               System.debug('Serialize Boston : ' + out);
               res.statusCode = 200; //Signifies OK
               System.debug('JsonS NotBoston : ' + jsonS);
			*/
                
           }
           catch(DmlException e)
           {
               
           }
           
        }
        else //OrderId Not Found
        {
          // String message = 'ORDER ID: Id value of incorrect type:' + String.ValueOf(orderId);
           gen.writeStartObject();      
           gen.writeStringField('UpdateStatus','Failure');
           gen.writeStringField('errorCode','MALFORMED_ID');
           gen.writeStringField('message','ORDER ID: Does Not Exist');
           gen.writeEndObject();    
           jsonS = gen.getAsString();
           res.statusCode = 400; //Signifies NOK 
        }
        
        res.responseBody = blob.valueOf(jsonS);
        System.debug(res);
        
    }
         catch (DmlException e)
    {
        gen.writeStartObject();      
        gen.writeStringField('UpdateStatus','Failure');
        gen.writeStringField('errorCode','MALFORMED_ID');
        gen.writeStringField('message','ORDER ID: Does Not Exist');
        gen.writeEndObject();    
        jsonS = gen.getAsString();
        res.statusCode = 400; //Signifies NOK 
    }
    finally
    {
        
    }
    }
   
}