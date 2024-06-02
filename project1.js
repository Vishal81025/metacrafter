// Project: Create a NFT Collection

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Step 1: Create a variable to hold a number of NFTs
let nftCollection = [];

// Step 2: Create a function to mint a new NFT with metadata
function mintNFT(shoes_type, shoes_brand, size, color) {
    // Create an object to hold the NFT metadata
    const nft = {
        shoes_type : shoes_type,
        shoes_brand : shoes_brand,
        size : size,
        color : color
    };
    
    // Store the new NFT in the nftCollection array
    nftCollection.push(nft);
}

// Step 3: Function to list all NFTs metadata
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Shoes Type: ${nft.shoes_type}`);
        console.log(`  Shoes Brand: ${nft.shoes_brand}`);
        console.log(`  Size: ${nft.size}`);
        console.log(`  color: ${nft.color}`);
    });
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
    return nftCollection.length;
}

// Example usage:
mintNFT('formal','Liberty', '08', 'Black');
mintNFT("sports", "Pumma","07", "white");

console.log("Listing all NFTs:");
listNFTs();

console.log("\nTotal Supply of NFTs:");
console.log(getTotalSupply());
