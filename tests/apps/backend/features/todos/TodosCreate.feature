Feature: Create a new todo

  Scenario: Valid new todo
    Given I send a put request to "/todos/0df51900-a2a1-4327-8f7b-5f09b8717c34" with body:
    """
    {
      "id": "0df51900-a2a1-4327-8f7b-5f09b8717c34",
      "title": "test title",
      "description": "test description"
    }
    """
    Then the response status code should be 201
    And the response body should be empty

  Scenario: Invalid new todo because of not valid id
    Given I send a put request to "/todos/0" with body:
    """
    {
      "title": "test title",
      "description": "test description"
    }
    """
    Then the response status code should be 400
    And the response body should be:
    """
    {
      "err": "Id must be a valid UUID."
    }
    """

  Scenario: Invalid new todo because of not valid title
    Given I send a put request to "/todos/0df51900-a2a1-4327-8f7b-5f09b8717c34" with body:
    """
    {
      "title": "",
      "description": "test description"
    }
    """
    Then the response status code should be 400
    And the response body should be:
    """
    {
      "err": "Title must be filled."
    }
    """

  Scenario: Invalid new todo because of not valid description
    Given I send a put request to "/todos/0df51900-a2a1-4327-8f7b-5f09b8717c34" with body:
    """
    {
      "title": "test title",
      "description": ""
    }
    """
    Then the response status code should be 400
    And the response body should be:
    """
    {
      "err": "Description must be filled."
    }
    """