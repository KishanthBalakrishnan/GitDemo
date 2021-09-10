package cucumberAutomation;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksOne extends Base{

	
	@Before("@MobileTest")
	public void beforevaldiation()
	{
		System.out.println("Before Mobile  hook");
	}
	
	@After("@SmokeTest")
	public void Aftervaldiation()
	{
		driver.close();
	}
	@After("@RegressionTest")
	public void AfterSeleniumTest()
	{
		driver.close();
	}
		
		@Before("@WebTest")
		public void beforeWebvaldiation()
		{
			System.out.println("Before Web  hook");
		}
		
		@After("@WebTest")
		public void AfterWebvaldiation()
		{
			System.out.println("  After Web before hook");
		}
	}
