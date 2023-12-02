const api = "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";

const inp = document.getElementById('inp');
const images = document.querySelector('.images');
//const inp_val = document.getElementById('inp_val');

const getImage = async () =>{

    // Make a request to openAI
   // console.log('clicked');
    const methods = {
        method : "POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt": inp.value,
                "n":3,
                "size":"256x256"
            }
        )
        
    }
    //inp_val.innerHTML = inp.value;
    //inp.value = '';
    const res = await fetch ("https://api.openai.com/v1/images/generations", methods);

    // parse the response as json
    const data = await res.json()
    
    
    const listImages = data.data;
    images.innerHTML = ''

    listImages.map(photo => {
        const container = document.createElement("div")
        images.append(container)

        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })

}










