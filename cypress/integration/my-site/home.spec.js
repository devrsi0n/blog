/// <reference types="cypress" />

import { siteMetadata } from '../../../gatsby-config';

const URL = 'http://localhost:8000/';

context('Home page', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('Navigation header - Brand icon', () => {
    cy.get('nav a img').should('exist');
  });

  it('Navigation header - Copy link', () => {
    cy.get('nav button').should('have.length', 2);
    const copyLink = cy.get('nav button').first();
    const tooltip = copyLink.find('span');
    tooltip.should('have.css', 'opacity', '0');
    tooltip.click({ force: true }).should('have.css', 'opacity', '1');
  });

  it('Navigation header - Theme mode', () => {
    // TODO: test CSS variable
    cy.get('body').should('have.css', 'background-color', 'rgb(254, 254, 254)');

    const themeButton = cy.get('nav button').last();
    themeButton.click();
    //rgba(17, 18, 22, 0.95);
    cy.get('body').should('have.css', 'background-color', 'rgba(17, 18, 22, 0.95)');
  });

  it('Hero heading', () => {
    cy.get('h1').should('contain.text', siteMetadata.hero.heading);
  });

  it('Should navigation to article route', () => {
    cy.url().should('eq', 'http://localhost:8000/');
    cy.get('[data-test-id="ArticlesListContainer"] a').first().click();
    await cy.wait(250);
    cy.url().should('include', '/articles/');
  });

  it('Should navigation to next page', async () => {
    cy.url().should('eq', 'http://localhost:8000/');
    cy.get('[data-test-id="NextPage"]').click();
    await cy.wait(250);
    cy.url().should('eq', 'http://localhost:8000/page/2');
    cy.get('[data-test-id="NextPage"]').click();
    await cy.wait(250);
    cy.url().should('eq', 'http://localhost:8000/page/3');
    cy.get('[data-test-id="PrevPage"]').click();
    await cy.wait(250);
    cy.url().should('eq', 'http://localhost:8000/page/2');
    cy.get('[data-test-id="PrevPage"]').click();
    await cy.wait(250);
    cy.url().should('eq', 'http://localhost:8000/');
  });
});
