import { Injectable, signal, computed } from '@angular/core';
import { UserProfile } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly defaultProfile: UserProfile = {
    name: 'Sana Alaoui',
    email: 'sana@example.com'
  };

  private profile = signal<UserProfile>(this.loadProfile());

  userProfile = computed(() => this.profile());

  private loadProfile(): UserProfile {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : this.defaultProfile;
  }

  updateProfile(name: string, email: string): void {
    const updated = { name, email };
    this.profile.set(updated);
    localStorage.setItem('userProfile', JSON.stringify(updated));
  }

  logout(): void {
    localStorage.removeItem('userProfile');
    this.profile.set(this.defaultProfile);
  }
}
