let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((contest)=>{
    return contest.json()
}).then((contest)=>{
    console.log(contest);
    ihtml = ''
    for(item in contest){
        console.log(contest[item])
        ihtml += `
        <div class="card" id="contests">                    
                    <div class="card-body">
                        <h5 class="card-title">${contest[item].name}</h5>
                        <p class="card-text">Starts at ${contest[item].start_time}</p>
                        <p class="card-text">Ends at ${contest[item].end_time}</p>
                        <a href="${contest[item].url}" class="btn">Let's Go</a>
                    </div>
            </div>
        `
    }
    cardcontainer.innerHTML = ihtml;

})
