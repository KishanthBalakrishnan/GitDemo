package TestRunner;



import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
        (
        	features="src\\test\\resources\\Featrures\\search.feature",
        	glue="stepDefinitions",
        	//tags="@MobileTest and @WebTest",
             tags= "@SeleniumTest",
              strict = true,
        	dryRun=true,
            monochrome= true,
        	plugin= {"pretty","html:target/cucumber.html","json:target/cucumber.json","junit:target/cukes.xml"}
        		)


public class TestRunner {

}
