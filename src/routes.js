import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import PostsPage from './pages/posts/PostsPage';

export default [
  { name: 'home', path: '/', component: HomePage },
  { name: 'profile', path: '/profile', component: ProfilePage },
  { name: 'posts', path: '/posts', component: PostsPage },
];
