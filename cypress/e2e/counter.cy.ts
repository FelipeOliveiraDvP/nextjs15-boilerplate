describe("Counter test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should increment the counter", () => {
    cy.get("h2").should("have.text", "The counter is 0");
    cy.get("button").click();
    cy.get("h2").should("have.text", "The counter is 1");
  });
});
