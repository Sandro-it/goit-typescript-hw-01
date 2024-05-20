export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin Role",
  [UserRole.editor]: "Editor Role",
  [UserRole.guest]: "Guest Role",
};

console.log(RoleDescription);
