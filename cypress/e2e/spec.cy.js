describe('empty spec', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000/');
});
  it('load the page', () => {
    cy.contains('Podcaster');
  })

  it('render 100 podcast', () => {
    cy.contains('100');
  })
  it('navigate to a podcast', () => {
    cy.contains('No Jumper - No Jumper').click();
  })
  it('list episodes of podcast', () => {
    cy.contains('No Jumper - No Jumper').click();
    cy.get('table');
  })
  it('list episodes of podcast', () => {
    cy.contains('No Jumper - No Jumper').click();
    cy.get('table');
    cy.get('tbody').find('tr').should('have.length', 99);
  })
  it('navigate to episo', () => {
    cy.contains('No Jumper - No Jumper').click();
    cy.get('table');
    cy.get('tbody').find('tr').find('td').first().click();
  })
})