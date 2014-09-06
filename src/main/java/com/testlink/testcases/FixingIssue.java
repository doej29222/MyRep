package com.testlink.testcases;

import junit.framework.Assert;

import com.testlink.util.WebConnector;

import cucumber.api.java.en.And;

public class FixingIssue {

	WebConnector selenium = WebConnector.getInstance();
	
	@And("I select status closed")
	public void selectingStatus(){
	String result = selenium.directSelect("html/body/table[3]/tbody/tr[18]/td/table/tbody/tr/td[3]/form/select/option[6]");
	Assert.assertEquals(selenium.result_pass, result);
	}
}
