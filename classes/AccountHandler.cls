public class AccountHandler {
    public static void createAccount(String Name, String phone){
        Name = 'Bhawik';
        phone = '1232343478';
        Account ac = new Account(Name = Name, Phone = phone);
        insert ac;
    }
    public static void updateAccount(Id id){
        Account ac1 = [SELECT Id, Name, Phone FROM Account WHERE id = '001f000001i1Wk4AAE']; //Jimmy Bhai
        ac1.Name = 'Babubhai';
        ac1.Phone = '9743492828';
        update ac1;
    }
    public static List<Account> getAccounts(List<Id> ids){
        List<Account> ac = [SELECT Id, Name, Phone FROM Account WHERE Id in :ids];
        return ac;
    }
    public static void deleteAccounts(List<Id> ids){
        List<Account> ac = [SELECT Id, Name, Phone FROM Account WHERE Id in :ids];
        delete ac;
    }
}