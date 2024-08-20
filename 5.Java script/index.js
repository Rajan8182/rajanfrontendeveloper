async function data(){
    let item = await fetch('http://localhost:3000/product/')
    let data = await item.json()
    console.log(data[0]['profile']);
}

data()