// src/services/userService.js

export const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);
    return user ? Promise.resolve({ token: 'fake-token' }) : Promise.reject('Invalid credentials');
  };
  
  export const registerUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    if (users.some((u) => u.username === username)) {
      return Promise.reject('Username already taken');
    } else {
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      return Promise.resolve(newUser);
    }
  };
  