function SignUp(){
    document.getElementById('text').innerHTML = 'Sign Up';
    document.getElementById('forgot-password').style.display='none';
    document.getElementById('userNameInput').style.display='flex';

    const greybtn = document.getElementById('logbtn');
    greybtn.style.color='#676767';
    greybtn.style.background='#eaeaea';
    const bluebtn = document.getElementById('signbtn');
    bluebtn.style.color='#fff';
    bluebtn.style.background='#4c00b4';
}
function Login(){
    document.getElementById('text').innerHTML = 'Login';
    document.getElementById('forgot-password').style.display='block';
    document.getElementById('userNameInput').style.display='none';
    const greybtn = document.getElementById('signbtn');
    greybtn.style.color='#676767';
    greybtn.style.background='#eaeaea';
    const bluebtn = document.getElementById('logbtn');
    bluebtn.style.color='#fff';
    bluebtn.style.background='#4c00b4';
}