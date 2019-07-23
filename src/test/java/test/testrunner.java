package test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="test/test.feature",//plugin="html:target\\HtmlReport"
plugin="json:target\\jsonreport.jsm"
//plugin="junit:target\\xmlreport.xml")

public class testrunner {

}
