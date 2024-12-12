import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profiles = [
    { id: 1, name: 'John Doe', description: 'A passionate developer from New Delhi.', photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg', lat: 28.7041, lng: 77.1025 },
    { id: 2, name: 'Jane Smith', description: 'A web designer from Mumbai.', photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg', lat: 19.0760, lng: 72.8777 },
    { id: 3, name: 'Alex Johnson', description: 'A UI/UX expert from Bangalore.', photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg', lat: 12.9716, lng: 77.5946 },
    { id: 4, name: 'Emily Davis', description: 'A software engineer from Chennai.', photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg', lat: 13.0827, lng: 80.2707 },
  ];
  filteredProfiles = [...this.profiles];
  searchQuery: string = '';
  isMapVisible = false;
  map: L.Map | undefined;
  marker: L.Marker | undefined;

  constructor() { }

  ngOnInit(): void {}

  // Search and filter functionality
  filterProfiles(): void {
    if (this.searchQuery) {
      this.filteredProfiles = this.profiles.filter(profile =>
        profile.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        profile.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProfiles = [...this.profiles]; 
    }
  }

  // View on map functionality
  viewOnMap(profile: any): void {
    this.isMapVisible = true;

    if (!this.map) {
      this.initMap(profile.lat, profile.lng);
    } else {
      this.resetMap(profile.lat, profile.lng);
    }
  }

  // Initialize map
  initMap(lat: number, lng: number): void {
    this.map = L.map('map').setView([lat, lng], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.marker = L.marker([lat, lng]).addTo(this.map)
      .bindPopup("<b>Profile Location</b>")
      .openPopup();
  }

  // Reset map view and marker for new location
  resetMap(lat: number, lng: number): void {
    if (this.map && this.marker) {
      this.map.removeLayer(this.marker);
      this.map.setView([lat, lng], 10);
      this.marker = L.marker([lat, lng]).addTo(this.map)
        .bindPopup("<b>Profile Location</b>")
        .openPopup();
    }
  }
}

