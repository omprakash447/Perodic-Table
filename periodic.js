let mainbody = document.getElementById("mainbody");
let atomicno = true;
let display = function() {
    for (var i = 0; i <= 50; i++) {
        var div = document.createElement("div");
        div.classList.add("div1")
        div.innerHTML = "Element : " + i;
        mainbody.appendChild(div);

    }
    mainbody.addEventListener("click", function(e, f) {
        alert(e.target.innerHTML);
        if (atomicno) {
            // alert(e.target.innerHTML="Atomic No : ");
        }
    })
}
display();