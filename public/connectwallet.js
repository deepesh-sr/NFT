// Import ethers.js
import { ethers } from "ethers";

// Reference the button
const connectButton = document.getElementById("connectwallet");

// Function to connect to MetaMask
async function connectMetaMask() {
  console.log("Script Working");
  if (window.ethereum) {
    try {
      // Request account access if needed
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // Create a provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer
      const signer = provider.getSigner();

      // You can now use the signer or accounts[0] to interact with the blockchain
      console.log("Connected Account:", accounts[0]);
    } catch (error) {
      console.error("User rejected the request", error);
    }
  } else {
    console.error("MetaMask is not installed!");
  }
}

// Attach the function to the button
connectButton.addEventListener("click", connectMetaMask);
