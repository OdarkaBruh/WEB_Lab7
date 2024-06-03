const images = [
    {
      preview: 
        'https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      original:
        'https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: ' a row of wooden benches next to a pool ',
    },
    {
        preview:
        'https://images.unsplash.com/photo-1716154220479-8caffe787065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
        'https://images.unsplash.com/photo-1716154220479-8caffe787065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' a close up of a pink flamingo on a black background ',
    },
    {
        preview:
        'https://images.unsplash.com/photo-1716339140080-be256d3270ce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
        'https://images.unsplash.com/photo-1716339140080-be256d3270ce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' a group of sliced oranges sitting on top of a table ',
    },
    {
        preview:
        'https://images.unsplash.com/photo-1716647516446-93c62abe3ba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
            'https://images.unsplash.com/photo-1716647516446-93c62abe3ba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' a close up of a plant with green leaves ',
    },
    {
        preview:
        'https://images.unsplash.com/photo-1716369416215-202c195d58a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
        'https://images.unsplash.com/photo-1716369416215-202c195d58a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' a person standing in front of a fire ',
    },
    {
        preview:
        'https://images.unsplash.com/photo-1596984358985-bf4b2faba9e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
            'https://images.unsplash.com/photo-1596984358985-bf4b2faba9e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' blue and white water surface ',
    },
    {
        preview:
        'https://plus.unsplash.com/premium_photo-1673913966868-fda3eaf236fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
            'https://plus.unsplash.com/premium_photo-1673913966868-fda3eaf236fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' a close up of a cell phone with bubbles on it ',
    },
    {
        preview:
        'https://images.unsplash.com/photo-1716847214623-c45b2db2d569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
            'https://images.unsplash.com/photo-1716847214623-c45b2db2d569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' a mountain covered in snow under a cloudy sky ',
    },
    {
        preview:
        'https://plus.unsplash.com/premium_photo-1692641346423-7a0578e80ae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original:
            'https://plus.unsplash.com/premium_photo-1692641346423-7a0578e80ae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' mountains ',
    }
]

window.addEventListener("load", () => {showAllImages();});

const imgPressed = e => {
    var id = e.target.id;
    console.log(id);
    id = id.slice(6);
    console.log(images[id].description);
    showContent(images[id])
}

function showAllImages(){
    for (let i = 0; i < images.length; i++) {
        const elem = document.createElement("img");
        elem.setAttribute('src', images[i].preview);
        elem.setAttribute('alt', images[i].description);
        elem.setAttribute('id', "image-"+i);
        elem.addEventListener("click", imgPressed);
        const ul = document.createElement("ul");
        ul.appendChild(elem);
        document.getElementsByClassName("gallery")[0].appendChild(ul);
    }

}
var instance;

function showContent(img) {
    instance = basicLightbox.create(`
    <div class="frameImg">
        <img src="${img.original}">
        <h1>${img.description}</h1>
        </img>
    </div>
    `)
    instance.show();
}

document.addEventListener("keydown", ()=> {instance.close();})