
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, UserRole, ActivityLog } from '../types';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  logs: ActivityLog[];
  logActivity: (action: string, details: string) => void;
  allUsers: User[];
  updatePassword: (username: string, newPassword: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOGS_STORAGE_KEY = 'microforms_activity_logs';
// Bumped version to force default user update
const USERS_STORAGE_KEY = 'microforms_users_v3'; 

interface StoredUser extends User {
    password: string;
}

const DEFAULT_USERS: StoredUser[] = [
    { username: 'admin@microforms.org', password: 'admin', role: 'admin', name: 'Administrator' },
    { username: 'w.sainrisma@microforms.org', password: 'Sainrisma84#', role: 'admin', name: 'Walner S.' },
    { username: 'user2', password: 'user2', role: 'standard', name: 'Standard User' },
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const [users, setUsers] = useState<StoredUser[]>(() => {
      try {
          const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);
          return savedUsers ? JSON.parse(savedUsers) : DEFAULT_USERS;
      } catch {
          return DEFAULT_USERS;
      }
  });

  const [logs, setLogs] = useState<ActivityLog[]>(() => {
    try {
      const savedLogs = localStorage.getItem(LOGS_STORAGE_KEY);
      return savedLogs ? JSON.parse(savedLogs) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOGS_STORAGE_KEY, JSON.stringify(logs));
  }, [logs]);

  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const logActivity = (action: string, details: string) => {
    if (!user) return;
    
    const newLog: ActivityLog = {
      id: Date.now(),
      username: user.username,
      action,
      details,
      timestamp: new Date().toISOString(),
    };
    
    setLogs(prev => [newLog, ...prev]);
  };

  const login = (username: string, password: string): boolean => {
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser) {
      const newUser = { username, role: foundUser.role, name: foundUser.name };
      setUser(newUser);
      
      const newLog: ActivityLog = {
          id: Date.now(),
          username: username,
          action: 'LOGIN',
          details: 'User logged in',
          timestamp: new Date().toISOString(),
      };
      setLogs(prev => [newLog, ...prev]);
      
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updatePassword = (username: string, newPassword: string) => {
      setUsers(prev => prev.map(u => {
          if (u.username === username) {
              return { ...u, password: newPassword };
          }
          return u;
      }));
      logActivity('UPDATE_PASSWORD', `Password updated for user: ${username}`);
  };

  return (
    <AuthContext.Provider value={{ 
        user, 
        login, 
        logout, 
        isAuthenticated: !!user, 
        logs, 
        logActivity,
        allUsers: users.map(u => ({ username: u.username, role: u.role, name: u.name })),
        updatePassword 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
