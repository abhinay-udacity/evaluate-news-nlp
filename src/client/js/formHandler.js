import { checkForName } from "./nameChecker"
async function handleSubmit(event) {
    event.preventDefault()

    // URL or text input by user
    let inputContent = document.getElementById('inputContent').value
    console.log("::: Form Submitted :::")
    //console.log(inputContent)    

    if (checkForName(inputContent)){
        let response = await fetch(`/eval?` + new URLSearchParams({url:inputContent}))

            
        console.log("here too!")
        let res = await  response.json()
        console.log(JSON.stringify(res))
        document.getElementById("polarity").innerHTML = "Polarity=>"+res.score_tag;
        document.getElementById("confidence").innerHTML = "Confidence=>"+res.confidence;
        document.getElementById("subjectivity").innerHTML = "Subjectivity=>"+res.subjectivity; 
        document.getElementById("text").innerHTML = "Snippet of text=>"+res.sentence_list[0].text;          


            
        


    

    

    }
}

export { handleSubmit }
