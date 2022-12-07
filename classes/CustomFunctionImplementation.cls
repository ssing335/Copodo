global class CustomFunctionImplementation implements Callable
{
    /*
        inputs - arguments - List<Object> of passed in arguments
        output - result - The result of the Function being called. Supports single Object values, List<Object> or Map<String, Object>
    */
    public Object call(String action, Map<String, Object> args) {
 
        Map<String, Object> input = (Map<String, Object>)args.get('input');
        Map<String, Object> output = (Map<String, Object>)args.get('output');
        Map<String, Object> options = (Map<String, Object>)args.get('options');

        return invokeMethod(action, input, output, options);
    }
    global Boolean invokeMethod(String methodName, Map<String, Object> inputs, Map<String, Object> output, Map<String, Object> options)
    {
        // SUM Returns a single value
        if (methodName == 'Category')
        {
            List<Object> arguments = (List<Object>)inputs.get('arguments');
            output.put('result', Category(arguments));
        }
        /*
            Split Returns a Map<String, Object of values. Not all functions will be able to handle Map<String, Object> results,
            so be careful when using these functions.
            In a DataRaptor Transform step returning a Map<String, Object> from a Formula will result in applying that Map to the
            JSON Data at the FormulaResultPath. See https://vlocity.atlassian.net/wiki/display/RAP/Transforms
        */
        else if (methodName == 'Description')
        {
            List<Object> arguments = (List<Object>)inputs.get('arguments');
            output.put('result', Description(arguments));
        }
        return true;
    }
    String Category(List<Object> arguments)
    {
        String Result, CallDes=Description(arguments);
         Result=CallDes.substring(18, CallDes.length());
         return Result ; 
           
    } 
   String Description(List<Object> arguments)
    {
         string PrdName,StrngSum='Service Order for ';
         string[] SpltStrng;
         String[] ar=new String[arguments.size()];
        for (Integer i = 0; i < arguments.size(); i++)
        { 
           ar[i]=arguments[i].toString();
           PrdName=ar[i];
           SpltStrng=PrdName.split(' ');
            
           if(SpltStrng.size()>1)
                PrdName=SpltStrng[0]+' '+SpltStrng[1];
           StrngSum=StrngSum+PrdName+'/'; 
         }
       String Result;
       system.debug(StrngSum);
           Result=StrngSum.substring(0, StrngSum.length()-1);
           return Result ; 
    }
     
}