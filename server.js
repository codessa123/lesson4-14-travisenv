// Set a local variable populated by the environment variable $NAME
const MY_NAME = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${MY_NAME} rocks!`);
    await sleep(5000);
  }
}

main();
