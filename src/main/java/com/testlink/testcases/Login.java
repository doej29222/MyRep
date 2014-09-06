package com.testlink.testcases;

import org.testng.Assert;

import com.testlink.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Login {
	WebConnector selenium = WebConnector.getInstance();
	
	//And "<text>" is present at "autoXpath"
	@And ("^\"([^\"]*)\" is present at \"([^\"]*)\"$")
	//do not switch parameters never ever!!!
	public void verifyText(String data, String objectXpath ){
		String result=selenium.verifyText(objectXpath, data);
		Assert.assertEquals(result, selenium.result_pass);
	}
	
	@And ("^in \"([^\"]*)\" appears \"([^\"]*)\"$")
	public void verifyTextInput(String fieldXpath, String inputText){
		String result=selenium.verifyTextinInput(fieldXpath, inputText);
		Assert.assertEquals(result, selenium.result_pass);
	}
	
	@And ("^button text \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verifyButtonText(String buttonXpath, String buttonText){
		String result=selenium.verifyButtonText(buttonXpath, buttonText);
		Assert.assertEquals(result, selenium.result_pass);
	}
	
	@And ("^\"([^\"]*)\" equals to \"([^\"]*)\"$")
	public void verifyLinktext(String linkXpath, String expectedText){
		String result=selenium.verifyLinkText(linkXpath, expectedText);
		Assert.assertEquals(result, selenium.result_pass);
		
	}
	
	@And ("^I choose \"([^\"]*)\" from \"([^\"]*)\"$")
	public void selectFromList(String value, String listXpath){
		String result=selenium.selectList(listXpath, value);
		Assert.assertEquals(result, selenium.result_pass);
	}

}
