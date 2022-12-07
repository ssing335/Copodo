global with sharing class VPLUpdateCartItems implements vlocity_cmt.VlocityOpenInterface
{
global VPLUpdateCartItems() { }

    global Boolean invokeMethod(String methodName, Map<String,Object> inputMap, Map<String,Object> outMap, Map<String,Object> options) {
        Boolean result = true;
        try
        {
            if (methodName.equals('updateresumeorders'))
            {
                updateresumeorders(inputMap,outMap,options);
            }
            else if(methodName.equals('updateOrderProduct'))
            {   
                updateOrderProduct(inputMap,outMap,options);
                
            }
            else{
                  result = false;
                 } 
        } 
        catch(Exception e)
        {
            System.debug('invokeMethod -> exception: '+e);
            result = false;
        }
        
        return result;
    }
    
    void updateresumeorders(Map<String, Object> inputMap, Map<String, Object> outMap,Map<String,Object> options)
    {
        String sOrderId = (String)inputMap.get('fdoId');
          List<OrderItem> updateOrderList = New List<OrderItem>();
          List<OrderItem>orderItemList = [Select Id,OrderId,vlocity_cmt__Action__c,OrderItem.Product2Id,OrderItem.Product2.Name,vlocity_cmt__ProvisioningStatus__c From OrderItem Where OrderId=: sOrderId];
        If(orderItemList != null && orderItemList.size() > 0)
          {
              for(OrderItem od:orderItemList)
              {
                  od.vlocity_cmt__Action__c = 'Resume';
                  od.vlocity_cmt__ProvisioningStatus__c = 'Resumed';
                  updateOrderList.add(od);
              }
              
              If(updateOrderList != null && updateOrderList.size() > 0)
              {
                  update updateOrderList;
              }
              
          }
    }
    
    void updateOrderProduct(Map<String, Object> inputMap, Map<String, Object> outMap,Map<String,Object> options)
    {
        String sOrderId = (String)inputMap.get('fdoId');
          List<OrderItem> updateOrderList = New List<OrderItem>();
          List<OrderItem>orderItemList = [Select Id,OrderId,vlocity_cmt__Action__c,OrderItem.Product2Id,OrderItem.Product2.Name,vlocity_cmt__ProvisioningStatus__c From OrderItem Where OrderId=: sOrderId];
        If(orderItemList != null && orderItemList.size() > 0)
          {
              for(OrderItem od:orderItemList)
              {
                  od.vlocity_cmt__Action__c = 'Suspend';
                  od.vlocity_cmt__ProvisioningStatus__c = 'Suspended';
                  updateOrderList.add(od);
              }
              
              If(updateOrderList != null && updateOrderList.size() > 0)
              {
                  update updateOrderList;
              }
              
          }
    }
      
}