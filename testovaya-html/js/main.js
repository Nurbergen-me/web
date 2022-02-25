
window.onload = loadGallery();

window.addEventListener('resize', function () {
    loadGallery();
})


function loadGallery() {
    let msnry = new Masonry( '.gallery__wrap', {"percentPosition": true});
    let elems = msnry.getItemElements()

    let containerWidth = document.querySelector('.gallery__wrap').clientWidth;

    elems.forEach(function (item) {
        if (item.clientWidth / containerWidth > 0.40 && containerWidth>991) {
            item.getElementsByTagName('img')[0].width = containerWidth * 0.5 - 30

        } else if(item.clientWidth / containerWidth < 0.40 && containerWidth>991) {
            item.getElementsByTagName('img')[0].width = containerWidth * 0.25 - 30

        } else if(containerWidth>578 && containerWidth<991) {
            item.getElementsByTagName('img')[0].width = containerWidth * 0.50 - 30

        } else {
            item.getElementsByTagName('img')[0].width = containerWidth - 30
            item.getElementsByTagName('img')[0].height = containerWidth - 30
        }
    })
    msnry.layout();
}