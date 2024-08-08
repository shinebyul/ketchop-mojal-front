import axios from "axios";
import { defineStore } from "pinia";

export const useSharePostStore = defineStore("sharePost", {
    state: () => (
        {
            isShow: false,
            selectedIdx: null,
            shareListAll: [],
            sharePost: {},
        }
    ),
    actions: {
        // 나눔글전체리스트
        async getShareListAll() {
            try {
                let url = `http://localhost:8080/share/list`;
                let response = await axios.get(url);
                this.shareListAll = response.data.result;
                console.log("나눔글전체리스트:", this.shareListAll);
                console.log("응답왔다");
            } catch (error) {
                console.log(error);
            }
        },
        //해당idx나눔글
        async getSharePost(shareIdx) {
            try {
                let url = `http://localhost:8080/share/read?idx=${shareIdx}`;
                let response = await axios.get(url);
                this.sharePost = response.data.result;
                console.log("스토어 나눔글리스트:", this.sharePost);
            } catch (error) {
                console.log(error);
            }
        },

        // 선택한 나눔글,교환글 카테고리만 픽미픽미해서 가져오기
        async getSharePostByCategory(selectedCategoryIdx) {
            let url = `http://localhost:8080/search/category?idx=${selectedCategoryIdx}`;
            this.selectedCategoryIdx = selectedCategoryIdx;
            let response = await axios.get(url); //응답 받아서 저장
            this.shareListAll = response.data.result.sharePosts;
            this.exchangeListAll = response.data.result.exchangePosts;
            this.category = response.data.result
            console.log("스토어 해당카테고리 픽미픽미", this.category)
        },
    },
});