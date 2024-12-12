import { Profile } from './models/profile';

export const MOCK_PROFILES: Profile[] = [
  {
    id: 1,
    name: 'John Doe',
    photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'A passionate developer from New Delhi.',
    address: '750 Gajra park ,Delhi',
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    id: 2,
    name: 'Jane Smith',
    photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'A web designer from Mumbai.',
    address: '456 Park Avenue, Mumbai',
    latitude: 19.0760,
    longitude: 72.8777,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'A UI/UX expert from Bangalore.',
    address: '02 Sky colony, Bangalore',
    latitude: 12.9716,
    longitude: 77.5946
  },
  { 
    id: 4, 
    name: 'Emily Davis',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',  
    description: 'A software engineer from Chennai.', 
    address: '02 Samta hostel, Chennai',
    latitude: 13.0827, 
    longitude: 80.2707
   },
];
