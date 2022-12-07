global class UpdateOrderDescription implements vlocity_cmt.XOMOrchestrationInterfaces.IAutoTask {
    
    global UpdateOrderDescription(){}
    global void executeBatch(List<vlocity_cmt__OrchestrationItem__c> items) {
         String a = 'test'+ items;
        Order[] orders = [SELECT Id, Description FROM Order WHERE Id='8018G0000007d9lQAA'];
              
	//Order[] orders = [SELECT Id, Description FROM Order WHERE Id='8018G0000007cv9QAA'];
      //System.debug(orders);
      //System.debug('OK');
      for (Order ord : orders) {
         ord.Description = a;
          
      }
      
      update orders;
      //System.debug(orders);
        
    }

}