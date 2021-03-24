let i = 0; // story number; stories[i]

function validate(form) {
    let words = [];
    // validate form
    for (let story of form) {
        // re-focus
        for(let x = 0; x < stories[i].words.length;x++){
            if (form[story.id - 1].value !== "") {
                // words[story.name] = form[story.id - 1].value;
                stories[i].words[story.name] = form[story.id - 1].value;
            } else {
                form[story.name].focus();
                alert(story.name + ' should not be empty !');
            }
            // log output
            if(stories[i].words[story.name] === undefined){
                return;
            }else{
                words = stories[i].words;
                document.getElementById("input").innerHTML = `<div>
                    <div class="card">
                        <div class="card-header text-primary"> ${stories[i].title} </div>   
                        <div class="card-body"> ${ stories[i].output(words) }</div>
                        <div class="card-footer"> 
                        <button class="btn btn-success" onclick="window.history.go(-1); return false;"> Create another story </button>
                        </div> 
                    </div>
                </div>`;
                break;
            }
        }
    }
}


function callback(e) {
    e.preventDefault();
    document.getElementById("story").style.display = 'none';
    document.getElementById("input").style.display = 'block';
    // count
    let count = 0;
    // story
    let story = (e.srcElement.id - 1);
    i = story;
    stories[story].words.forEach((e) => {
        count++;
        document.getElementById("body").innerHTML += `<div class="card-body">
            <div class="form-group">
                    <input placeholder="${e}" class="form-control" value="" id="${count}" name="${e}">
            </div>
        </div>`
    });
}

function f() {
    document.getElementById("input").style.display = 'none';
    let index = 0; // index of array elements
    // embed story titles
    for (const story of stories) {
        index++;
        // language=HTML
        document.getElementById("story").innerHTML +=
            `<button class='btn btn-success btn-block' value=${story.title} id=${index} > ${story.title}</button>`;
    }
    // event listener
    document.getElementById("story").addEventListener("click", callback);
}

f();