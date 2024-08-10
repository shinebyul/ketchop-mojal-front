import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/member/LoginPage.vue";
import SignupPage from "@/pages/member/SignupPage.vue";
import ChatListPage from "@/pages/chat/ChatListPage.vue";
import ChatRoomPage from "@/pages/chat/ChatRoomPage.vue";
import MyPage from "@/pages/member/MyPage.vue";
import PoatCreate from "@/pages/post/PostCreat.vue";
import ExPostReadPage from "@/pages/post/ExPostReadPage.vue";
import ShPostReadComponent from "@/components/post/ShPostReadComponent.vue"; //이름이 ~page로 바뀌어서 삭제필요
import ShPostListComponent from "@/components/post/ShPostListComponent.vue"; //삭제필요
import SharePage from "@/pages/post/SharePage.vue";
import ExchangePage from "@/pages/post/ExchangePage.vue";
import MyPostPage from "@/pages/post/MyPostPage.vue";
import MainPage from "@/pages/MainPage.vue";
import SelectCategory from "@/pages/SelectCategory.vue"
import RedirectPage from "@/pages/RedirectPage.vue"
import HomePage from '@/pages/HomePage.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: "/", 
            component: MainPage,
            children:[
                { path: "", component: HomePage}, 
                { path: "/login", component: LoginPage },
                { path: "/signup", component: SignupPage },
                { path: "/chat", component: ChatListPage },
                { name: "/chat-room", path: "/chat-room/:roomIdx", component: ChatRoomPage },
                { path: "/mypage", component: MyPage },
                { path: "/myposts", component: MyPostPage },
                { name: "postcreate", path: "/postcreate/:postType", component: PoatCreate },
                { path: "/exchange", component: ExchangePage },
                { path: "/share", component: SharePage },
                { name: "/expostread", path: "/expostread/:postIdx", component: ExPostReadPage },
                { path: "/shpostread", component: ShPostReadComponent },
            ]
        },
        { path:"/redirect", component: RedirectPage},
    ],
});


export default router;