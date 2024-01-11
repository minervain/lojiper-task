// src/services/AuthService.ts

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class AuthService {
  private static users: UserData[] = JSON.parse(localStorage.getItem('users') || '[]');

  static register(user: UserData): boolean {
    AuthService.users.push(user);
    localStorage.setItem('users', JSON.stringify(AuthService.users));
    return true;
  }

  static login(email: string, password: string): boolean {
    const user = AuthService.users.find((u) => u.email === email && u.password === password);
    return !!user;
  }
}

export default AuthService;
