global class UpdateOrderStatus implements vlocity_cmt.XOMOrchestrationInterfaces.IAutoTask {
     global UpdateOrderStatus(){}
    global void executeBatch(List<vlocity_cmt__OrchestrationItem__c> items) {
        
Order[] orders = [SELECT Id, Description FROM Order WHERE Id='8018G0000007ctSQAQ'];
      System.debug(orders);
      System.debug('OK');
      for (Order ord : orders) {
          ord.Description = 'Sample';
      }
      // save the change you made
      update orders;
      System.debug(orders);
        
    }
    

}