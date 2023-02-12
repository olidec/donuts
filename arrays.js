let a = [2, 4, 6, 8, 11];
document.getElementById("array").innerHTML = a.slice(1, 3);

let text = `<ul>`;
a.forEach(superFunction);
text += `</ul>`;

document.getElementById("list").innerHtml = text;

function superFunction(int){
    text += `<li> ${int} </li>`;
}

//the totally real branch was here