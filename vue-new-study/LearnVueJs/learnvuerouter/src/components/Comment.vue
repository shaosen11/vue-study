<!--评论模块-->
<template>
  <div class="container">
    <div class="comment" v-for="item in comments">
      <div class="info">
        <img class="avatar" :src="item.fromAvatar" width="36" height="36"/>
        <div class="right">
          <div class="name">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like el-icon-thumb"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment el-icon-chat-square"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="reply in item.reply">
          <div class="reply-content">
            <span class="from-name">{{reply.fromName}}</span><span>: </span>
            <span class="to-name">@{{reply.toName}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment el-icon-chat-square"></i>
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply" v-if="item.reply.length > 0" @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
            <el-input class="gray-bg-input"
                      v-model="inputComment"
                      type="textarea"
                      :rows="3"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
            <div class="btn-control">
              <span class="cancel" @click="cancel">取消</span>
              <el-button class="btn" type="success" round @click="commitComment">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'

  export default {
    props: {
      comments: {
        type: Array,
        required: true
      }
    },
    components: {},
    data() {
      return {
        inputComment: '',
        showItemId: ''
      }
    },
    computed: {},
    methods: {
      /**
       * 点赞
       */
      likeClick(item) {
        if (item.isLike === null) {
          Vue.$set(item, "isLike", true);
          item.likeNum++
        } else {
          if (item.isLike) {
            item.likeNum--
          } else {
            item.likeNum++
          }
          item.isLike = !item.isLike;
        }
      },

      /**
       * 点击取消按钮
       */
      cancel() {
        this.showItemId = ''
      },

      /**
       * 提交评论
       */
      commitComment() {
        console.log(this.inputComment);
      },

      /**
       * 点击评论按钮显示输入框
       * item: 当前大评论
       * reply: 当前回复的评论
       */
      showCommentInput(item, reply) {
        if (reply) {
          this.inputComment = "@" + reply.fromName + " "
        } else {
          this.inputComment = ''
        }
        this.showItemId = item.id
      }
    },
    created() {
      console.log(this.comments)
    }
  }
</script>

<style scoped>

  .container {
    padding: 0 10px;
    box-sizing: border-box;
  }

  .container .comment{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #F2F6FC;
  }

  .container .comment .info{
    display: flex;
    align-items: center;
  }

  .container .comment .info .avatar{
    border-radius: 50%;
  }

  .container .comment .info .right{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .container .comment .info .right .name{
    font-size: 16px;
    color: #303133;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .container .comment .info .right .date {
    font-size: 12px;
    color: #909399;
  }

  .container .comment .content{
    font-size: 16px;
    color: #303133;
    line-height: 20px;
    padding: 10px 0;
  }

  .container .comment .control {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #909399;
  }

  .container .comment .like {
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
  }

  .container .comment .like .active, :hover {
    color: #409EFF;
  }

  .container .comment .like .iconfont {
    font-size: 14px;
    margin-right: 5px;
  }

  .container .comment .comment-reply {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .container .comment .comment-reply :hover {
    color: #333;
  }

  .container .comment .comment-reply .iconfont {
    font-size: 16px;
    margin-right: 5px;
  }

  .container .comment .reply {
    margin: 10px 0;
    border-left: 2px solid #DCDFE6;}


  .container .comment .reply .item {
    margin: 0 10px;
    padding: 10px 0;
    border-bottom: 1px dashed #EBEEF5;
  }

  .container .comment .reply .item .reply-content {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #303133;
  }

  .container .comment .reply .item .reply-content .from-name {
    color: #409EFF;
  }

  .container .comment .reply .item .reply-content .to-name {
    color: #409EFF;
    margin-left: 5px;
    margin-right: 5px;
  }

  .container .comment .reply .item .reply-bottom {
    display: flex;
    align-items: center;
    margin-top: 6px;
    font-size: 12px;
    color: #909399;
  }

  .container .comment .reply .item .reply-bottom .reply-text {
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }

  .container .comment .reply .item .reply-bottom .reply-text :hover {
    color: #333;
  }


  .container .comment .reply .item .reply-bottom .icon-comment {
    margin-right: 5px;
  }

  .container .comment .reply .write-reply {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #909399;
    padding: 10px;
    cursor: pointer;
  }

  .container .comment .reply .write-reply :hover {
    color: #303133;
  }

  .container .comment .reply .write-reply .el-icon-edit {
    margin-right: 5px;
  }

  .container .comment .reply .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .container .comment .reply .fade-enter, .fade-leave-to {
    opacity: 0;
  }


  .container .comment .reply .input-wrapper {
    padding: 10px;
  }

  .container .comment .reply .input-wrapper .gray-bg-input, .el-input__inner {
    /*background-color: #67C23A;*/
  }

  .container .comment .reply .input-wrapper .btn-control {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }

  .container .comment .reply .input-wrapper .btn-control .cancel {
    font-size: 16px;
    color: #606266;
    margin-right: 20px;
    cursor: pointer;
  }

  .container .comment .reply .input-wrapper .btn-control .cancel :hover {
    color: #333;
  }

  .container .comment .reply .input-wrapper .btn-control .confirm {
    font-size: 16px;
  }


</style>
