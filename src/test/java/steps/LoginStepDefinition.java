package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import page.TestBasePage;

public class LoginStepDefinition extends TestBasePage{

	LoginPage loginPage;
	
	@Before
	public void beforeRun () {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given("^User is on Techfios login page$")
	public void user_is_on_Techfios_login_page() {
		
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
	 loginPage.eneterUserName(username); 
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
	    loginPage.enterPassword(password);
	}

	@When("^User click signin button$")
	public void user_click_signin_button() {
	   loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page(){
	Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}
	
	@After
	public void tearDown () {
		driver.close();
		driver.quit();
	}
	
	
	
	
}
