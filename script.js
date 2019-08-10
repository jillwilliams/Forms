const sent = () => {
    var message = document.getElementById("table").innerHTML;
    return message;
};
const email = ( ) => {
    document.getElementById("demo").innerHTML= sent();
}