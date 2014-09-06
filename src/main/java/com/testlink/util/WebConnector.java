package com.testlink.util;





import gherkin.formatter.model.Result;

import java.util.Random;
import java.io.File; 
import java.sql.Timestamp; 
import java.util.ArrayList; 
import java.util.Date; 
import java.util.Iterator; 
import java.util.List; 
import java.util.Set; 

import org.apache.commons.io.FileUtils; 
import org.openqa.selenium.By; 
import org.openqa.selenium.OutputType; 
import org.openqa.selenium.TakesScreenshot;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Properties;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
































public class WebConnector {
	
	Logger APP_LOGS= Logger.getLogger("devpinoyLogger");
	
	//this file will be used to 
	//implement logging 
	//initialize properties file
	//here selenium commands will be executed
	
	//three layers 1 feature files, 2 step files, 3 web connector
	String DATA_SPLIT = "\\|";
	public String ScreenshotsFolder= null;
	String keyword_execution_result="FAIL";
	public String result_pass = "PASS";
	public String result_fail = "FAIL";
	Properties OR  = null;
	Properties CONFIG = null;
	WebDriver driver = null;
	WebDriver mozilla = null;
	WebDriver chrome = null;
	WebDriver ie = null;
	static WebConnector w;
	private WebConnector(){
		Date d = new Date(); 
	    Timestamp t = new Timestamp(d.getTime());  
	    String timeStamp = t.toString();  
	    timeStamp = timeStamp.replace(' ', '_'); 
	    timeStamp = timeStamp.replace(':', '_');
	    ScreenshotsFolder = System.getProperty("user.dir")+"/screenshots/"+timeStamp;
	    File theDir = new File(ScreenshotsFolder);
	    theDir.mkdir();
		if (OR==null){
			try{
				//initializing OR properties
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/testlink/config/OR.properties");
				OR.load(fs);
				//initializing CONFIG properties to corresponding environment
				CONFIG = new Properties();
				fs = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/testlink/config/"+OR.getProperty("testEnv")+"_config.properties");
				CONFIG.load(fs);
				//System.out.println(OR.getProperty("loginButton")); //just to test
				//System.out.println(CONFIG.getProperty("loginurl")); //just to test
			}catch(Exception e){
				System.out.println("Error on initializing properties file"+ e.getMessage());
			}
		}
	}
	
	public String openBrowser(String browserType){
		log("Opening browser");
		try{
		if((browserType).equals("Mozilla")&& mozilla == null){
			driver = new FirefoxDriver();
			mozilla = driver;
		}else if((browserType).equals("Mozilla")&& mozilla != null){//this else is used in case the browser is opened in order to close it;
			driver = mozilla;
		}else if ((browserType).equals("IE")&& ie == null){
			driver = new InternetExplorerDriver();
			ie = driver;
		}else if ((browserType).equals("IE")&& ie != null){
			driver = ie;
		}else if ((browserType).equals("Chrome")&& chrome == null){
			System.setProperty("webdriver.chrome.driver","C:\\Program Files\\eclipse-jee-kepler-R-win32\\eclipse\\chromedriver.exe");
			driver = new ChromeDriver();
			chrome = driver;
		 }else if((browserType).equals("Chrome")&& chrome == null){
	    	driver = chrome;
		 }long implicitWaitTime=Long.parseLong(OR.getProperty("implicitwait"));
		driver.manage().timeouts().implicitlyWait(implicitWaitTime, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		log("The browser "+browserType+" was opened");
		return result_pass;
		}catch (Exception e){
			log("Cannot open browser. "+e.getMessage());
			return result_fail;
		} 
			}
	
	public String navigate(String url){
		log("Navigating to the url");
		try{
			driver.navigate().to(OR.getProperty(url));
			log("Browser got the url: "+url);
			return result_pass;
			}catch (Exception e){
				log("Cannot get the URL. "+e.getMessage());
				return result_fail;
				}
	}
	
	public String click(String object){
		log("Clicking on the object");
		try{
			driver.findElement(By.xpath(OR.getProperty(object))).click();
			log("Clicked on the object: "+object);
			return result_pass;
		}catch (Exception e){
			log("Cannot click on the element. "+e.getMessage());
			return result_pass;
		}
	}//end of the method
	
	public String clickButton(String object){
		try{
			driver.findElement(By.id(OR.getProperty(object))).sendKeys(Keys.ENTER);;
			log("Clicked on the button.");
			return result_pass;
		}catch(Exception e){
			log("Cannot click on the button. "+e.getMessage());
			return result_pass;
		}
	}//end of the method
	
	public String switchControl(){
		try{
			driver.switchTo().window("MantisBT");
			return result_pass;
		}catch(Exception e){
			log("Cannot switch the control. "+e.getMessage() );
			return result_fail;
		}
	}
	
	public String type(String text, String object){
		log("Typing text to the field");
		try{
		    if(text.equals("RANDOM_NAME")){
			//Random r = new Random();
		    int r=	(int) (Math.random() * 100);	
			String num = Integer.toString(r); 
			String project_name = text+":"+num;
			File f=new File("C://Workspace//Mantis//project_names.txt");
			f.createNewFile();
			FileWriter y=new FileWriter("C://Workspace//Mantis//project_names.txt");
			BufferedWriter q=new BufferedWriter (y);
			q.write(project_name);
			q.newLine();
			q.flush();
			driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(project_name);
			}else
			driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);
			log("Text: "+text+" was typed to: "+object);
			return result_pass;
		}catch (Exception e){
			log("Cannot type text. Probably the element has not been found. "+e.getMessage());
			return result_fail;
		}
	}//end of the method
	
	public String readTable(String tableXpath) throws IOException, InterruptedException{
		FileReader o=new FileReader ("C://Workspace//Mantis//project_names.txt");
		BufferedReader p=new BufferedReader (o);
		String x="";
		String project_name="";
		String actual_name="";
		boolean present = false;
		while ((x=p.readLine())!=null){
			project_name = x;
			System.out.println(x);
		}//end of the while loop
		Thread.sleep(10000);	
		WebElement table = driver.findElement(By.xpath("html/body/table[3]"));
		List <WebElement> rows = table.findElements(By.tagName("tr"));
		for(int rows_Num=2;rows_Num<rows.size();rows_Num++){
			List <WebElement> cells = rows.get(rows_Num).findElements(By.tagName("td"));
			for(int col_Num=0;col_Num<1;col_Num++){
				actual_name = cells.get(col_Num).getText();
				if(project_name.equals(actual_name)){
					present = true;
				}else
					present = false;
				}//end of the for-2 loop
		}//end of the for-1 loop
		if(present = true){
			return result_pass;
		}else
			return result_fail;
	    }//end of the method
	
	public String select(String text, String object){
		log("Selecting element from the list.");
		try{
			driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);
			log(text+ " was selected from: "+object);
			return result_pass;
		}catch (Exception e){
			log("Cannot select the element. Probably the element has not been found. "+ e.getMessage());
			return result_fail;
		}
	}
	
	public String directSelect(String xpath){
		try{
			driver.findElement(By.xpath(xpath)).click();
			return result_pass;
		}catch(Exception e){
			log("Cannot click on the element. "+ e.getMessage());
			return result_fail;
		}
	}
	
	public String directType(String path, String text){
		try{
			driver.findElement(By.xpath(path)).sendKeys(text);
			return result_pass;
		}catch(Exception e){
			log("Cannot type text to the field. "+ e.getMessage());
			return result_fail;
		}
	}//end of the method
	
	public boolean isElementPresent(String object){
		log("Checking if element is present");
		int count = driver.findElements(By.xpath(OR.getProperty(object))).size();
		if(count ==0){
			log("Element: "+object+" is not found");
			return false;
		}else {
			log("Element: "+object+" is found");
			return true;
		}
	}
	
	
	public String verifyLinkText(String linkXpath, String expectedText){
		log("Verifying Link Text");
		try{String linkText = driver.findElement(By.xpath(OR.getProperty(linkXpath))).getText();//some selenium code
		if(linkText.equals(expectedText)){
			log("Link text was verified.");
			return result_pass;
		}else{
			log("Verifying Link Text: '"+expectedText+"' FAILED. The text of the link is not equal");
			return result_fail;	
		}
		}catch(Exception e){
			log("Probably the issue is in xpath"+ e.getMessage());
			return result_fail;}
		}
	
	public String verifyTextinInput(String fieldXpath, String inputText){
		log("Verifying if the data was sent to the field");
		try{
			String actual =driver.findElement(By.xpath(OR.getProperty(fieldXpath))).getAttribute("value");
			String expected = inputText;
			if(actual.equals(expected)){
				log("The data: "+inputText+" was sent to the object");
				return result_pass;	
			}else {
				log("Data in the field is not equal to data taken from the sheet.");
				return result_fail;
			}
			}catch(Exception e){
			log("The data was not sent to the field" + e.getMessage());
			return result_fail;
		}
	}

	
	public String verifyButtonText(String buttonXpath, String buttonText){
		log("Verifying button text");
		try{
			String actual = driver.findElement(By.xpath(OR.getProperty(buttonXpath))).getText();
			if(actual.equals(buttonText)){
				log("Button text was verified.");
				return result_pass;
			}else {
				log("The button's text does not match");
				return result_fail;	
			}
			}catch(Exception e){
			log("The button was not found. "+ e.getMessage());
			return result_fail;}
		}
	
	public String verifyText(String objectXpath, String data){
		log("Verifying text");
		try{String text = driver.findElement(By.xpath(OR.getProperty(objectXpath))).getText();
		if(text.equals(data)){
			log("The text was verified. ");
			return result_pass;
		}else{
			log("Verifying text: '"+data+"' FAILED. The text is not equal");
			return result_fail;	
		}
		}catch(Exception e){
			log("Probably the issue is in xpath. "+e.getMessage());
			return result_fail;
		}
		
	}//end of the method
	
	public  String selectList(String listXpath, String value){
		log("Selecting from list");
		try{ 
			if(!value.equals("RANDOM_VALUE")){
			  driver.findElement(By.xpath(OR.getProperty(listXpath))).sendKeys(value);
			}else{
				// logic to find a random value in list -  random value is taken if you do not specify data but want to  test random parameter   
				WebElement droplist= driver.findElement(By.xpath(OR.getProperty(listXpath))); 
				List<WebElement> droplist_cotents = droplist.findElements(By.tagName("option"));
				Random num = new Random();
				int index=num.nextInt(droplist_cotents.size());
				String selectedVal=droplist_cotents.get(index).getText();
			   driver.findElement(By.xpath(OR.getProperty(listXpath))).sendKeys(selectedVal);
			}
		}catch(Exception e){
			log("Could not select from list. "+ e.getMessage());
			return result_fail;	
		}
		log("The element: "+value+" was selected. ");
		return result_pass;	
	}//end of the method
	
	public  String verifyListSelection(String object,String data){
		log("Verifying the selection of the list");
		try{
			String expectedVal=data;
			//System.out.println(driver.findElement(By.xpath(OR.getProperty(object))).getText());
			WebElement droplist= driver.findElement(By.xpath(OR.getProperty(object))); 
			List<WebElement> droplist_cotents = droplist.findElements(By.tagName("option"));
			String actualVal=null;
			for(int i=0;i<droplist_cotents.size();i++){
				String selected_status=droplist_cotents.get(i).getAttribute("selected");
				if(selected_status!=null)
					actualVal = droplist_cotents.get(i).getText();			
				}
				if(!actualVal.equals(expectedVal))
				log("Value is not in the list - "+expectedVal);	
				return result_fail;
		}catch(Exception e){
			log("Could not find list. "+ e.getMessage());
			return result_fail;	
		}	
	}//end of the method
	
	public String verifyAllListElements(String object, String data){
		log("Verifying all the list elements");
	try{	
		WebElement droplist= driver.findElement(By.xpath(OR.getProperty(object))); 
		List<WebElement> droplist_cotents = droplist.findElements(By.tagName("option"));
		// extract the expected values from OR. properties
		String temp=OR.getProperty(data); //set a link in xlsx to or.properties (in the data column) and in the or.prop set the actual list 
		String allElements[]=temp.split(",");
		// check if size of array == size if list
		if(allElements.length-1 != droplist_cotents.size()){
			log("Sizes of lists do not match.");
			return result_fail;	}
		for(int i=0;i<droplist_cotents.size();i++){
			if(!allElements[i].equals(droplist_cotents.get(i).getText())){
				log("Element not found - "+allElements[i]);
				return result_fail;
		}
			}
		}
catch(Exception e){
		log("Could not select from list. "+ e.getMessage());
		return result_fail;	
	}
        log("All elements in the list were verified. ");	
		return result_pass;	
	}//end of the method
		
	public  String selectRadio(String object, String data){
		log("Selecting a radio button");
		try{
			String a=OR.getProperty(object);
			String temp[]=a.split(DATA_SPLIT);
			driver.findElement(By.xpath(temp[0]+data+temp[1])).click();
		}catch(Exception e){
			log("Not able to find radio button"+ e.getMessage());
			return result_fail;	
		}
		log("Radio button was selected");
		return result_pass;	
	}//end of the method
	
	public  String verifyRadioSelected(String object, String data){
		log("Verify Radio Selected");
		try{
			String a = OR.getProperty(object);
			String temp[]=a.split(DATA_SPLIT);
			String checked=driver.findElement(By.xpath(temp[0]+data+temp[1])).getAttribute("checked");
			if(checked==null){
				log("Radio button was not selected.");
				return result_fail;	}
		}catch(Exception e){
			log("Not able to find radio button. "+e.getMessage());
			return result_fail;	
		}
		log("Radio selection was verified.");
		return result_pass;	
	}//end of the method
	
	public  String checkCheckBox(String checkboxXpath){
		log("Checking checkbox.");
		try{
			// true or null
			String checked=driver.findElement(By.xpath(OR.getProperty(checkboxXpath))).getAttribute("checked");
			if(checked==null)// checkbox is unchecked
				driver.findElement(By.xpath(OR.getProperty(checkboxXpath))).click();
		}catch(Exception e){
			log("Could not find checkbox. "+e.getMessage());
			return result_fail;
		}
		log("Check box was checked.");
		return result_pass;
	}//end of the method
	
	public String unCheckCheckBox(String object){
		log("Unchecking checkBox.");
		try{
			String checked=driver.findElement(By.xpath(OR.getProperty(object))).getAttribute("checked");
			if(checked!=null)
				driver.findElement(By.xpath(OR.getProperty(object))).click();
		}catch(Exception e){
			log("Could not find checkbox "+e.getMessage());
			return result_fail;
		}
		log("Checkbox was unchecked.");
		return result_pass;
	}//end of the method
	
	public  String verifyCheckBoxSelected(String checkboxXpath){
		log("Verifying checkbox selected.");
		try{
			String checked=driver.findElement(By.xpath(OR.getProperty(checkboxXpath))).getAttribute("checked");
			if(checked!=null){
				log("Checkbox selection was verified.");
				return result_pass;
			}else{
				log("Checkbox was not selected.");
				return result_fail;}
	}catch(Exception e){
		    log("Could not find checkbox. "+e.getMessage());
			return result_fail;
		}
	}//end of the method
	
	public String pause(String data) throws NumberFormatException, InterruptedException{
		log("Pausing for: "+data+" seconds");
		try{
		long time = (long)Double.parseDouble(data);
		Thread.sleep(time*1000L);
		log("Pause was successfully proceeded.");
		return result_pass;
		}catch(Exception e){
			log("Cannot to pause. "+e.getMessage());
			return result_fail;
		}
	}//end of the method
	
	public  String synchronize(){//waiting for page to be load completly 
		log("Waiting for page to load");
		((JavascriptExecutor) driver).executeScript(
        		"function pageloadingtime()"+
        				"{"+
        				"return 'Page has completely loaded'"+
        				"}"+
        		"return (window.onload=pageloadingtime());");
        
		return result_pass;
	}//end of the method
	
	public String closeBrowser(){		
	log("Clothing the browser.");
		try{
		driver.quit();
		log("The browser was closed.");
		return result_pass;
		}catch(Exception e){
			log("Cannot close the browser. "+ e.getMessage());
			return result_fail;
		}
	}//end of the method
	
	public void captureScreenshot(String result) throws IOException{
		try{
			if(result.equals(result_fail)){
			try{
					String filename = "Screenshot-";
				    Date d = new Date(); 
				    Timestamp t = new Timestamp(d.getTime());  
				    String timeStamp = t.toString();  
				    timeStamp = timeStamp.replace(' ', '_'); 
				    timeStamp = timeStamp.replace(':', '_');
				    File scrnsht = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
				    FileUtils.copyFile(scrnsht, new File(ScreenshotsFolder+"/"+filename+timeStamp+".jpg"));
				    } catch (Exception e) {
				    e.printStackTrace();
				    }
			}
		  }catch(Exception e){
			log("Cannot make screenshot. " +e.getMessage());
		}
		}//end of the method
	
	public String time(){
    	Calendar cal = Calendar.getInstance();
    	cal.getTime();
    	SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
    	String currentTime=sdf.format(cal.getTime());
    	return currentTime;
    }
	
	public String typeByName(String elementsName, String text){
		try{
			driver.findElement(By.name(elementsName)).sendKeys(text);;
			return Result.PASSED;
		}catch(Exception e){
			log("Cannot find the element. "+ e.getMessage());
			return Result.FAILED;
		}
	}//end of the method
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ application specific functions~~~~~~~~~~~~~~~~~~~~~~
	
	//SINGLETON
	public static WebConnector getInstance(){
		if (w==null){
			w= new WebConnector();
		}
		return w;
	}
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`utility functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	public boolean isLoggedIn(){
	return false;
	}//end of the method
	
	public void clearCookie(){
		driver.manage().deleteAllCookies();
	}
	
	public String loggingIn(){
		//driver.navigate().to(CONFIG.getProperty(url));
		  try{
	      navigate("loginurl");
	      type(CONFIG.getProperty("userlogin"), "username");
	      type(CONFIG.getProperty("userpassword"), "password");
	      click("loginButton");
	      log("Default logging in was performed.");
	      return result_pass;
		  }catch(Exception e){
			  log("Cannot log in.");
			  return result_fail;
			    }
		}
	
	public void log(String msg){
		APP_LOGS.debug(msg);
		
	}

	public String getText(String xpath) {
		try{String text =driver.findElement(By.xpath(xpath)).getText();
		return text;
		}catch (Exception e){
			return result_fail;
		}
	}//end of the method
}









