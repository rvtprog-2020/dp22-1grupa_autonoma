window.onload = function() {
    document.getElementById("sendLogin").onclick = function showDataFunc () {
    fetch('/showData').then(response => response.json()).then(data => {for (let i = 0; i < data.USERS.length; i +=1) {
      if (data.USERS[i].email == document.getElementById('email').value && data.USERS[i].password == document.getElementById('password').value ) return alert(`success, hello mr ${data.USERS[i].vards}`)
    }
    alert('no such a user')})
  }
}