it('loads examples', () => {
  cy.visit('/');
  cy.contains('Willkommen in Peters Bücherverwaltung!');
});
