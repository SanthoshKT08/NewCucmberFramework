package Generics;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import Enum.Browsers;
import Enum.OS;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver driver;
	
	public WebDriver selectBrowser(String browser)
	{
		if (System.getProperty("os.name").toLowerCase().contains(OS.WINDOW.name().toLowerCase())) {
			
			if (browser.equalsIgnoreCase(Browsers.CHROME.name())) {
				WebDriverManager.chromedriver().setup();
				driver = new ChromeDriver();
				driver.manage().window().maximize();
			}
			
			else if (browser.equalsIgnoreCase(Browsers.FIREFOX.name())) 
			{
				WebDriverManager.firefoxdriver().setup();
				driver = new FirefoxDriver();
				driver.manage().window().maximize();
			}
			
		}
		
		else if (System.getProperty("os.name").toLowerCase().contains(OS.MAC.name().toLowerCase())) {
				
				if (browser.equalsIgnoreCase(Browsers.CHROME.name())) {
					WebDriverManager.chromedriver().setup();
					driver = new ChromeDriver();
					driver.manage().window().maximize();
				}
				
				else if (browser.equalsIgnoreCase(Browsers.FIREFOX.name())) 
				{
					WebDriverManager.firefoxdriver().setup();
					driver = new FirefoxDriver();
					driver.manage().window().maximize();
				}
		}
		
		return driver;
	}
	
	

}
