<template>
  <div class="home-wrap">
      主页
      axios请求
      <div class="table-warp">
        <table>
          <tr class="thead">
            <td>序号</td>
            <td>标题</td>
            <td>副标题</td>
            <td>内容</td>
            <td>时间</td>
          </tr>
          <tr v-for="(item,idx) in list">
            <td>{{idx}}</td>
            <td>{{item.title}}</td>
            <td>{{item.subTitle}}</td>
            <td>{{item.content}}</td>
            <td>{{item.time}}</td>
          </tr>
        </table>
        <div class="pagination fr">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </div>
  </div>
</template>

<script type="text/javascript">
  import {HomeHttp} from '../../api/homeHttp'
  export default {
    name: 'home',
    data(){
      return {
        currentPage:1,
        list:[]
      }
    },
    mounted() {
      this.queryList();
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.queryList();
      },
      queryList(){
        HomeHttp.queryHomeList({
          page:this.currentPage,
          pageSize:20
        }).then((result)=>{
          this.list = result.data.list.splice(0,10);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-warp {
    margin-top: 20px;
    margin-bottom: 30px;
    border-collapse: collapse;
    text-align: center;
    font-size: 14px;
  }
  .table-warp table {
    width: 100%;
    border: 1px solid #c6dff8;
    border-radius: 5px;
    border-collapse: separate;
    overflow: hidden;
  }
  .table-warp tr {
    height: 40px;line-height: 40px;color: #666;
  }
  .table-warp .thead ~ tr:hover {
    background-color: #fffaea !important;
    border:1px solid #e8e6d1;
  }
  .table-warp tr:nth-child(odd){
    background-color:#f3f7ff;
  }
  .table-warp .thead{
    background-color: #e4effe !important;
    font-weight: 600;
  }
  .table-warp .thead td {
    color: #333 !important;
  }
  .pagination{
    margin-top: 20px;
  }

</style>
