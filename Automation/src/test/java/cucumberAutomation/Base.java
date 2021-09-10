package cucumberAutomation;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	public static Properties prop;
	public static WebDriver getDriver() throws IOException 
	{
		prop= new Properties();
		FileInputStream fis= new FileInputStream("C:\\Users\\ELCOT\\Desktop\\CucumberJava\\Automation\\src\\test\\java\\cucumberAutomation\\global.properties");
		
		prop.load(fis);
		System.setProperty("webdriver.chrome.driver", "C:/Users/ELCOT/Desktop/Kishanthu chrome/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get(prop.getProperty("url"));
        
        return driver;
	}

}
