interface LoginCredentials {
    username: string;
    password: string;
}

enum UserType {
    RECEIVER = 'receiver',
    GIVER = 'giver'
}
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    onLoginSubmit(username, password);
});

function onLoginSubmit(username: string, password: string) {
    console.log('Login attempt:', username);  // Debug line
    try {
        if (username === 'JaneDoe@gmail.com' && password === 'password') {
            console.log('Redirecting to resources...');  // Debug line
            window.location.replace('../resources/index.html');
        }
        else if (username === 'Charity@gmail.com' && password === 'password') {
            console.log('Redirecting to stats...');  // Debug line
            window.location.replace('../stats/index.html');
        }
        else {
            console.error('Login failed:', 'Invalid credentials');
            alert('Invalid credentials');  // User feedback
        }
    } catch (error) {
        console.error('Navigation error:', error);
    }
}