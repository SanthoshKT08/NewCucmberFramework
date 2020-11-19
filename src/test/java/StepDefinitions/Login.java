package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;

import com.SwitchED.Generics.ReadConfigProperties;
import com.SwitchED.PageObjects.HomePage;
import com.SwitchED.PageObjects.SignIn;
import com.SwitchED.PageObjects.VerificationMessage;

import Generics.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
public class Login extends BaseClass {

	public static SignIn si;

	public static HomePage hp;

	public static ReadConfigProperties pronote = new ReadConfigProperties();

	@Given("^Enter the URL$")
	public void enter_the_url()  {
		driver.get(pronote.getUrl());
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id=\"details-button\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"proceed-link\"]")).click();
	}

	@Then("^user can see home page$")
	public void user_can_see_home_page() throws Throwable {
		System.out.println("User is on Home page");
	}

	@Given("^On Home page click on Sign In$")
	public void on_home_page_click_on_sign_in()   {
		hp = new HomePage(driver);
		hp.clickOnSignInBtn();
	}

	@When("^User login with email id \"([^\"]*)\" and valid password \"([^\"]*)\"$")
    public void user_login_with_email_id_something_and_valid_password_something(String emailid, String password) {
		si = new SignIn(driver);
		si.enterEmailAdress(emailid);
		si.enterPassword(password);
    }

	@Then("^User clicks on sign in button$")
	public void user_clicks_on_sign_in_button()   {
		si.clickOnLoginBtn();
	}

	@And("^On success User login to the application$")
	public void on_success_user_login_to_the_application() {
		System.out.println("On success User login to the application");
		VerificationMessage v = new VerificationMessage(driver);
		v.verifyafterlogintxt(driver);
	}


}