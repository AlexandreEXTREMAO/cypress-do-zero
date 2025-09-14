describe ('Testes de login', () => {
    it('Logando com sucesso', () => {
        //visitando o site
        cy.visit('https://front.serverest.dev/login')

        //logando com credenciais válidas
        cy.get('[data-testid="email"]').type('Alexandree@hotmail.com')
        cy.get('[data-testid="senha"]').type('12345678')
        cy.get('[data-testid="entrar"]').click()

    })

    it('Adicionando 1 item ao carrinho', () => {
        //visitando o site
        cy.visit('https://front.serverest.dev/login')

        //logando com sucesso
        cy.get('[data-testid="email"]').type('Alexandree@hotmail.com')
        cy.get('[data-testid="senha"]').type('12345678')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="home"]').click()
        cy.wait(2000)

        //adicionando 1 dos itens ao carrinho
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="adicionar carrinho"]').click()
        cy.get('h1').contains('Em construção aguarde')
    })

    it('Adicionando todos os itens ao carrinho', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('Alexandree@hotmail.com')
        cy.get('[data-testid="senha"]').type('12345678')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="home"]').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="adicionar carrinho"]').click()
        cy.get('h1').contains('Em construção aguarde')
        cy.get('[data-testid="home"]').click()
    })
    
})
