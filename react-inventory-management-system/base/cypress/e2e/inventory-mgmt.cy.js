/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: `http://localhost:8080/`
//   },
// ];

data.forEach(({ submission_link: url, id,  json_server_link: server_url}) => {
  describe("Inventory Management Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("checking Basic Structure", { retries: 1 }, function () {
      //for 2 marks
      cy.visit(url);
      cy.get(".total").should("exist").should("contain", "145");

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("Checking Children elements", { retries: 1 }, function () {
      //2 marks
      cy.visit(url);

      // Total counts
      cy.get(".totalBooks").should("exist").should("contain", "13");

      cy.get(".totalPens").should("exist").should("contain", "10");

      cy.get(".totalNotebooks").should("exist").should("contain", "44");

      cy.get(".totalInkpens").should("exist").should("contain", "78");

      // buttons for each item
      cy.get(".addBook").should("exist");
      cy.get(".remBook").should("exist");

      cy.get(".addPen").should("exist");
      cy.get(".remPen").should("exist");

      cy.get(".addNotebook").should("exist");
      cy.get(".remNotebook").should("exist");

      cy.get(".addInkpen").should("exist");
      cy.get(".remInkpen").should("exist");

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("checking book functionalities", { retries: 1 }, () => {
      //1 marks
      cy.visit(url);
      // cy.get(".books-count").should("exist").should("contain", "0");
      cy.get(".total").should("exist").should("contain", "145");
      cy.get(".addBook")
        .click()
        .then(() => {
          cy.get(".totalBooks").should("contain", "14");
          cy.get(".total").should("contain", "146");
        });
      cy.get(".remBook")
        .click()
        .click()
        .click()
        .then(() => {
          cy.get(".totalBooks").should("contain", "11");
          cy.get(".total").should("contain", "143");
        });

        cy.then(() => {
          acc_score += 2;
        })
    });

    it("checking notebooks functionalities", { retries: 1 }, () => {
      //1 marks
      cy.visit(url);
      // cy.get(".books-count").should("exist").should("contain", "0");
      cy.get(".totalNotebooks").should("contain", "44");
      cy.get(".total").should("contain", "145");
      cy.get(".addNotebook")
        .click()
        .click()
        .click()
        .then(() => {
          cy.get(".totalNotebooks").should("contain", "47");
          cy.get(".total").should("contain", "148");
        });
      cy.get(".remNotebook")
        .click()
        .then(() => {
          cy.get(".totalNotebooks").should("contain", "46");
          cy.get(".total").should("contain", "147");
        });

        cy.then(() => {
          acc_score += 2;
        })
    });

    it("checking pens functionalities", { retries: 1 }, () => {
      //1 marks
      let inc = Math.ceil(Math.random() * 10);
      if (inc < 1) inc = 2;
      cy.visit(url);
      // cy.get(".books-count").should("exist").should("contain", "0");
      cy.get(".total").should("contain", "145");

      for (let i = 0; i < inc; i++) {
        cy.get(".addPen").click();
      }

      cy.get(".totalPens").should("contain", 10 + inc);
      cy.get(".total").should("contain", 145 + inc);

      let dec = Math.floor(Math.random() * 10);
      if (dec < 1) dec = 2;

      for (let j = 0; j < dec; j++) {
        cy.get(".remPen").click();
      }

      cy.get(".totalPens").should("contain", 10 + inc - dec);
      cy.get(".total").should("contain", 145 + inc - dec);

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("checking ink-pens functionalities", { retries: 1 }, () => {
      //1 marks
      let inc = Math.ceil(Math.random() * 10);
      if (inc < 1) inc = 2;

      cy.visit(url);
      // cy.get(".books-count").should("exist").should("contain", "0");
      cy.get(".total").should("contain", "145");

      for (let i = 0; i < inc; i++) {
        cy.get(".addInkpen").click();
      }

      cy.get(".totalInkpens").should("contain", 78 + inc);
      cy.get(".total").should("contain", 145 + inc);

      let dec = Math.floor(Math.random() * 20);
      if (dec < 1) dec = 2;

      for (let j = 0; j < dec; j++) {
        cy.get(".remInkpen").click();
      }

      cy.get(".totalInkpens").should("contain", 78 + inc - dec);
      cy.get(".total").should("contain", 145 + inc - dec);

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("buttons are disabled if the product count reaches 0", { retries: 1 }, () => {
      cy.visit(url);
      for (let i = 0; i < 13; i++) {
        cy.get(".remBook").click();
      }

      cy.get(".remBook").should('be.disabled')

      for (let i = 0; i < 10; i++) {
        cy.get(".remPen").click();
      }

      cy.get('.remPen').should('be.disabled')

      cy.then(() => {
        acc_score += 2;
      })
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
