const ChallengeCoin = artifacts.require('./ChallengeCoin')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('ChallengeCoin', ([awarder, recipient]) => {
    
    let instance
    const name = "ChallengeCoin"
    const symbol = "CHCOIN"

    beforeEach(async () => {
        // Fetch ChallengeCoin contract from blockchain
        instance = await ChallengeCoin.deployed()
    })

    describe('deployment', () => {
        it('should make first account the owner', async() => {
            let deployer = await instance.owner()
            deployer.should.equal(awarder)
        })
    })
    describe("mint", () => {
        it("creates coin with name and qualification details", async () => {
            let owner = await instance.owner()
            let coin = await instance.mintCoin("Parachutist", "Basic Para", recipient)
            let coins = await instance.tokenByIndex(0)
            let details = await instance.getCoinDetails(0)
            details.name.should.to.deep.equal("Parachutist")
            details.qual.should.to.deep.equal("Basic Para")
        });
    });
})