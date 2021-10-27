# 
#   Feature de 'Aviso de Conflito' que avisa ao usuário quando um mesmo
#   horário ou o intervalo do horário tenta ser reservado duas vezes 
# 


Feature: Conflict warning to meeting
    As a user
    I want to make time for a meeting
    So that I get a warning message

    Scenario: Receive an invite to a meeting 
        Given I am at the "Invite for a meeting" page 
        And I have a meeting scheduled at "3:00 pm to 4:00 pm"
        When I try to schedule a meeting at "3:00 pm to 4:00 pm"
        Then I can to see a message "Erro! You already have another meeting scheduled in this time."

    Scenario: Create a new meeting with same time
        Given I am at the "Create a new meeting" page
        And I have a meeting scheduled at "10:30 am to 11:00 am"
        When I try to create a new meeting for "10:00 am to 10:40 am"
        Then I can to see a message "Erro! You already have another meeting scheduled in this time."

    Scenario: Receive an invite to a meeting with available time 
        Given I am at the "Invite for a meeting" page
        And I have not any meeting scheduled
        When I try to schedule a meeting at "6:20 pm to 6:50 pm"
        Then I can to see a message "Meeting scheduled successfully!"

    Scenario: Create a new meeting with available time
        Given I am at the "Create a new meeting" page
        And I have a meeting scheduled at "8:00 am to 9:00 am"
        When I try to create a new meeting for "9:00 am to 10:00 am"
        Then I can to see a message "Meeting created successfully!"
        And I can to see a meeting scheduled at "9:00 am to 10:00 am"