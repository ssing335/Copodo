baseCtrl.prototype.saveAndNext = function(scp, evt){
    debugger;
    scp.saveEditChanges(evt);
    scp.bpTree.response['ParentIdValue'] = scp.control.response[scp.bpTree.response['ParentIdKey']];
if(scp.bpTree.response.PicklistValue)
    scp.bpTree.response.PicklistValue.EditPicklistValues=[];
    scp.bpTree.response.updatepicklistvalues=true;
    scp.baseCtrl.$scope.evaluateShow(scp.baseCtrl.$scope.bpTree.children[scp.activeIndex+7],scp.baseCtrl.$scope);
    scp.baseCtrl.$scope.autoAdvance("next");
    
};