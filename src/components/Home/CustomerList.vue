<template>
  <div class="customerlist">
    <div class="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <Icon type="logo-buffer" size="24" />
        </BreadcrumbItem>
        <BreadcrumbItem>一级分类</BreadcrumbItem>
        <BreadcrumbItem>客户列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="content">
      <div class="top">
        <Card :bordered="false">
          <p slot="title" class='title'>
            <span v-for="(item, index) in list" :class="{active:Index==index}" :key="index"
              @click="selected(index)">{{item}}</span>
          </p>
          <div class="tools">
            <span><Input v-model="value1" size="large" style="width: 180px" /></span>
            <span>
              <Select size="large" style="width:180px;margin-left:10px;" placeholder="客户状态">
                <Option value="公司目标"></Option>
                <Option value="子公司目标"></Option>
                <Option value="集团目标"></Option>
              </Select>
            </span>
            <span>
              <Select size="large" style="width:180px;margin-left:10px;" placeholder="客户类型">
                <Option value="公司目标"></Option>
                <Option value="子公司目标"></Option>
                <Option value="集团目标"></Option>
              </Select>
            </span>
            <span>
              <Select size="large" style="width:180px;margin-left:10px;" placeholder="客户星级">
                <Option value="公司目标"></Option>
                <Option value="子公司目标"></Option>
                <Option value="集团目标"></Option>
              </Select>
            </span>
            <span>
              <DatePicker size="large" type="date" placeholder="最后跟进" style="width: 180px;margin-left:10px;">
              </DatePicker>
            </span>
            <span><Button type="primary" style="width: 100px;margin-left:10px;font-size:16px;text-align:center">
                <Icon type="ios-search" size='24' />查询</Button></span>
            <span><Button type="default" style="width: 80px;margin-left:10px;font-size:16px;text-align:center">
                <Icon type="ios-refresh" size='24' />重置</Button></span>
            <span><Button type="text"
                style="width: 120px;margin-left:10px;font-size:16px;text-align:center;color:#3293fe">
                <Icon type="ios-funnel" size='24' />高级筛选</Button></span>
          </div>
        </Card>
      </div>
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
    <Modal v-model="modal6" title="批量编辑" :loading="loading" class-name="vertical-center-modal" ok-text="保存"
      width="600px" @on-ok="handleSubmit" @on-cancel="handleReset">
      <editPage ref="editPage" ></editPage>
    </Modal>
  </div>
</template>

<script>
//import homeHeader from './homeHeader'
import editPage from './editPage'
  export default {
    name: 'customerlist',
    components: {
     editPage
    },
    data() {
      return {
        list: ['全部客户', '我的客户', '下属客户', '重点客户', '我协作的', '下属协作的'],
        isActive: false,
        Index: 0,
        modal6: false,
        loading: true,
        value1: '搜索关键词',
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
      selected(index) {
        this.Index = index
      },
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
<style lang="less">
  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
      top: 0;
      font-size: 18px;
    }
  }

  .customerlist {
    background: #f0f2f5;

    .header {
      padding: 16px 0 0 16px;
      height: 50px;
      font-size: 24px;
      background: #fff;
    }

    .content {
      padding: 20px 180px;

      .top {

        .ivu-card-head {
          background: #f9f9f9;
          font-size: 18px;
          font-weight: bold;
          text-align: center;

          .title {
            display: flex;
            text-align: center;
          }

          span {
            display: inline-block;
            flex: 1;
            font-weight: bold;

            &:hover {
              color: #0079fe;
            }
          }

          .active {
            color: #0079fe;
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

  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
      top: 0;
    }
  }

</style>
