import index from './views/index.vue'
import node from './views/node.vue'
export default [
        {
            path: '/index',
            component: index
        },
        {	
        	path:'/',
        	component:index
        },
        {	
        	path:'/node',
        	component:node
        }
]