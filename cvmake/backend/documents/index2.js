

module.exports = ({
    temel,
    iş,
    eğitim,
    işlist,
    eğlist,
    nitelik,
    ref,
    ilgi,
    foto,
    page,
    file
}) => {
    
    let myed =""
    eğlist.map(element => {
        myed = myed + `
        <div>
            <h3 class="float-left text-secondary">• </h3> <h3 class="ps-3 text-secondary">${element.okul}</h3>
            <p class="m-0 ps-3">${element.bölüm} • ${element.baş}" - "+${element.bitiş }</p>
            
        </div>`
    })
    let myexps = ""

    işlist.map(element => {
        myexps = myexps + `
        <div>
            <h3 class="float-left text-secondary">• </h3> <h3 class="ps-3 text-secondary">${element.ünvan}</h3>
            <p class="m-0 ps-3">${element.kurum} • ${element.baş}" - "+${element.bitiş }</p>
            <p class=" ps-3">${element.desc}</p>
        </div>`
    })
    switch(page){

        case 0:
            return `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <style>
                    html,
                    body {
                    font-family: "Poppins", sans-serif;
                    font-size: 1.2em;
                    }
                    .fs-small {
                        font-size: 1em;
                    }
                    
                    .font-bold{
                        font-size: 1.3em;
                        font-weight: 600;
                    }
                    .float-left {
                        float:left;
                    }
                    .technology {
                        padding: 2px 8px;
                        margin-right: 15px;
                        display: flex;
                        align-items: center;
                        background-color: #fff;
                    }
                    .ls-2 {
                        letter-spacing: 2px;
                    }
                </style>
                <title>Resume</title>
              </head>
                <body>
                    <div>
                       
                        <div class="px-4">
                            <h2 class="mx-4 font-bold mt-4">${temel.name + " " + temel.surname } </h2>
                            <p class="mx-4 fs-small mb-2 text-secondary"></p>
                        </div>
            
                        <hr></hr>
                        
                        <div class="px-4">
            
                            <div class="col-5 float-left bg-light p-4">
            
                                <h3 class="mb-3 ls-2">• INFO</h3>
            
                                <h4 class="m-0 text-secondary">Position:</h4>
                                <p class="m-0 mb-2">${iş.ünvan}</p>
                                <h4 class="m-0 text-secondary">Location:</h4>
                                <p class="m-0 mb-2">${iş.kurum}</p>
                                <h4 class="m-0 text-secondary">Contact:</h4>
                                <p class="m-0 mb-2">${temel.tel}</p>
                                <h4 class="m-0 text-secondary">E-Mail:</h4>
                                <p class="m-0">${temel.mail}</p>
            
                                <hr></hr>
            
            
                                <h3 class="mb-3 ls-2">• SKILLS</h3>
            
                                <div class="d-flex flex-wrap">
                                    ${nitelik}
                                </div>
            
                            </div>
            
                            <div class="col-7 float-left p-4">
            
                                <h3 class="mb-3 ls-2">• ABOUT</h3>
            
                                <p class="m-0">${temel.adres}</p>
            
                                <hr></hr>
            
                                <h3 class="mb-3 ls-2">• WORK EXPERIENCE</h3>
            
                                ${myexps}
            
                                <hr></hr>
            
                                <h3 class="mb-3 ls-2">• EDUCATION</h3>
            
                                ${myed}
            
                            </div>
                        </div>
                        
                    </div>
                </body>
            </html>
            
            
            `
            case 1:
                return `<p class="m-0 mb-2"></p>`
    }
}