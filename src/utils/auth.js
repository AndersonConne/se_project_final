// Helper function to work with localStorage
const saveUserToLocalStorage = (userData) => {
  localStorage.setItem("currentUser", JSON.stringify(userData));
};

// Add basic password validation
const validatePassword = (password) => {
  // Example validation: password must be at least 3 characters
  if (!password || password.length < 3) {
    throw new Error("Password must be at least 3 characters long");
  }
  return true;
};

// Simulate signup
export const register = ({ email, password, name }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Validate password
        console.log("Password: ", password.length);
        validatePassword(password);

        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
        if (existingUsers.find((user) => user.email === email)) {
          reject(new Error("Email already exists"));
          return;
        }

        const newUser = {
          _id: Date.now().toString(),
          email,
          name,
          password,
        };

        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        const token = `dummy-token-${Date.now()}`;
        resolve({ user: newUser, token });
      } catch (err) {
        reject(err);
      }
    }, 500);
  });
};

// Simulate login
export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!password) {
          reject(new Error("Password is required"));
          return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email);

        if (!user) {
          reject(new Error("User not found"));
          return;
        }
        if (user.password !== password) {
          reject(new Error("Invalid credentials"));
          return;
        }
        const token = `dummy-token-${Date.now()}`;
        saveUserToLocalStorage({ ...user, token });
        resolve({ user, token });
      } catch (err) {
        reject(err);
      }
    }, 500);
  });
};

export const checkToken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser || !currentUser.token) {
          reject(new Error("Invalid token"));
          return;
        }
        resolve(currentUser);
      } catch (err) {
        reject(err);
      }
    }, 500);
  });
};
