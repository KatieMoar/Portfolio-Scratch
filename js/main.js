// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement
//     this.words = words
//     this.txt = ''
//     this.wordIndex = 0
//     this.wait = parseInt(wait, 10)
//     this.type ()
//     this.isDeleting = false
// }


// //TYPE METHOD
// TypeWriter.prototype.type = function () {
//     //Current index of word
//     const current = this.wordIndex % this.words.length
//     //Get full text of current word
//     const fullTxt = this.words[current]
//     //Check if deleting 
//     if(this.isDeleting){
//         //Remove a character
//         this.txt = fullTxt.substring(0, this.txt.length - 1)
//     } else {
//         //Add a character
//         this.txt = fullTxt.substring(0, this.txt.length + 1)
//     }

//     //Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//     //Inital Type Speed
//     let typeSpeed = 300

//     if(this.isDeleting){
//         typeSpeed /= 2;
//     }

//     //Check if word is completed
//     if (!this.isDeleting && this.txt === fullTxt) {
//         //Pause at end
//         typeSpeed = this.wait
//         //Set delete to true
//         this.isDeleting = true
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false
//         //move to next word
//         this.wordIndex++
//         //Pause before starting
//         typeSpeed = 500
//     }


//     setTimeout(() => this.type(), typeSpeed)
// }




// CLASS CONSTRUCTOR 

class TypeWriter {
    constructor (txtElement, words, wait = 3000) {
        this.txtElement = txtElement
        this.words = words
        this.txt = ''
        this.wordIndex = 0
        this.wait = parseInt(wait, 10)
        this.type ()
        this.isDeleting = false
    }

    type () {
        //Current index of word
        const current = this.wordIndex % this.words.length
        //Get full text of current word
        const fullTxt = this.words[current]
        //Check if deleting 
        if(this.isDeleting){
            //Remove a character
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            //Add a character
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        //Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        //Inital Type Speed
        let typeSpeed = 300

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        //Check if word is completed
        if (!this.isDeleting && this.txt === fullTxt) {
            //Pause at end
            typeSpeed = this.wait
            //Set delete to true
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false
            //move to next word
            this.wordIndex++
            //Pause before starting
            typeSpeed = 500
        }


        setTimeout(() => this.type(), typeSpeed)
    }

}

//INIT ON DOM LOAD
document.addEventListener('DOMContentLoaded', init)

//INIT APP
function init () {
    const txtElement = document.querySelector('.txtType')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    //INIT TYPEWRITER
    new TypeWriter(txtElement, words, wait)
}