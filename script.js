document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newPlant input').value.length == 0) {
        alert("Add the name of your plant")
    }

    else {
        document.querySelector('#list').innerHTML += `
            <div class="plant">
                <span id="plantName">
                    ${document.querySelector('#newPlant input').value}
                </span>
                <button class="btnDeletePlantOnList">x</button>
            </div>
        `;

        let btnDeletePlantOnList = document.querySelectorAll(".btnDeletePlantOnList");
        for(let i=0; i<btnDeletePlantOnList.length; i++) {
            btnDeletePlantOnList[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}

const wateredBtn = document.querySelectorAll('.wateredBtn'); 
for (let singleBtn of wateredBtn) {
    singleBtn.addEventListener('click', function() {
            singleBtn.style.backgroundColor = '#8ec9d4';
    });
}

const week1 = document.querySelectorAll('.week1');
const clearWeek1Btn = document.querySelector("#btnClearPlant1");
clearWeek1Btn.addEventListener('click', function(){
    for (let singleBtn of week1) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week2 = document.querySelectorAll('.week2');
const clearWeek2Btn = document.querySelector("#btnClearPlant2");
clearWeek2Btn.addEventListener('click', function(){
    for (let singleBtn of week2) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week3 = document.querySelectorAll('.week3');
const clearWeek3Btn = document.querySelector("#btnClearPlant3");
clearWeek3Btn.addEventListener('click', function(){
    for (let singleBtn of week3) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week4 = document.querySelectorAll('.week4');
const clearWeek4Btn = document.querySelector("#btnClearPlant4");
clearWeek4Btn.addEventListener('click', function(){
    for (let singleBtn of week4) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week5 = document.querySelectorAll('.week5');
const clearWeek5Btn = document.querySelector("#btnClearPlant5");
clearWeek5Btn.addEventListener('click', function(){
    for (let singleBtn of week5) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week6 = document.querySelectorAll('.week6');
const clearWeek6Btn = document.querySelector("#btnClearPlant6");
clearWeek6Btn.addEventListener('click', function(){
    for (let singleBtn of week6) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week7 = document.querySelectorAll('.week7');
const clearWeek7Btn = document.querySelector("#btnClearPlant7");
clearWeek7Btn.addEventListener('click', function(){
    for (let singleBtn of week7) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week8 = document.querySelectorAll('.week8');
const clearWeek8Btn = document.querySelector("#btnClearPlant8");
clearWeek8Btn.addEventListener('click', function(){
    for (let singleBtn of week8) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week9 = document.querySelectorAll('.week9');
const clearWeek9Btn = document.querySelector("#btnClearPlant9");
clearWeek9Btn.addEventListener('click', function(){
    for (let singleBtn of week9) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const week10 = document.querySelectorAll('.week10');
const clearWeek10Btn = document.querySelector("#btnClearPlant10");
clearWeek10Btn.addEventListener('click', function(){
    for (let singleBtn of week10) {
    singleBtn.style.backgroundColor = '#B58ED4';
}
});

const btnClearWeek = document.querySelector('#btnClearWeek');
btnClearWeek.addEventListener('click', function (){
    for (let singleBtn of wateredBtn) {
        singleBtn.style.backgroundColor = '#B58ED4';
    }
});


