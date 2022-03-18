const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()

let a;
window.onload = async function myfunc1(){
  a = ethers.getSinger()
