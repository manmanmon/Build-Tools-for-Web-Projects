export function getExtension(src) {
    var dotIndex = src.lastIndexOf('.');
    var ext = src.substring(dotIndex);
    
    if (ext == ".jpg" || ext == ".gif") {
        let a = `<img class="content" src="${src}">`
        return a
    } else if (ext == ".mp3") { 
        let a = `<audio controls class="content">
            <source src="${src}" type="audio/mp3">
        </audio>`
        return a
    } else if (ext == ".mp4") {
        let a = `
        <video controls="controls" class="content">
            <source src="${src}" type="video/mp4">
        </video>`
        return a
    } 
}
