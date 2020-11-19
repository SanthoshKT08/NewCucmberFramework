package com.SwitchED.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.SwitchED.Generics.FileUtilities;

public class VerificationMessage {
	
	
	public VerificationMessage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath = "//li[@id='childTab']")
	private WebElement allChildText;
	
	
	public void verifyafterlogintxt(WebDriver driver)
	{
		FileUtilities.verifyTextMessage(driver, "//li[@id='childTab']", "My Children");
	}

}
