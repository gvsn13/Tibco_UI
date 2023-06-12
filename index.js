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
        //"Access-Control-Allow-Methods": "GET",
        // "Access-Control-Allow-Headers": X-PINGOTHER,
        }
    })
    .then(resp => resp.json())
    .then(json=>console.log(JSON.stringify(json)));

}

inputbt.addEventListener("click", ()=>{
    getqueue(inputBox.value);
})