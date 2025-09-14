describe ('Testes de cadastro', () => {
    it('Criando cadastro como administrador', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type('Alexandre')
        cy.get('[data-testid="email"]').type('Alexandre@hotmail.com')
        cy.get('[data-testid="password"]').type('123456789')
        cy.get('[data-testid="checkbox"]').click()
        cy.get('[data-testid="cadastrar"]').click()   
        cy.get('.alert').contains('Este email já está sendo usado')
    })
})

describe ('Testes de cadastro', () => {
    it.only('Criando cadastro como usuário final', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type('Alexandree')
        cy.get('[data-testid="email"]').type('Alexandree@hotmail.com')
        cy.get('[data-testid="password"]').type('12345678')
        cy.get('[data-testid="cadastrar"]').click()   
        cy.get('.alert').contains('Este email já está sendo usado')
    })
})