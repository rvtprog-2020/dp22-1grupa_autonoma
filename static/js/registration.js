window.onload = function() {
    document.getElementById("sendRegistration").onclick = function send () {
            let vards = document.getElementById('vards').value
            let uzvards = document.getElementById('uzvards').value
            let pkods = document.getElementById('pkods').value
            let telnr = document.getElementById('telnr').value
            let email = document.getElementById('email').value
            let password = document.getElementById('password').value
            let status = "user"





            if (vards != '' && uzvards != '' && pkods != '' && telnr != '' && email != '' && password != '' ){


               
                fetch('/showData').then(response => response.json()).then(data => {for (let i = 0; i < data.USERS.length; i +=1) {
                if (data.USERS[i].email == email) {
                  return  alert('Epasts jau ir aiznemts!')
                }}
                fetch('/getData', {
            
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 'vards' : vards, 'uzvards' : uzvards, 'pkods' : pkods, 'telnr' : telnr , 'email' :  email, 'password' : password , 'status' : status})
                })
                return alert('true')
                })
                



                
            } else {
                alert('false')
            }


            

        }
}