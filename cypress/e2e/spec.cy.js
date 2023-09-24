describe('My First Test', () => {
	it('非URL访问测试', () => {
		expect(true).to.equal(true)
	})

	it('访问 Google 输入 “百度” 并回车', () => {
		cy.visit('https://google.com.hk')
		cy.get('button div').contains('Accept all').click()
		cy.get('textarea').first().type('百度').type('{enter}')
	})
})
