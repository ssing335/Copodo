global class CustomOdinAPIHandlerImplementation implements vlocity_cmt.VlocityOpenInterface {

 global Boolean invokeMethod(
  String methodName,
  Map<String, Object> inputMap,
  Map<String, Object> outputMap,
  Map<String, Object> optionsMap) {

  List<Id> orderIdList = (List<Id>) inputMap.get('orderIdList');

  switch on methodName {
   when 'submitOrder' {
      Boolean decomposeOnly;
    List<vlocity_cmt.CpqSubmitOrderResult> resultList = submitOrder(orderIdList, decomposeOnly);
    outputMap.put('resultList', resultList);
   }
  }
       return true;
 }

 public List<vlocity_cmt.CpqSubmitOrderResult> submitOrder(List<Id> orderIdList,Boolean decomposeOnly) {
  // Implement submitOrder
decomposeOnly = true;
  return new List<vlocity_cmt.CpqSubmitOrderResult> ();
 }
}