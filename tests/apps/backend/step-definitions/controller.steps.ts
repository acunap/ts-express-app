import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import { Server } from '@backend/server';

let _server: Server;
let _request: request.Test;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(_server.app).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status);
});

Then('the response body should be:', async (response) => {
  const expectedResponse = JSON.parse(response);
  _response = await _request;
  assert.deepStrictEqual(_response.body, expectedResponse);
});

BeforeAll(() => {
  _server = new Server();
  _server.start();
});

AfterAll(() => {
  _server.stop();
});
