package com.SwitchED.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.SwitchED.Generics.FileUtilities;

public class HomePage {
	
	public HomePage(WebDriver driver) 
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath ="//span[@class='d-none d-sm-inline-block'][contains(text(),'Sign Up')]")
	private WebElement signUpbtn;

	
	@FindBy(xpath = "//a[contains(text(),'Classrooms')]")
	private WebElement classroomsBtn;
	
	@FindBy(xpath = "/html/body/header/div[1]/nav/div/div[1]/div[2]/a[1]/span")
	private WebElement signinbtn;
	
	@FindBy(xpath = "//li[@id='childTab']")
	public  WebElement allchildren;
	
	public void clickOnSignUpBtn(WebDriver driver)
	{
		signUpbtn.click();
		
		FileUtilities.verifyTitlePage(driver, "Welcome");
	}
	
	public void clickOnClassRoom(WebDriver driver)
	{
		classroomsBtn.click();
		FileUtilities.verifyTextMessage(driver, "//h2[contains(text(),'Classrooms')]", "Classrooms");
	}
	
	public void clickOnSignInBtn()
	{
		signinbtn.click();
	}
	
	public void verifychildname(WebDriver driver)
	{
		FileUtilities.verifyTextMessage(driver, "//li[@id='childTab']", "My Children1");
	}
	
	
	
}
