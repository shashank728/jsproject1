var btn = document.querySelector("#add");
var isstatus = document.querySelector("h5")

var state = 0;
btn.addEventListener("click",function()
{
    if(state ==0)
    {
        isstatus.innerHTML = "Friends"
        isstatus.style.color = "green"
        btn.innerHTML = "Remove"
        btn.style.backgroudColor = "grey"
        state = 1

    }
    else
    {
        isstatus.innerHTML = "strager"
        isstatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        state =0
        
    }

    
})

