global class IPCallout implements vlocity_cmt.XOMOrchestrationInterfaces.IAutoTask{
    //global IPCallout(){}
    global void executeBatch(List<vlocity_cmt__OrchestrationItem__c> items) {
        
        Map<String, Object> ipInput = new Map<String, Object>{'ContextId'=>items[0].Id};
        system.debug('ipInput---'+ ipInput);
        Map<String, Object> ipOutput = new Map<String, Object>();
        Map<String, Object> ipOptions = new Map<String, Object>();
        String procedureName = 'NewConnect_ResolveBillingCodes';//
        ipOutput = (Map<String, Object>) vlocity_cmt.IntegrationProcedureService.runIntegrationService(procedureName, ipInput, ipOptions);
    }
}