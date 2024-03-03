import { randomSentences } from "./randomLines.js";

function makeDisplay() { 
    
    const mainEle = document.getElementById("NoticeMain");
    mainEle.style.display = "grid";
    mainEle.style.gridTemplateColumns = "auto auto auto";
    // mainEle.style.maxWidth = "1000px";
    mainEle.style.margin = "auto";


    for (let x = 0; x < randomSentences.length; x++) {
        // console.log(randomSentences[x]);

        const noticeContainer = document.createElement('div');
        noticeContainer.classList = "myNotice";

        let lbl = document.createElement('div');
        lbl.textContent = randomSentences[x].toString().slice(10);

        const noticeHead = document.createElement('div');
        noticeHead.classList = "noticeHead";

        noticeContainer.appendChild(noticeHead);
        noticeContainer.appendChild(lbl);

        mainEle.appendChild(noticeContainer);
    }
}

makeDisplay();