<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="position: relative; top: 7px">搜索</span>
            <el-button-group style="float: right;" type="text">
              <el-button
                type="primary"
                icon="el-icon-search"
                @click="btnSearch">搜索
              </el-button>
              <el-button
                type="primary"
                icon="el-icon-refresh"
                @click="btnReset">重置
              </el-button>
            </el-button-group>
          </div>
          <div>
            <el-form :inline="true" size="mini">
              <el-row :gutter="20">
                <el-col :span="colSize">
                  <el-form-item label="商品名称">
                    <el-input
                      v-model="searchForm.keyword"
                      clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="colSize">
                  <el-form-item label="商品货号">
                    <el-input
                      v-model="searchForm.productSn"
                      clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="colSize">
                  <el-form-item label="商品分类">
                    <el-cascader
                      @change="handleCateChange"
                      v-model="productCateValue"
                      :options="productCateOptions"
                      :props="{ expandTrigger: 'hover', label: 'name', value: 'id' }"></el-cascader>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="colSize">
                  <el-form-item label="上架状态">
                    <el-select
                      v-model="searchForm.publishStatus"
                      placeholder="请选择">
                      <el-option v-for="item in productCateOptions"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="colSize">
                  <el-form-item label="审核状态">
                    <el-select
                      v-model="searchForm.verifyStatus"
                      placeholder="请选择">
                      <el-option v-for="item in verifyStatusOptions"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="colSize">
                  <el-form-item label="商品品牌">
                    <el-select
                      v-model="searchForm.brandId"
                      placeholder="请选择">
                      <el-option v-for="item in productBrandList"
                                 :key="item.id"
                                 :label="item.label"
                                 :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="position: relative; top: 7px">商品列表</span>
            <el-button-group style="float: right;" type="text">
              <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>
              <el-button type="primary" icon="el-icon-delete">删除</el-button>
            </el-button-group>
          </div>
          <el-table
            fit
            size="mini"
            :data="productList"
            border
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="id"
              align="center"
              label="编号"
              width="80">
            </el-table-column>
            <el-table-column
              label="图片"
              width="120">
              <template slot-scope="scope">
                <el-image
                  style="height: 100%"
                  :src="scope.row.pic"></el-image>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="150"
              label="商品名称">
              <template slot-scope="scope">
                <p>{{scope.row.name}}</p>
                <p>{{scope.row.brandName}}</p>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="价格/货号">
              <template slot-scope="scope">
                <p>价格：￥{{scope.row.price}}</p>
                <p>价格：￥{{scope.row.productSn}}</p>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="标签">
              <template slot-scope="scope">
                <p>上架:
                  <el-switch v-model="scope.row.publishStatus"
                             active-color="#409eff"
                             inactive-color="#dcdfe6"
                             :active-value="1"
                             :inactive-value="0"
                  ></el-switch>
                </p>
                <p>新品:
                  <el-switch v-model="scope.row.newStatus"
                             active-color="#409eff"
                             inactive-color="#dcdfe6"
                             :active-value="1"
                             :inactive-value="0"
                  ></el-switch>
                </p>
                <p>推荐:
                  <el-switch
                    v-model="scope.row.recommendStatus"
                    active-color="#409eff"
                    inactive-color="#dcdfe6"
                    :active-value="1"
                    :inactive-value="0"
                    @change="handleStatus('rec', scope.row)"
                  ></el-switch>
                </p>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="SKU库存">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="sale"
              label="销量"
              width="120">
            </el-table-column>
            <el-table-column
              align="center"
              label="审核状态">
              <template slot-scope="scope">
                <p>{{scope.row.verifyStatus | verifyStatusFilter}}</p>
                <p>
                  <el-button type="text">审核详情</el-button>
                </p>
              </template>
            </el-table-column>
            <el-table-column
              width="160"
              align="center"
              label="操作">
              <template slot-scope="scope">
                <p>
                  <el-button size="mini">查看</el-button>
                  <el-button size="mini">编辑</el-button>
                </p>
                <p>
                  <el-button size="mini">日志</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="btnDelete(scope.$index, scope.row)">删除
                  </el-button>
                </p>
              </template>
            </el-table-column>
          </el-table>
          <el-row style="margin-top: 20px">
            <el-col :span="10" :offset="7">
              <el-pagination
                background
                @size-change="btnSearch"
                @current-change="handleCurrentChange"
                :current-page="page.pageNum"
                :page-sizes="[5,10,20]"
                :page-size="page.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="page.total">
              </el-pagination>
            </el-col>

          </el-row>

        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="添加商品" :visible.sync="dialogFormVisible">
      <p>abc</p>
      <div slot="footer" class="el-dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {api_productList, api_updateProductStatus} from "@/network/api/product";
  import {api_listWithChildren} from "@/network/api/productCate";

  export default {
    name: "Product",
    created() {
      this.handleProductList()
      this.handleProductCate()
    },
    data() {
      return {
        colSize: 8,
        value: [],
        productList: [],
        options: [],
        dialogFormVisible: false,
        page: {
          pageNum: 1,
          pageSize: 5,
          totalPage: 3,
          total: 11
        },
        searchForm: {
          keyword: null,
          pageNum: 1,
          pageSize: 5,
          publishStatus: null,
          verifyStatus: null,
          productSn: null,
          productCategoryId: null,
          brandId: null
        },
        publishStatusOptions: [
          {
            value: 1,
            label: '上架'
          },
          {
            value: 0,
            label: '下架'
          }
        ],
        verifyStatusOptions: [
          {
            value: 1,
            label: '审核通过'
          },
          {
            value: 0,
            label: '未审核'
          }
        ],
        productBrandList: [],
        productList: [],
        productCateValue: [],
        editRowIndex: -1,
        dialogFormVisible: false,
        productForm: {
          data: '',
          name: '',
          address: ''
        },
        productCateOptions: []
      }
    },
    filters: {
      verifyStatusFilter(value) {
        let text = '审核通过'
        if (value !== -1) {
          text = '未审核'
        }
        return text
      }
    },
    methods: {
      async handleStatus(type, row) {
        let url = ''
        if (type === 'rec') {
          url = 'recommendStatus'
        }
        let ids = []
        ids.push(row.id)
        console.log(ids);
        const res = await api_updateProductStatus(url, {
          ids: 26,
          recommendStatus: row.recommendStatus
        })
        console.log(res);
      },
      async handleProductCate() {
        this.productCateOptions = []
        const res = await api_listWithChildren()
        this.productCateOptions = res.data
      },
      async handleProductList() {
        const res = await api_productList(this.searchForm)
        this.productList = res.data.list
      },
      btnEdit(index, row) {
        console.log(index, row);
      },
      btnDelete(index, row) {
        this.$confirm(`确认是否删除姓名${row.name}的记录?`, '删除', {
          confirmButtonText: '确定',
        }).then(() => {
          let res = this.productList.splice(index, 1)
          let msg = `删除成功`
          if (!res) {
            msg = `删除失败`
          }
          this.$message({
            type: `info`,
            message: msg
          });
        })
      },
      btnSearch() {
        console.log(1);
        //获取商品类型
        this.searchForm.productCategoryId = this.productCateValue[1]
        this.handleProductList()
      },
      btnReset() {
      },
      handleCurrentChange() {

      },
      handleCateChange(value) {
        console.log(value);
        console.log(this.productCateValue);
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-top: 10px;
  }

  .box-card {
    margin-top: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
