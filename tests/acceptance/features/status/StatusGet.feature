Feature: Get API status

  Scenario: Get API status
    Given I send a GET request to "/status"
    Then the response status code should be 200
    And the response body should be:
    """
    {
      "status": "Ok"
    }
    """