const socket = io();

function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('#message-input');
    if (input.value.trim()) {
        socket.emit('message', input.value);
        input.value = "";
    }
    input.focus();
}

document.querySelector('#message-form')
    .addEventListener('submit', sendMessage);


socket.on("message", (data) => {
    const chatContainer = document.querySelector('#chat-container');
    const div_p = document.createElement('div');
    const div_ch = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');

    //---------------------Check if the message is from the current user--------------------
    if (data.id === socket.id) {
        div_p.classList.add("d-flex", "flex-row","justify-content-start","mb-4");
        img.src = "https://cdn-icons-png.flaticon.com/512/4202/4202831.png "; 
        div_ch.classList.add("p-3","ms-3","user-message");
        p.textContent = `you:${data.message}`;
        p.classList.add("small","mb-0")
        
        img.alt = "Avatar";
        img.classList.add("avatar");
        div_p.appendChild(img);
        div_ch.appendChild(p);
        div_p.appendChild(div_ch);
        chatContainer.appendChild(div_p);
        
    } else {
        div_p.classList.add("d-flex", "flex-row","justify-content-end","mb-4");
        img.src = "https://cdn-icons-png.flaticon.com/512/3048/3048122.png"; 
        div_ch.classList.add("p-3","me-3","border","other-user-message");
        p.textContent = `${data.message}`;
        p.classList.add("small","mb-0")

        img.alt = "Avatar";
        img.classList.add("avatar");
        div_ch.appendChild(p);
        div_p.appendChild(div_ch);
        div_p.appendChild(img);
        chatContainer.appendChild(div_p);
    }

 
});