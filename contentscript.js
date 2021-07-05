let e = document.getElementById('ember29').parentElement;
iconpath = chrome.extension.getURL('notifications.png');
e.innerHTML+=`<img id="popupnotifications" src="${iconpath}" width="84" height="84"></img>`;
document.getElementById("popupnotifications").onclick = function(){
    let newWindow = window.open("https://www.linkedin.com/notifications/", "Notifications", "width=400,height=500,left=1000,top=40");
    newWindow.onload = function() {
    var d = newWindow.document.getElementById('main');
    newWindow.document.body.innerHTML = ''; 
    newWindow.document.body.append(d); }}
