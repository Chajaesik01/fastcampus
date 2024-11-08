
const A = () => {
    <B index = {index}></B>
}
const B = (index) => {
    <C index = {index}></C>
}
const C = () => {
    console.log(index);
}