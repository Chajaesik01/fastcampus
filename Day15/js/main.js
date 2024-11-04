console.log("Hello Parcel!");

//async 비동기 
async function test(){
    const profimse = Promis.resolve(123)
    console.log(await profimse)
}
test()