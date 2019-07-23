package test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class test {
	WebDriver driver;
	@Given("application displaying welcome message")
	public void application_displaying_welcome_message() {
	   
	
		
		
		   System.out.println("Welcome to this Page!!");
		}

	@When("user opens login application")
	public void user_opens_login_application() {
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\saranya.a.shanmugam\\Downloads\\chromedriver_win32\\chromedriver.exe");
		System.setProperty("webdriver.gecko.driver","C:\\Selium 3.0\\Selium 3.0\\New folder\\geckodriver.exe");
		driver=new FirefoxDriver();
		driver.get("http://newtours.demoaut.com");
	}

	@When("entering username as {string}")
	public void entering_username_as(String un) {
		 driver.findElement(By.name("userName")).sendKeys(un);
	}

	@When("entering password as {string}")
	public void entering_password_as(String psd) {
		driver.findElement(By.name("password")).sendKeys(psd);
	}

	/*@Then("click Submit")
	public void click_Submit() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("Validate login success")
	public void validate_login_success() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}*/



}
