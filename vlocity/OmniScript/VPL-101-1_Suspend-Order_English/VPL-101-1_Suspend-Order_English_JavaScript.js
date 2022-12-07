baseCtrl.prototype.checkChildAssets =  function(obj){
debugger;
                          if(obj['childAssets'] && obj.childAssets['records']){
                                for(i in obj.childAssets.records){
                                       if(obj.childAssets.records[i]['vlcSelected']  && obj.childAssets.records[i]['vlcSelected'] == true){
                                             obj.childAssets.records[i]['vlcSelected']  = false;
                                       }else{
                                             obj.childAssets.records[i]['vlcSelected'] = true;
                                        }
                                       if(obj.childAssets.records[i]['childAssets'] && obj.childAssets.records[i].childAssets['records']){
                                               for(j in obj.childAssets.records[i].childAssets.records){
                                                      if(obj.childAssets.records[i].childAssets.records[j]['vlcSelected']  && obj.childAssets.records[i].childAssets.records[j]['vlcSelected']  == true){
                                                          obj.childAssets.records[i].childAssets.records[j]['vlcSelected'] = false;
                                                       }else{
                                                          obj.childAssets.records[i].childAssets.records[j]['vlcSelected'] = true;
                                                       }
                                                      this.checkChildAssets(obj.childAssets.records[i].childAssets.records[j]);
                                               }
                                       }
                                }     
                          }
                        };