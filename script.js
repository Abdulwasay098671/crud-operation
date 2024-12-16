
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCptEMmLCIiV8P1oI_V1sQNeHx2bCEf9tE",
    authDomain: "crud-operation-33233.firebaseapp.com",
    projectId: "crud-operation-33233",
    storageBucket: "crud-operation-33233.firebasestorage.app",
    messagingSenderId: "678648817463",
    appId: "1:678648817463:web:bdbc042e6110b9b0455cb2"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

window.adddata = async () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const data = await addDoc(collection(db, "users"), {
        name,
        email,
        password,
    })
    window.location.reload()
}

const data2 = await getDocs(collection(db, "users"));
const showData = document.getElementById("showData")
data2.forEach((element) => {
    showData.innerHTML += ` <center><br/><br/><div class="papu"> <p>${element.data().name}</p> <p> ${element.data().email} </p> <p>${element.data().password}</p>  
    <button onclick="deleteData('${element.id}')">Deleet</button><button onclick="updateData('${element.id}')">Update</button>  <br/></div> `
    console.log(element.data());
});



window.deleteData = async (id) => {
    console.log("kash")
    const data = await deleteDoc(doc(db, "users", id))
    window.location.reload()

}

window.updateData = async (id) => {
    let name = prompt("enter your name")
    let email = prompt("enter your email")
    let password = prompt("enter your password")
    const data = await updateDoc(doc(db, "users", id), {
        name,
        email,
        password
    })
    console.log(updateData)
}
window.updateData = async (id) =>{
    const updateInput = document.getElementById("updateInput")
    updateInput.innerHTML = `
    <input id="updateName"/>
    <input id="updateemail"/>
    <input id="updatepassword"/>
    <button onclick="updateuser('${id}')">Update User</button> `
     }

window.updateuser = async (id) =>{
 let name = document.getElementById ("updateName").value
 let email = document.getElementById ("updateemail").value
 let password = document.getElementById ("updatepassword").value
const data = await updateDoc(doc(db,"users",id) ,{
 name,
 email,
 password
})
window.location.reload()
}