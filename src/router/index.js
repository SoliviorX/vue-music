import { createRouter, createWebHashHistory } from 'vue-router';

const Recommend = () =>
  import('@/views/recommend' /* webpackChunkName: "recommend" */);
const Singer = () => import('@/views/singer' /* webpackChunkName: "singer" */);
const TopList = () =>
  import('@/views/top-list' /* webpackChunkName: "top-list" */);
const Search = () => import('@/views/search' /* webpackChunkName: "search" */);
const Album = () => import('@/views/album' /* webpackChunkName: "album" */);

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: Album
      }
    ]
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: TopList
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
