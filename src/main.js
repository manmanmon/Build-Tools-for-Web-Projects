import './scss.scss'
import img1 from "./media/images/1.jpg"
import img2 from "./media/images/2.jpg"
import img3 from "./media/images/3.jpg"
import img4 from "./media/images/4.gif"
import gif1 from "./media/audio/1.mp3"
import audio1 from "./media/audio/2.mp3"
import audio2 from "./media/audio/3.mp3"
import video1 from "./media/video/1.mp4"
import video2 from"./media/video/2.mp4"


import { getExtension } from "./extension.js";
class Item {
    constructor(item) {
        this.src = item.src;
        this.title = item.title;
    }
    getHTMLString() {
        let extention = getExtension(this.src)
        // let tag = extention[0];
        // let mediaType = extention[1];
        console.log(extention);
        let markup = `
            <div class="item">
                ${extention}
                <div class="title"><p class="titleText">${this.title}</p></div>
            </div>
            `;
        return markup
    }
}
class ItemsList {
    constructor(container = ".itemsList") {
        this.container = container;
        this.allItems = [];
        this.items = [
            { src: img1, title: "Мельница у реки" },
            { src: img2, title: "Горы осенью" },
            { src: img3, title: "Деревня летом" },
            { src: img4, title: "Анимированный котик" },
            { src: gif1, title: "Птички летом" },
            { src: audio1, title: "Ручеек в ущелье" },
            { src: audio2, title: "Закат в лесу" },
            { src: video1, title: "Never Gonna Give Your Up" },
            { src: video2, title: "Морской прибой" },
        ];
        this.render();
    }
    render() {
        const block = document.querySelector(this.container);

        for (const item of this.items) {
            const itemObject = new Item(item);
            this.allItems.push(itemObject);
            block.insertAdjacentHTML("beforeend", itemObject.getHTMLString())

        }
    }
}

const list = new ItemsList();

