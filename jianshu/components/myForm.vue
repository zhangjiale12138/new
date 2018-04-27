<template>
    <div>
        <form class="new-comment" method="post">
            <slot></slot>
            <textarea name="comment-content" placeholder="写下你的评论"  v-model='value'></textarea>
            <div class="write-function-block">
                <div class="emoji-modal-wrap">
                    <a  class="emoji">
                        <i class="fa fa-smile-o" @click="a=!a"></i>
                    </a>
                    <div class="emoji-modal"></div>
                </div>
                <emoji v-show="a"   @select="selectEmoji"></emoji>
                <div class="hint">Ctrl+Enter发送</div>
                <a href="#" class="btn-send">发送</a>
                <a href="#" class="btn-cancel">取消</a>
            </div>
        </form>
    </div>
</template>
<script>
 import emoji from './emoji.vue';
    export default {
        name:"myForm",
        data () {
            return {
                value:'',
              a:false,
            
            }
        },components:{emoji},
        methods:{
             selectEmoji (code) {
           
             this.value+= code;
    }
        }
    }
</script>