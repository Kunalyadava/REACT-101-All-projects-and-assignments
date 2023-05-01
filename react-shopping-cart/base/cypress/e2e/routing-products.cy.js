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
  describe("Shopping Cart Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`check if authentication is working properly`, () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.location("pathname").should("eq", "/products");
      
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if products page is not accessible without authentication", () => {
      cy.visit(url + `products`);
      cy.location("pathname").should("eq", "/");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if cart page is not accessible without authentication", () => {
      cy.visit(url + `cart`);
      cy.location("pathname").should("eq", "/");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if all products are visible on products page", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProducts");
      
      cy.wait("@getProducts");
      cy.get('[data-testid="products-wrapper"]')
        .children()
        .should("have.length", 5);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if the quantity of products is upating correctly on clicking add button-1", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProductDetails");

      cy.wait("@getProductDetails");

      cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(0)
        .should("contain", "0")

      cy.get('[data-testid="add_btn"]')
      .eq(0)
      .click()
      .then(() => {
        cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(0)
        .should("contain", "1")
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if the quantity of products is upating correctly on clicking add button -2", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProductDetails");

      cy.wait("@getProductDetails");

      cy.get('[data-testid="add_btn"]')
      .eq(0)
      .click()
      .click()
      .then(() => {
        cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(0)
        .should("contain", "2")

        cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(1)
        .should("contain", "0")

        cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(2)
        .should("contain", "0")

        cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(3)
        .should("contain", "0")

        cy.get('[data-testid="products-wrapper"]')
        .children()
        .eq(4)
        .should("contain", "0")
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if go to bag button is redirecting to cart page", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProducts");
      
      cy.wait("@getProducts");
      cy.get('[data-testid="navigate_to_cart_btn"]')
        .click()
        .then(() => {
          cy.location("pathname").should("eq", "/cart");
        })

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if cart total is working correctly", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProducts");
      

      cy.get('[data-testid="add_btn"]')
      .eq(2)
      .click()
      .click()
      .then(() => {
        cy.get('[data-testid="navigate_to_cart_btn"]')
        .click()
        .then(() => {
          cy.get('[data-testid="cart-total').should("contain", "974")
          cy.go(-1);
          cy.get('[data-testid="add_btn"]')
          .eq(3)
          .click()
          cy.get('[data-testid="navigate_to_cart_btn"]')
          .click()
          cy.get('[data-testid="cart-total').should("contain", "1473")
        })
      });

      cy.then(() => {
        acc_score += 2;
      });
    });


    it("Check if clicking on any product title redirects to product details page", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProductDetails");

      cy.wait("@getProductDetails");

      cy.get('[data-testid="product_title"]')
        .eq(0)
        .click()
        .then(() => {
          cy.get('[data-testid="product-details"]').should("contain" , "399")
        })

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if clicking on any product title redirects to product details page -2", () => {
      cy.visit(url);
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.get('[data-testid="email"]').type("eve.holt@reqres.in");
      cy.get('[data-testid="password"]').type("ABCDEF");
      cy.get('[data-testid="auth_form"]').submit();

      cy.intercept("GET", `${server_url}products`).as("getProductDetails");

      cy.wait("@getProductDetails");

      cy.get('[data-testid="product_title"]')
        .eq(0)
        .click()
        .then(() => {
          cy.location("pathname").should("eq", "/products/22");
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
