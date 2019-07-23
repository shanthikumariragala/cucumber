Feature: purchase products in Online 

#certain steps need to execute
Background: display welcome message
Given application displaying welcome message 

#@login @regression
Scenario: validate login functionality

When user opens login application
And entering username as "mercury"
And entering password as "mercury"

