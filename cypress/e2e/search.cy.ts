describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should be able to search for products', () => {
    cy.searchByQuery('hoodie')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=hoodie')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page withouta search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
