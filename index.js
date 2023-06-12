const inputBox = document.querySelector(".inputi");
const display = document.querySelector(".displayp");
const inputbt = document.querySelector(".btnok");

async function getqueue(queueName){
    alert(queueName);
    const url = `${queueName}`;
    // const headers = {
    //     Authorization: "Bearer CIC~OXMxtvy3D60qvyINr0clRqIL"
    // }

    const response = await fetch(url, {
        method: 'GET',
        mode: "no-cors",
        headers: {
        Authorization: "Bearer CIC~OXMxtvy3D60qvyINr0clRqIL",
        "Access-Control-Allow-Origin": "*",
        }
    })
    .then(resp => resp.json());
    console.log(response);

}

inputbt.addEventListener("click", ()=>{
    getqueue(inputBox.value);
})