/**
 * @description Case Helper
 */  
public class CaseHelper{
     /**
     * @description setting default values
     * @param lstcs 
     * @return none
     */
    Public static void setDefaultValues(list<Case> lstcs){
        for(Case cs:lstcs){  
            if(cs.status == 'Open'){
            cs.Description = 'Default description';
            cs.Subject = 'test subject';//dev2chnages
            cs.Origin='Phone';	
            cs.Reason='Instructions not clear'; 
            }    
        }
   }     
}