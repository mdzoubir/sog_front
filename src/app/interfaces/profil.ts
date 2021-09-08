export interface Profile {
  userId: string;
  userName: string;
  emailVerificationStatus: boolean;
  roles: Array<{ roleId: number; roleName: string }>;
}
