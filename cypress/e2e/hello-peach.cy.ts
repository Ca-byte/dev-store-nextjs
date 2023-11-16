describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://en.wikipedia.org/wiki/Now_and_Then_(Beatles_song)')
    cy.contains('Beatles', { matchCase: false }).click()
  })
})
