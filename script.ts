// Define interface for form data
interface LoginData {
  username: string;
  password: string;
}

class LoginForm {
  private form: HTMLFormElement;
  private usernameInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private usernameError: HTMLElement;
  private passwordError: HTMLElement;

  constructor() {
    this.initializeElements();
    this.setupEventListeners();
  }

  private initializeElements(): void {
    this.form = document.getElementById('loginForm') as HTMLFormElement;
    this.usernameInput = document.getElementById('username') as HTMLInputElement;
    this.passwordInput = document.getElementById('password') as HTMLInputElement;
    this.usernameError = document.getElementById('usernameError') as HTMLElement;
    this.passwordError = document.getElementById('passwordError') as HTMLElement;
  }

  private setupEventListeners(): void {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  private handleSubmit(event: Event): void {
    event.preventDefault();
    
    const loginData: LoginData = {
      username: this.usernameInput.value.trim(),
      password: this.passwordInput.value.trim()
    };

    if (this.validateForm(loginData)) {
      this.submitForm(loginData);
    }
  }

  private validateForm(data: LoginData): boolean {
    let isValid = true;

    // Reset errors
    this.hideError(this.usernameError);
    this.hideError(this.passwordError);

    // Validate username
    if (!data.username) {
      this.showError(this.usernameError, 'Username is required');
      isValid = false;
    }

    // Validate password
    if (!data.password) {
      this.showError(this.passwordError, 'Password is required');
      isValid = false;
    } else if (data.password.length < 6) {
      this.showError(this.passwordError, 'Password must be at least 6 characters');
      isValid = false;
    }

    return isValid;
  }

  private showError(element: HTMLElement, message: string): void {
    element.textContent = message;
    element.style.display = 'block';
  }

  private hideError(element: HTMLElement): void {
    element.style.display = 'none';
  }

  private submitForm(data: LoginData): void {
    // Simulate API call
    this.mockLogin(data)
      .then(() => {
        alert(`Welcome, ${data.username}!`);
        this.form.reset();
      })
      .catch((error: string) => {
        alert(`Login failed: ${error}`);
      });
  }

  private mockLogin(data: LoginData): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful login for demo
        if (data.username && data.password) {
          resolve();
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LoginForm();
});