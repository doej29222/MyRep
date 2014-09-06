package com.testlink.testcases;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import junit.framework.Assert;

import com.testlink.util.WebConnector;

import cucumber.api.java.en.And;

public class CreatingIssue {
	
	WebConnector selenium = WebConnector.getInstance();
	String summary = "User does not receive activation link.";
	String description = "After user completes registration procedure he does not receive emain with activation link";
	String str = "";
	
	@And ("^I select \"([^\"]*)\" from the project list$")
	public void selectProject(String listXpath){
		String result = selenium.click(listXpath);
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And("^I select GeneralProjectCategory from the project list$")
	public void settingCategory(){
		String result = selenium.directSelect("//*[contains(text(),'General')]");
		Assert.assertEquals(selenium.result_pass, result);
	}
	
	@And("^I select reproducibility always$")
	public void settingReproducibility(){
		String result = selenium.directSelect("//*[contains(text(),'always')]");
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method

	@And("^I select severity major$")
	public void settingSeverity(){
		String result = selenium.directSelect("//*[contains(text(),'major')]");
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And("^I select priority high$")
	public void settingPriority(){
		String result = selenium.directSelect("//*[contains(text(),'high')]");
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And("^I select assignee$")
	public void settingAssignee(){
		String result = selenium.directSelect("//*[contains(text(),'J_GOSLING')]");
		Assert.assertEquals(selenium.result_pass, result);
	}
	
	@And("^I type summary$")
	public void typeSummary(){
		String result = selenium.directType("//input[@name = 'summary']",summary);
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And("^I type description$")
	public void typeDescription(){
		String result = selenium.directType("//textarea[@name = 'description']", description);
		                                     
		Assert.assertEquals(selenium.result_pass, result);
	}//end of the method
	
	@And("^I type steps to reproduce$")
	public void typeSTR() throws IOException{
		FileReader o=new FileReader ("C://Workspace//Mantis//str.txt");
		BufferedReader p=new BufferedReader (o);
		String x ="";
		String y = "\n";
		while ((x=p.readLine())!=null){
			str = x+y;
			String result = selenium.directType("//textarea[@name='steps_to_reproduce']", str);
			Assert.assertEquals(selenium.result_pass, result);
		}//end of the while loop
		
	}
}
