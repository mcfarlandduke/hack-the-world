interface LoginCredentials {
    username: string;
    password: string;
}

enum UserType {
    RECEIVER = 'receiver',
    GIVER = 'giver'
}

class LoginHandler {
    private async verifyCredentials(credentials: LoginCredentials): Promise<UserType | null> {
        // Replace this with your actual authentication logic
        if (credentials.username === 'receiver' && credentials.password === 'customerpass') {
            return UserType.RECEIVER;
        } else if (credentials.username === 'giver' && credentials.password === 'adminpass') {
            return UserType.GIVER;
        }
        return null;
    }

    private getFilePathByUserType(userType: UserType): string {
        switch (userType) {
            case UserType.RECEIVER:
                return '/src/resources/index.html';
            case UserType.GIVER:
                return '/src/stats/index.html';
            default:
                return '/src/login/index.html'; // fallback to login page
        }
    }

    public async handleLogin(credentials: LoginCredentials): Promise<string> {
        const userType = await this.verifyCredentials(credentials);
        
        if (!userType) {
            throw new Error('Invalid credentials');
        }

        return this.getFilePathByUserType(userType);
    }
}

// Usage example
const loginHandler = new LoginHandler();

async function onLoginSubmit(username: string, password: string) {
    try {
        const filePath = await loginHandler.handleLogin({ username, password });
        window.location.href = filePath;
    } catch (error) {
        console.error('Login failed:', error);
        // Handle error (show message to user, etc.)
    }
}