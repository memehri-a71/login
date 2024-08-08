export type AuthSteps = 'phone' | 'otp' | 'userInfo' | 'agentInfo' | 'dashboard';

export interface UseLoginProps {
  CurrentAuthComponent: React.ComponentType | null;
}