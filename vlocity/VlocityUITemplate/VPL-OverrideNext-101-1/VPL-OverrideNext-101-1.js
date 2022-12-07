baseCtrl.prototype.next = function(scp, control){
        
        var child = scp.$parent.$parent.$parent.child;
        
        if(child.name === "AttributeCategoryList")
        {
            scp.bpTree.response.CreateNewAttributeCategory=true;
        }else if(child.name === "Picklist")
        {
            scp.bpTree.response.CreateNewPicklist=true;
        }else if(child.name === "Attributes")
        {
            scp.bpTree.response.CreateNewAttribute=true;
        }
             scp.baseCtrl.$scope.evaluateShow(scp.baseCtrl.$scope.bpTree.children[child.nextIndex],scp.baseCtrl.$scope);
                scp.baseCtrl.$scope.nextRepeater(child.nextIndex, child.indexInParent);
           
       
};