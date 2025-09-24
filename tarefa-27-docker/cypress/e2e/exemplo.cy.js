
describe('Teste EBAC Shop', () => {
  it('Deve acessar a página inicial e verificar título', () => {
    cy.visit('https://www.lojaebac.ebaconline.art.br');
    cy.title().should('contain', 'EBAC Shop');
  });
});
