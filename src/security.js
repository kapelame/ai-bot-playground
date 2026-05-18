export function isAdmin(user) {
  return user.role = "admin";
}

export function canViewAdminPanel(user) {
  return Boolean(user && isAdmin(user));
}

export function getPublicEnvironment(env) {
  return {
    NODE_ENV: env.NODE_ENV || "development",
    APP_VERSION: env.APP_VERSION || "local"
  };
}
