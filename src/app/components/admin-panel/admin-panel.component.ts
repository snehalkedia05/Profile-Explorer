import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimize change detection
})
export class AdminPanelComponent implements OnInit {
  profiles: Profile[] = []; // List of profiles
  isEditing: boolean = false; // Edit mode flag
  isFormVisible: boolean = false; // Form visibility flag

  // Default new profile object
  defaultProfile: Profile = {
    id: 0,
    name: '',
    photoUrl: '',
    description: '',
    address: '',
    latitude: 0,
    longitude: 0,
  };

  // Current profile being added/edited
  newProfile: Profile = { ...this.defaultProfile };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  // Fetch all profiles
  getProfiles(): void {
    this.profileService.getProfiles().subscribe(
      (data) => {
        this.profiles = data;
      },
      (error) => {
        console.error('Error fetching profiles:', error);
      }
    );
  }

  // Add or save changes to a profile
  saveProfile(): void {
    if (this.isEditing) {
      this.profileService.updateProfile(this.newProfile).subscribe(
        () => {
          this.getProfiles();
          this.cancelForm();
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
    } else {
      this.profileService.addProfile(this.newProfile).subscribe(
        () => {
          this.getProfiles();
          this.cancelForm();
        },
        (error) => {
          console.error('Error adding profile:', error);
        }
      );
    }
  }

  // Delete a profile
  deleteProfile(id: number): void {
    const originalProfiles = [...this.profiles]; // Save original state for rollback
    this.profiles = this.profiles.filter((profile) => profile.id !== id); // Optimistic update

    this.profileService.deleteProfile(id).subscribe(
      () => {
        console.log('Profile deleted successfully');
      },
      (error) => {
        console.error('Error deleting profile:', error);
        this.profiles = originalProfiles; // Rollback if deletion fails
      }
    );
  }

  // Toggle form for Add or Edit
  toggleForm(action: 'add' | 'edit', profile?: Profile): void {
    this.isFormVisible = true;
    if (action === 'edit' && profile) {
      this.newProfile = { ...profile };
      this.isEditing = true;
    } else {
      this.resetForm();
    }
  }

  // Cancel form and reset
  cancelForm(): void {
    this.isFormVisible = false;
    this.resetForm();
  }

  // Reset form to initial state
  resetForm(): void {
    this.newProfile = { ...this.defaultProfile };
    this.isEditing = false;
  }
}



