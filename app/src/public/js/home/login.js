"use strict"

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: Json.stringify(req)
    });
    
}