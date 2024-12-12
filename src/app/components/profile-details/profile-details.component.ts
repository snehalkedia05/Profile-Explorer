import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  profile: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const profileId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProfileDetails(profileId);
  }

  loadProfileDetails(id: number): void {
    const profiles = [
      { id: 1, name: 'John Doe', description: 'A passionate developer from New Delhi.', email: 'john@example.com', phone: '123-456-7890', interests: 'Coding, Music, Reading', photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, name: 'Jane Smith', description: 'A web designer from Mumbai.', email: 'jane@example.com', phone: '234-567-8901', interests: 'Design, Traveling, Photography', photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 3, name: 'Alex Johnson', description: 'A UI/UX expert from Bangalore.', email: 'alex@example.com', phone: '345-678-9012', interests: 'UI/UX, Technology, Gaming', photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 4, name: 'Emily Davis', description: 'A software engineer from Chennai.', email: 'emily@example.com', phone: '456-789-0123', interests: 'Software Development, Reading, Traveling', photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    ];
    this.profile = profiles.find(p => p.id === id);
  }
}
