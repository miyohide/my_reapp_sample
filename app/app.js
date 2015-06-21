import '../assets/todomvc/base.css';
import './store';
import { Router, router, route } from 'reapp-kit';

const routes =
  route('todos', '/',
    route('all', { default: true }),
    route('completed'),
    route('active')
  )

router(require, routes, {
    location: Router.HashLocation
});
