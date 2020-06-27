/// <reference types="cypress" />

import siteMetadata from '../../../site';

const URL = 'http://localhost:3000/';

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
    const tooltip = copyLink.find('#SharePageButtonTooltip');
    tooltip.should('have.css', 'opacity', '0');
    tooltip.click({ force: true }).should('have.css', 'opacity', '1');
  });

  it('Navigation header - Theme mode', () => {
    // TODO: test CSS variable
    cy.get('body').should('have.css', 'background-color', 'rgb(254, 254, 254)');

    const themeButton = cy.get('nav button').last();
    themeButton.click();
    //rgba(17, 18, 22, 0.95);
    cy.get('body').should(
      'have.css',
      'background-color',
      'rgba(17, 18, 22, 0.95)'
    );
  });

  it('Hero heading', () => {
    cy.get('h1').should('contain.text', siteMetadata.hero.heading);
  });

  it('Should navigation to article route', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('[data-test-id="ArticlesListContainer"] a')
      .first()
      .click();
    cy.location('href', { timeout: 10000 }).should('include', '/articles/');
  });

  it('Should navigation to next page', () => {
    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('[data-test-id="NextPage"]').click();
    cy.location('pathname', { timeout: 10000 }).should(
      'eq',
      '/page/2'
    );

    cy.get('[data-test-id="PrevPage"]').click();
    cy.location('href', { timeout: 10000 }).should(
      'eq',
      'http://localhost:3000/'
    );
  });
});
