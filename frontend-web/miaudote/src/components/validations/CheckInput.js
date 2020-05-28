import React from 'react'

export default class CheckInput{
    constructor(){
        this.OnlyLetter = this.OnlyLetter.bind(this)
    }
    OnlyLetter = (input) => {
        const ValueInput = input
        let letter = /^[A-Za-z]+$/
        if(ValueInput.match(letter)){
            return true;
        }else {
            return (
                <div>
                    <h3>Apenas letras</h3>
                </div>
            )
        }
    }
}