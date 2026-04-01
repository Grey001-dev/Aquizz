let email;
let username
const signUp = async () => {
    alert("button clicked")
    email = document.getElementById("email").value;
    const password = document.getElementById("createPassword").value;
    username=document.getElementById("createUsername").value;
    if (!email || !password || !username) {
        alert("Please fill in all fields.");
        return;
    }
    try {
        const res = await fetch("https://aquizz.onrender.com/api/aquizz/user/create",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:email,
                username:username,
                password:password
            })

        })
        const data=await res.json()
        if(res.ok){
            console.log(data.user.username,"sign up successful")
            alert(data.user.username)
            window.location.href="login.html"

        }
    } catch (error) {
        console.log("Unable to connect to server",error)
    }
    

}

const loginUser = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("createPassword").value;
    if (!email || !password){
        alert("Please fill in all fields.");
        return;
    }

    try {
          const res = await fetch("https://aquizz.onrender.com/api/aquizz/user/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:email,
                password: password
            })

        })
        const data=await res.json()
        if(res.ok){
            alert(data.message)
            alert(data.user.username, "logged in successfully")
            localStorage.setItem("token",data.token)
            localStorage.setItem("username", data.user.username)
            window.location.href="dashboard.html"
            
        }
    } catch (error) {
        console.log("Unable to connect to server",error)
    }   
}
const nameDisplay=document.getElementById("name")
const savedName = localStorage.getItem("username");
if (savedName) {
    nameDisplay.innerHTML = savedName; 
} else {
    console.log("Could not find the name in storage.");
}