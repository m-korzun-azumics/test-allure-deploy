
import allureReporter from '@wdio/allure-reporter'
import supertest from 'supertest'
import { isNoSubstitutionTemplateLiteral, isNumericLiteral } from 'typescript';
import { BASE_URL } from '../api/api-config';

const request = supertest(BASE_URL)
let response : supertest.Response

/**Here I wrote a bit of tests around API topic */
describe("Base page test", async () => {
    it("GET test request /api/users/2", async () => {

        response = await request.get('/api/users/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

        const body = response.body
        await expect(body.data.first_name).toContain("Janet") //Janet
      });

    it("POST test request", async () => {

        response = await request.post('/api/users')
        .send({name : 'Vladimir', job : 'QAEngineer'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

         await expect(response.body.name).toEqual('Vladimir')
         await expect(response.body.job).toEqual('QAEngineer')
         await expect(response.body.id).toMatch(/^\d+$/)
  
      }); 

    /** Also we have in-built functionality to make MOCKS and SPY */
    it("MOCK test request", async () => {
        await browser.url('https://todomvc-app-for-testing.surge.sh/')
        let input = await $('input[class="new-todo"]')
        await input.setValue('ToDo something')
        await browser.keys('Enter')
          
        
       
        
        
      });
  });