global with sharing class CustomAssetFilter implements vlocity_cmt.GlobalInterfaces.AssetFilterInterface{
    global String getFilterForAsset(String includesFilter, Id accId) {
        String assetQuery = '';
        String andCon = 'AND';
        String keyCon ='';
        String ValCon ='';
        String[] arrFilter = includesFilter.split('\\,');
        List<String> strList = New List<String>();
        List<Asset> AssetLst = new List<Asset>();
        Map<string,string>Criteria = new Map<string,string>();
        for(String s:arrFilter)
        {
            strList = s.split('\\:');
            Criteria.put(strList[0],strList[1]);
        }
        for(string str:Criteria.keyset())
        {
            if(str.equalsIgnoreCase('Id'))
            {
                AssetLst = [select id from asset where AccountId=:accId];
                system.debug('cp AsstLst'+AssetLst);
                break;
            }
            
        }
        String AssetId ;
        for(string str:Criteria.keyset())
        {
            AssetId ='';
            if(str.equalsIgnoreCase('Id'))
            {
                for(Asset Asst : AssetLst)
                {
                    if(Criteria.get(str).length() == 15)
                        AssetId = (string.Valueof(Asst.id)).substring(0,15);
                    else
                        AssetId = string.Valueof(Asst.id);
                    if(Criteria.get(str).equalsIgnoreCase(AssetId))
                        ValCon = Asst.id;
                }
            }
            else
                ValCon = Criteria.get(str);
            keyCon = str;
            assetQuery += andCon+' '+keyCon +'='+'\''+ValCon+'\'';
        }
        assetQuery+='AND AccountId = \'' + accId + '\'';
        return assetQuery;
    }
}