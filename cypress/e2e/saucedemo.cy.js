describe('template spec - conjunto de pruebas', () => {
  it('login Valido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should("be.visible")

    // Captura de evidencia
    // cy.screenshot("Login valido");
  })

  it('login Invalido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_u")
    cy.get('[data-test="password"]').type("secret_sau")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service")

    // Captura de evidencia
    // cy.screenshot("Login invalido");

  })


  it('Agregar productos al carrito', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-badge"]').contains("2")
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="cart-list"] > :nth-child(3)').should("be.visible")
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').contains("Sauce Labs Backpack")
    cy.get('[data-test="cart-list"] > :nth-child(4)').should("be.visible")
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').contains("Sauce Labs Bike Light")

    // Captura de evidencia
    // cy.screenshot("Productos en el carrito");
  })

  it('Proceso de checkout', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type("Mari")
    cy.get('[data-test="lastName"]').type("Casta")
    cy.get('[data-test="postalCode"]').type("12345")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').contains("Thank you for your order!")

    // Captura de evidencia
    // cy.screenshot("Compra Exitosa");
  })

})