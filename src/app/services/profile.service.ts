import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile';
import { MOCK_PROFILES } from '../mock-profiles'; // Mock data

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: Profile[] = [...MOCK_PROFILES]; // Initialize with mock data

  // Fetch all profiles
  getProfiles(): Observable<Profile[]> {
    return of(this.profiles);
  }

  // Add a new profile
  addProfile(profile: Profile): Observable<Profile> {
    profile.id = this.profiles.length
      ? Math.max(...this.profiles.map((p) => p.id)) + 1
      : 1; // Auto-generate ID
    this.profiles.push(profile);
    return of(profile);
  }

  // Update an existing profile
  updateProfile(updatedProfile: Profile): Observable<Profile> {
    const index = this.profiles.findIndex((p) => p.id === updatedProfile.id);
    if (index !== -1) {
      this.profiles[index] = { ...updatedProfile };
    }
    return of(updatedProfile);
  }

  // Delete a profile
  deleteProfile(id: number): Observable<void> {
    this.profiles = this.profiles.filter((p) => p.id !== id); // Remove profile
    return of(); 
  }
}



