export const OMNIDEF = {"userTimeZone":330,"userProfile":"System Administrator","userName":"kaustav.b.chowdhury@capgemini.com.vprime","userId":"005f0000004bBRCAA2","userCurrencyCode":"USD","timeStamp":"2021-12-14T08:33:30.183Z","sOmniScriptId":"a4g0m000000XvkrAAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"stepChartPlacement":"right","includeCustomization":true,"customPages":{"ContractPreview":"ContractAmendmentPreview?verticalMode=true"},"stylesheet":{"newport":"","lightning":""},"disableUnloadWarn":true,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":false,"timeTracking":true,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}]},"prefillJSON":"{}","lwcId":"ef008645-8907-6b7a-c9a4-7afec19ed356","labelMap":{"TextBlock1":"JobSubmitted:TextBlock1","ParentIsFrameAgreement":"ParentContractDetails:ParentIsFrameAgreement","ParentTerm":"ParentContractDetails:ParentTerm","ParentStartDate":"ParentContractDetails:ParentStartDate","JobSubmitted":"JobSubmitted","AsyncQuoteToContract":"AsyncQuoteToContract","SetValues":"SetValues","ParentContractDetails":"ParentContractDetails","SetQuoteId":"SetQuoteId","GetQuoteRec":"GetQuoteRec","ExtractGroupQuote":"ExtractGroupQuote"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"Extract Group Quote","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"contextId","element":"EnterDetails:ObjectId"}],"controlWidth":12,"bundle":"ExtractGroupQuote","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"ExtractGroupQuote","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"ExtractGroupQuote","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","responseJSONNode":"","responseJSONPath":"","remoteTimeout":30000,"dataRaptor Input Parameters":[{"inputParam":"Id","element":"ContextId"}],"ignoreCache":false,"bundle":"FetchQuoteRecType","label":"GetQuoteRec","controlWidth":12,"aggElements":{}},"offSet":0,"name":"GetQuoteRec","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"GetQuoteRec","lwcId":"lwc1"},{"type":"Set Values","propSetMap":{"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"elementValueMap":{"objectId":"%Final%"},"label":"SetValues1","controlWidth":12,"aggElements":{}},"offSet":0,"name":"SetQuoteId","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetQuoteId","lwcId":"lwc2"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"Parent Contract Details","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"ParentContractDetails":"","ParentStartDate":"","ParentTerm":"","ParentIsFrameAgreement":""},"aggElements":{}},"offSet":0,"name":"ParentContractDetails","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Date","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"","maxDate":"","label":"Parent Contract Start Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"dateType":"string","dateFormat":"MM-dd-yyyy","controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ParentStartDate","level":1,"JSONPath":"ParentContractDetails:ParentStartDate","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc30-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Number","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","mask":null,"label":"Parent Contract Term","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":12,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ParentTerm","level":1,"JSONPath":"ParentContractDetails:ParentTerm","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bNumber":true,"lwcId":"lwc31-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Checkbox","rootIndex":3,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Frame Agreement","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Hide if False","checkLabel":"Frame Agreement","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ParentIsFrameAgreement","level":1,"JSONPath":"ParentContractDetails:ParentIsFrameAgreement","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc32-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ParentContractDetails","lwcId":"lwc3"},{"type":"Set Values","propSetMap":{"wpm":false,"validationRequired":"None","ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"subContractTerm":"=%SubContractDetails:SubContractTerm%","subContractStartDate":"=%SubContractDetails:SubContractStartDate%","subContractRecordType":"=%SubContractDetails:SubContractRecordType%","processSubQuotes":"=true","parentContractTerm":"=%ParentContractDetails:ParentTerm%","parentContractStartDate":"=%ParentContractDetails:ParentStartDate%","parentContractRecordType":"='0125Y000001wP6JQAU'","isFrameAgreementSub":"=%SubContractDetails:SubContractIsFrameAgreement%","isFrameAgreementParent":"=%ParentContractDetails:ParentIsFrameAgreement%","groupsToExcludeList":"[]","contractHierarchyType":"='Flat'","batchSize":10},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetValues","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues","lwcId":"lwc4"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Async Quote to Contract","integrationProcedureKey":"clm_asyncQuoteToContract","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"AsyncQuoteToContract","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"AsyncQuoteToContract","lwcId":"lwc5"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":0,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"Contract Created","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"<p>Contract is created. To go to Contract page - <strong>Click here</strong></p>","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"JobSubmitted":""},"aggElements":{}},"offSet":0,"name":"JobSubmitted","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":6,"response":null,"propSetMap":{"sanitize":false,"textKey":"","HTMLTemplateId":"","dataJSON":false,"show":null,"text":"<p>Contract is created. <a href=\"https://cgdevops--vprime.lightning.force.com/lightning/r/Contract/%parentContractId%/view\"><strong>Click here</strong></a> to go to Contract Page.</p>","label":"TextBlock1","controlWidth":12},"name":"TextBlock1","level":1,"JSONPath":"JobSubmitted:TextBlock1","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc60-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"JobSubmitted","lwcId":"lwc6"}],"bReusable":false,"bpVersion":13,"bpType":"clm","bpSubType":"asyncQuoteToContract","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};