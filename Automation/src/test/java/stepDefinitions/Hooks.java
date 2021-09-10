package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
	
	@Before("@MobileTest")
	public void beforeValidation() {
		System.out.println(" Before Mobile before hooks");
		
	}
	
	@After("@MobileTest")
	public void AfterValidation() {
		System.out.println(" After Mobile before hooks");
		
	}
	
	@Before("@WebTest")
	public void beforeWebValidation() {
		System.out.println(" Before Mobile before hooks");
		
	}
	
	@After("@WebTest")
	public void AfterWebValidation() {
		System.out.println(" After Mobile before hooks");
		
	}


}
 