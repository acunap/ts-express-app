Feature: Create a new todo

  Scenario: Valid new todo
    Given I send a put request to "/todos/0df51900-a2a1-4327-8f7b-5f09b8717c34" with body:
    """
    {
      "id": "0df51900-a2a1-4327-8f7b-5f09b8717c34",
      "title": "test title",
      "description: "test description"
    }
    """
    Then the response status code should be 201
    And the response body should be empty