package com.testlink.testcases;

import java.io.IOException;

import org.junit.Assert;

import com.testlink.util.WebConnector;
import com.thoughtworks.selenium.Selenium;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CommonUtil {
	WebConnector selenium = WebConnector.getInstance();
	
	@Given ("^Runmode is \"([^\"]*)\"$")
	public void checkRunmode(String runmode){
		if (runmode.equals("N")){
			throw new PendingException("Scipping the test as runmode is 'NO' ");
		}//if
	}//end of the method
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$") 
	public void openWebPage(String url, String browser){
		String result = selenium.openBrowser(browser);
		Assert.assertEquals(selenium.result_pass, result);
		String result2 = selenium.navigate(url);
		Assert.assertEquals(selenium.result_pass, result2);
	}//end of the method
		
	@And("^I type \"([^\"]*)\" in \"([^\"]*)\"$")
	public void type(String text, String object){
		String result = selenium.type(text, object);
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And ("^I click \"([^\"]*)\"$")
	public void click(String object){
		String result = selenium.click(object);
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And ("^I click on \"([^\"]*)\"$")
	public void click_on(String object){
		String result = selenium.clickButton(object);
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@Then ("^\"([^\"]*)\" should appear and test result is \"([^\"]*)\"$")
    public void gettingResult(String login, String expectedResult){
    	String actualResult;
    	String actualText = selenium.getText("html/body/table[1]/tbody/tr/td[1]/span[1]");
    	System.out.println(actualText);
    	if(actualText.equals(login)){
    		actualResult = "PASS";
    		Assert.assertEquals(expectedResult, actualResult);
    	}else{
    		actualResult = "FAIL";
    		Assert.assertEquals(expectedResult, actualResult);
    	}
    	selenium.clearCookie();
    }//end of the method
	
	@And ("^I clear cookies$")
	public void clearingCookies(){
		selenium.clearCookie();
	}//end of the method
	
	@And("^I verify project creation in \"([^\"]*)\"$")
	public void readingTableContent(String tableXpath) throws IOException, InterruptedException{
		String result=selenium.readTable(tableXpath);
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And("^I wait for page to load completely$")
	public void waitForCompleteLoading(){
		String result=selenium.synchronize();
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	//And I pass control to another window
	@And("^I pass control to another window$")
	public void switchControl(){
		String result = selenium.switchControl();
		Assert.assertEquals(selenium.result_pass, result);
	}

	@And("^I close browser$")
	public void closeBrowser(){
		String result = selenium.closeBrowser();
		Assert.assertEquals(selenium.result_pass, result);
	}
	

}
