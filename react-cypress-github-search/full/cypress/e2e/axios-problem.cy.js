/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//   },
// ];

data.forEach(({ submission_link: url, id }) => {
  describe("Aixos Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("Check if user search functionality is working properly-1", () => {
      cy.intercept("GET", `https://api.github.com/search/users?q=2v&per_page=10&page=1`).as("githubSearch");
      cy.visit(url);
      cy.get('[data-testid="search_key"]').type("2v");

      cy.wait("@githubSearch");
      cy.get('[data-testid="github_results"]')
        .children()
        .should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if user search functionality is working properly-2", () => {
      cy.intercept("GET", `https://api.github.com/search/users?q=f7&per_page=10&page=1`).as("githubSearch");
      cy.visit(url);
      cy.get('[data-testid="search_key"]').type("f7");

      cy.wait("@githubSearch");
      cy.get('[data-testid="github_results"]')
        .children()
        .should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if pagination is working properly", () => {
      cy.intercept("GET", `https://api.github.com/search/users?q=2v&per_page=10&page=1`).as("githubSearch");
      cy.visit(url);
      cy.get('[data-testid="search_key"]').type("2v");

      cy.wait("@githubSearch");
      cy.get('[data-testid="pagination_cont"]')
        .children()
        .eq(1)
        .click()
        .then(() => {
          cy.get('[data-testid="github_results"]')
          .children()
          .should("have.length", 10);
        })
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if updating per page results is updating the search results correctly", () => {
      cy.intercept("GET", `https://api.github.com/search/users?q=2v&per_page=10&page=1`).as("githubSearch-1");
      cy.intercept("GET", `https://api.github.com/search/users?q=2v&per_page=20&page=1`).as("githubSearch-2");
      cy.visit(url);
      cy.get('[data-testid="search_key"]').type("2v");
      cy.wait("@githubSearch-1");

      cy.get("select").select(2).invoke("val")
      .then(() => {
        cy.wait("@githubSearch-2");
        cy.get('[data-testid="github_results"]')
        .children()
        .should("have.length", 20);
      })
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
