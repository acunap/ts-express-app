import assert from 'assert';
import { Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import { app } from '../../../src';

let _request: request.Test;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(app).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status);
});

Then('the response should be:', async (response) => {
  const expectedResponse = JSON.parse(response);
  _response = await _request;
  assert.deepStrictEqual(_response.body, expectedResponse);
});
