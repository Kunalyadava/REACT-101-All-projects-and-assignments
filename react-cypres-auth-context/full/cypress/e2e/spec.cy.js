import React from 'react'
import {render } from '@testing-library/react';
import { AuthContext } from "../../src/Context/AuthContextProvider";
import App from '../../src/App';
import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];

describe("RCT-211-B20-E1 Evaluation", () => {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    beforeEach(() => {
      cy.visit(url);
      cy.window().should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });


    it(`check if token is being displayed after aunthentication`, () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.wait("@getAuth").then(() => {
        cy.get('[data-testid="token"]').should('contain', 'QpwL5tke4Pnpja7X4')
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`check if authentication only with right credentials`, () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("anant@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.wait("@getAuth").then(() => {
        cy.get('[data-test="token"]').should('not.exist');
        cy.then(() => {
          acc_score += 2;
        });
      });
    })

    it(`check if values are being passed from the context provider only`, () => {
      var value = {
        authDetails: {
          isAuth: true,
          loading: false, 
          error: null,
          token: "ABCDEF"
        },
        setAuthDetails: function setIsAuthDetails(){
          this.authDetails.isAuth = false
          this.authDetails.token = ""
        }
      }
      
      const { getByTestId } = render(
        <AuthContext.Provider value = {value} >
          <App />
        </AuthContext.Provider>,
      );

      var token = getByTestId("token")
      expect(token).to.contain('ABCDEF');
       
      cy.then(() => {
        acc_score += 2;
      });
    })

    it(`check if the values are getting updated in context api`, () => {
      var value = {
        authDetails: {
          isAuth: true,
          loading: false, 
          error: null,
          token: "ABCDEF"
        },
        setAuthDetails: function setIsAuthDetails(){
          this.authDetails.isAuth = false
          this.authDetails.token = ""
        }
      }
      
      const { getByTestId } = render(
        <AuthContext.Provider value = {value} >
          <App />
        </AuthContext.Provider>,
      );

      var token = getByTestId("token")
      expect(token).to.contain('ABCDEF');

      var logoutBtn = getByTestId("logout")
      logoutBtn.click()

      token = getByTestId("token")
      cy.get(token).should('not.include.text', 'ABCDEF')
       
      cy.then(() => {
        acc_score += 3;
      });
    })

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
