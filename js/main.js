async function test() {
  const promise = Promise.resolve(112);
  console.log(await promise);
}
test();
