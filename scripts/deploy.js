async function main() {
	// Grab the contract factory
	const TestNFT = await ethers.getContractFactory("TestNFT");

	// Start deployment, returning a promise that resolves to a contract object
	const testNFT = await TestNFT.deploy(); // Instance of the contract
	console.log("Contract deployed to address:", testNFT.address);
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
