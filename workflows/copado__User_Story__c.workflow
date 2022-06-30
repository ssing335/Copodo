<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Notification_for_User_story_Approval</fullName>
        <description>Notification for User story Approval</description>
        <protected>false</protected>
        <recipients>
            <recipient>Release_Manager</recipient>
            <type>group</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/User_Story_Approval_Needed_1632829366727</template>
    </alerts>
    <alerts>
        <fullName>User_Story_Rejection_Alert</fullName>
        <description>User Story Rejection Alert</description>
        <protected>false</protected>
        <recipients>
            <recipient>Release_Manager</recipient>
            <type>group</type>
        </recipients>
        <recipients>
            <field>copado__Business_Analyst__c</field>
            <type>userLookup</type>
        </recipients>
        <recipients>
            <field>copado__Developer__c</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Rejected_Template_1632829784388</template>
    </alerts>
    <alerts>
        <fullName>User_Story_approval_Alert</fullName>
        <description>User Story approval Alert</description>
        <protected>false</protected>
        <recipients>
            <recipient>Release_Manager</recipient>
            <type>group</type>
        </recipients>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <field>copado__Business_Analyst__c</field>
            <type>userLookup</type>
        </recipients>
        <recipients>
            <field>copado__Developer__c</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Approval_Template_1632829719797</template>
    </alerts>
</Workflow>
