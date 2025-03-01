function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data.message);
        document.querySelector("#dog-image").src = data.message;
    });
}

function getSpecificDog() {

}