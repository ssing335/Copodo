@IsTest
/**
 * @description Case Helper Test class
 */
private class CaseHelperTest {
	 /**
     * @description to set the Default Values
     * @param none 
     * @return none
     */
    @isTest static void testDefaultValues(){
        list<Case> lstcs= new list<Case>();
        Case testcs = new Case(subject = 'My Test case 1');
        insert testcs;
        testcs.Status='Open';
        update testcs;
        lstcs.add(testcs);
        CaseHelper.setDefaultValues(lstcs);
        Case case1= [select Description,subject from Case where id=: testcs.id limit 1];
        System.assertEquals('Default description', case1.Description, 'When description is null, it is updated to Default description');
    	}		
	}