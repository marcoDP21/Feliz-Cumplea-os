rooms = ["sala_click", "karol_click", "papau_click", "papa_click", "kitchen_click", "old_room_click"]

for (let i = 0; i < rooms.length; i++) {
    document.getElementById(rooms[i]).addEventListener("click",
        (e) => {
            console.log(e.srcElement.id);
            window.location.href = "./pages/"+ e.srcElement.id +".html";
        })
}


    
