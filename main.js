let buttton = document.getElementById('btn');

buttton.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output'); 

    outputDiv.innerHTML = `<h1>${count}</h1>`
});


