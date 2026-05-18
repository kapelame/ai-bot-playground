export function isAdmin(user) {
  return user?.role === "admin";
}

export function canViewAdminPanel(user) {
  return Boolean(user && isAdmin(user));
}

export function getPublicEnvironment(env) {
  return { ...env };
}
