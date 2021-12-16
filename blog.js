let blogs = []

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0]);

    let blog ={
        title: title,
        content: content,
        image: image,
        author: 'Faza Lanang Djati',
        postAt: new Date()
    }

    blogs.push(blog)
    alert ("Blog berhasil di post")

    renderBlog()
}

function renderBlog(){
    let contentContainer = document.getElementById('contents');

    contentContainer.innerHTML= ''

    for( let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML += `
                                        <div class="blog-list-item">
                                        <div class="blog-image">
                                        <img src="${blogs[i].image}" alt="" />
                                        </div>
                                        <div class="blog-content">
                                        <div class="btn-group">
                                            <button class="btn-edit">Edit Post</button>
                                            <button class="btn-post">Post Blog</button>
                                        </div>
                                        <h1>
                                            <a href="blog-detail.html" target="_blank"
                                            > ${blogs[i].title}</a
                                            >
                                        </h1>
                                        <div class="detail-blog-content">
                                            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
                                        </div>
                                        <p>${blogs[i].content}</p>
                                        <div style="text-align: right; font-size: 15; color: gray;">${getDistanceTime(blogs[i].postAt)}</div>
                                        </div>
                                    </div>`
    }
}

let month = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]

function getFullTime(time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return result
}

function getDistanceTime(time) {
    let timePost = time
    let timeNow = new Date ();
    let distance = timeNow - timePost

    let milisecond = 1000;
    let secondInMinutes = 60;
    let minutesInHours = 60;
    let hoursInDay = 23;

    let disctanceDay = Math.floor(distance / (milisecond * secondInMinutes * minutesInHours * hoursInDay));

    if (disctanceDay >= 1){
        return`${disctanceDay} day ago`
    }else {
        let distanceHours = Math.floor(distance / (milisecond * secondInMinutes * minutesInHours))
        if (distanceHours >= 1){
            return`${distanceHours} Hours ago`
        }else{
            let distanceMinutes = Math.floor(distance / (milisecond * secondInMinutes ))
            if (distanceMinutes >= 1){
                return`${distanceMinutes} Minutes ago`
            }else{
                let distancesecond = Math.floor(distance / (milisecond))
                    return`${distancesecond} Second ago`
            }
        }
    }
}

setInterval(()=>{
    renderBlog()
},1000)

