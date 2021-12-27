import { createStore } from 'vuex';
import UsersModule from './users.module.js'
import PostsModule from './posts.module.js'

export default createStore({
    modules: {
        users: UsersModule,
        posts: PostsModule
      }
});
