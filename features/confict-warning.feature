# 
#   Feature de 'Aviso de Conflito' que serve para avisar ao usuário
#   quando um mesmo horário é reservado por mais de uma pessoa 
# 


Feature: As a user
         I want to make time for a meeting
         And already exists other user with a meeting scheduled at the same time
         So that I get a warning message

Scenario: Schedule a meeting
Given I am at the "Schedule a Meeting" page
And I see the time "3 pm" is available
When I try to schedule a meeting for "3 pm"
Then I can to see "Warning Message"