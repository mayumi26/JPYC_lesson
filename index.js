console.log("hellow world");
console.log("こんにちは");
console.log("gm");

const provider = new ethers.providers.Web3Provider(window.ethereum)

provider.send("eth_requestAccounts", []);

const signer = provider.getSigner()

 a = provider.getBlockNumber();
 console.log(a);


/＊window.onload = function() {
 alert("ページが読み込まれました！");
};*/

 
window.onload = function() {
 console.log("ページを読み込みました！");
};
