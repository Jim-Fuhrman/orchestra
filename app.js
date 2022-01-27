const advId = document.getElementById('divAdvancedMusician');
const plWhenId = document.getElementById('divPrivateLessonsWhen');

const advanced = document.getElementById('rdoAdvancedId');
const intermediate = document.getElementById('rdoIntermediateId');
const beginner = document.getElementById('rdoBeginnerId');

const plYes = document.getElementById('rdoPLYesId');
const plNo = document.getElementById('rdoPLNoId');

function showInfoAdvancedMusician() {
    this.value === 'a' 
        ? advId.classList.remove('hide')
        : advId.classList.add('hide')
}

function showInfoPrivateLessonsWhen() {
    this.value === 'y' 
        ? plWhenId.classList.remove('hide')
        : plWhenId.classList.add('hide')
}

/* I found out I don't want ().bind(this) coded in the lines below
because I don't want to pass the global window object. I want the
radio button that was clicked on which is what "this" defaults to.*/
advanced.addEventListener('click', showInfoAdvancedMusician);
beginner.addEventListener('click', showInfoAdvancedMusician);
intermediate.addEventListener('click', showInfoAdvancedMusician);

plYes.addEventListener('click', showInfoPrivateLessonsWhen);
plNo.addEventListener('click', showInfoPrivateLessonsWhen);