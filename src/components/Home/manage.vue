<template>
  <div class="manage">
    <div class="header">
      <div class="left">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <Icon type="logo-buffer" size="24" />
          </BreadcrumbItem>
          <BreadcrumbItem>一级分类</BreadcrumbItem>
          <BreadcrumbItem>高级筛选</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="right">
        <span class="back">
          <Icon type="ios-arrow-back" size='24' /></span>
        <span class="refresh">
          <Icon type="md-refresh" size='24' /></span>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <Card :bordered="false">
          <div slot="title">
            <Button type="text" style="width: 120px;margin-left:10px;font-size:16px;text-align:center;color:#999">
              <Icon type="ios-funnel" size='24' /><span style="margin-left:10px;">高级筛选</span></Button>
            <Button class='search' slot="extra">
              <Icon type="ios-search" size='24' />
              快速搜索
            </Button>
            <Button class='setting' slot="extra">
              <Icon type="md-settings" size='24' />
              设置字段
            </Button>
          </div>

          <div class="settings">
            <div>
              <span>客户分类：</span>
              <Button type='default'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
            </div>
            <div>
              <span>客户类型：</span>
              <Button type='default'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
            </div>
            <div>
              <span>客户状态：</span>
              <Button type='default'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
            </div>
            <div>
              <span>客户星级：</span>
              <Rate disabled v-model="valueDisabled" />
            </div>
            <div>
              <span>下次跟进时间：</span>
              <Button type='default'>全部</Button>
              <Button type='text'>今天</Button>
              <Button type='text'>明天</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
            </div>
            <div>
              <span>首字母筛选:</span>
              <Button type='default'>全部</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
              <Button type='text'>A</Button>
            </div>
            <div>
              <span>所属行业：</span>
              <Button type='default'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
              <Button type='text'>全部</Button>
            </div>
            <div>
              <span>归属人员：</span>
              <Select size="large" style="width:240px;" placeholder="选择人员">
                <Option value="公司目标"></Option>
                <Option value="子公司目标"></Option>
                <Option value="集团目标"></Option>
              </Select>
            </div>
            <div>
              <span>已选条件：</span>
              <Button type='default' style="margin-right:10px;">全部
                <Icon type="ios-close" size='24' /></Button>
              <Button type='default' style="margin-right:10px;">全部
                <Icon type="ios-close" size='24' /></Button>
              <Button type='default' style="margin-right:10px;">全部
                <Icon type="ios-close" size='24' /></Button>
              <Button type='default' style="margin-right:10px;">全部
                <Icon type="ios-close" size='24' /></Button>
              <Button type='text' style="margin-right:10px;">全部</Button>
              <Button type='text' style="margin-right:10px;">全部</Button>

            </div>
          </div>
        </Card>
        <div class='table'>
          <div class="table-header">
            <Button type="primary" style="width: 80px;margin-left:10px;font-size:16px;text-align:center">
              <Icon type="ios-add" size='18' />添加</Button>
            <Button type="default" style="width: 80px;margin-left:10px;font-size:16px;text-align:center">
              <Icon type="ios-refresh" size='18' />导入</Button>
            <Button type="default" style="width: 80px;margin-left:10px;font-size:16px;text-align:center;">
              <Icon type="ios-funnel" size='18' />导出</Button>
            <Button type="default" style="width: 120px;margin-left:10px;font-size:16px;text-align:center">
              <Icon type="ios-add" size='18' />新建任务</Button>
            <Button type="default" style="width: 120px;margin-left:10px;font-size:16px;text-align:center">
              <Icon type="ios-refresh" size='18' />转移客户</Button>
            <Button type="default" style="width: 120px;margin-left:10px;font-size:16px;text-align:center;">
              <Icon type="ios-flag" size='18' />移入公海</Button>
            <Button type="default" style="width: 120px;margin-left:10px;font-size:16px;text-align:center;">
              <Icon type="ios-funnel" size='18' />合并客户</Button>

            <Button type="default" style="width: 120px;margin-left:10px;font-size:16px;text-align:center"
              @click="modal6 = true">
              <Icon type="ios-add" size='18' />批量编辑</Button>

            <Checkbox style="width: 80px;margin-left:10px;">跟进模式</Checkbox>
            <Poptip word-wrap trigger="hover" content="当对列表客户写跟进时,会自动将刚刚写过跟进的客户排到最后。">
              <Button>
                <Icon type="md-help-circle" /></Button>
            </Poptip>

            <span><Button type="default"
                style="width: 80px;margin-left:10px;font-size:16px;text-align:center;float:right;">
                <Icon type="ios-funnel" size='18' />跟进</Button></span>
            <span><Button type="default"
                style="width: 80px;margin-left:10px;font-size:16px;text-align:center;float:right;">
                <Icon type="ios-add" size='18' />列表</Button></span>
          </div>
          <div class="table-content">
            <Table border ref="selection" :columns="columns4" :data="data1"></Table>
            <div class="tools">
              <Button @click="handleSelectAll(true)">
                <Icon type="md-checkbox" />全选</Button>
              <Button @click="handleSelectAll(false)" style="text-align:center;margin-left:10px;">
                <Icon type="ios-browsers-outline" />反选</Button>
              <Button style="text-align:center;margin-left:10px;">更多操作
                <Icon type="ios-arrow-down" /></Button>
              <Page :total="100" show-sizer style="text-align:center;float:right;" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="modal6" title="批量编辑" :loading="loading" class-name="vertical-center-modal" ok-text="保存"
      width="600px" @on-ok="handleSubmit" @on-cancel="handleReset">
      <editPage ref='editPage'></editPage>
    </Modal>
  </div>
</template>

<script>
  import editPage from './editPage'
  export default {
    name: 'manage',
    components: {
      editPage
    },
    data() {
      return {
        valueDisabled: 4.3,
        loading: true,
        modal6: false,
        columns4: [{
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '客户名称',
            key: 'name',
            width: 200,
            "sortable": true
          },
          {
            title: '客户状态',
            key: 'type',
            "sortable": true
          },
          {
            title: '客户星级',
            key: 'star',
            "sortable": true
          },
          {
            title: '首联系人',
            key: 'person',
            "sortable": true
          },
          {
            title: '手机号码',
            key: 'phone',
            "sortable": true
          },
          {
            title: '最后跟进',
            key: 'time',
            "sortable": true
          }, {
            title: '未跟进天数',
            key: 'day',
            "sortable": true
          }, {
            title: '操作',
            key: 'action',
            width: 280,
            align: 'center',
            color: '#0079fe',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: "md-checkbox"
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '跟进'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: "md-create"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: "md-arrow-up"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '置顶'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: "md-backspace"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [{
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '33'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          },
          {
            name: ' 深圳市亿恩科技有限公司',
            type: '正在跟进',
            star: '4',
            person: '李小刚',
            phone: 18339651234,
            time: '2016-10-03',
            day: '30'
          }
        ]
      }
    },
    methods: {
      handleSelectAll(status) {
        this.$refs.selection.selectAll(status);
      },
      handleSubmit() {
        this.$refs.editPage.handleSubmit('formValidate')
      },
      handleReset(name) {
        this.$refs.editPage.handleReset('formValidate')
      }
    }
  } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.manage {
  background: #f0f2f5;

  .header {
    display: inline-block;
    padding: 16px 0 0 16px;
    width: 100%;
    height: 50px;
    background: #fff;

    .left {
      float: left;
      height: 20px;
      line-height: 20px;
    }

    .right {
      float: right;
      height: 20px;
      line-height: 20px;

      .back,
      .refresh {
        margin-right: 20px;
      }
    }
  }

  .content {

    .top {
      background: #eee;
      padding: 20px 120px;

      .search {
        margin-right: 20px;
      }

      .settings {
        div {
          height: 40px;
          line-height: 40px;

          span {
            display: inline-block;
            width: 120px;
          }
        }
      }

      .table {
        margin-top: 20px;
        background: #fff;
        padding: 20px;

        .table-content {
          margin-top: 20px;

          .tools {
            margin-top: 18px;
          }
        }
      }
    }
  }
}

</style>