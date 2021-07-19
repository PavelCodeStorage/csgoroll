Feature: cs_go_roll

  As a cs_go_roll user
  I would like to make a bet
  In order to receive some benefits

  "Your additional comment"

   @bet @cs_go_roll @submit
   Scenario: User can select game options and observe results
     Given User on cs_go_roll application
     When User select following option for game
       |BetAmount | BetRate | Time  |Multiplayer| WinChange|
       |20        | x2      | 47.5  |2.0        |47.5      |
     Then The PROFIT ON WIN is equal to "40"

  @bet @cs_go_roll @clear
  Scenario: User can clear fields
    Given User on cs_go_roll application
    When User select following option for game
      |BetAmount | BetRate | Time  |Multiplayer| WinChange|
      |20        | x2      | 47.5  |2.0        |47.5      |
    And User clear fields
    Then The PROFIT ON WIN is equal to "0"
    And BetAmount error is displayed

  @bet @cs_go_roll @clear
  Scenario: User can clear fields
    Given User on cs_go_roll application
    When User click spray ripple element
    Then Spray ripple element is displayed