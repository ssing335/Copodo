baseCtrl.prototype.customChange = function(scp, value, previousNthStep){
    if(value == "Previous"){
        var step = scp.$parent.$parent.$parent.$parent.$parent.child;
        if(scp && step){
            scp.setStepStatus(scp.bpTree.children[step.indexInParent], false, true, true);
            // var prevIndex = scp.findPreShowStep(step.indexInParent);                
            
            // var prevIndex = scp.findPreShowStep(step.indexInParent)-2; 
            var prevIndex = previousNthStep;
            if(prevIndex !== undefined && prevIndex !== null){
                    
                scp.activateStep(scp.bpTree.children[prevIndex], true);
                scp.bpTree.asIndex = prevIndex;
                // $scope.activeIndex = prevIndex;
                scp.activeIndex = prevIndex;

            }
        } 
    }
}