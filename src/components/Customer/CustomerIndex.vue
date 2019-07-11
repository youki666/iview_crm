<template>
  <div class="customerlist">
    <div class="headerwrapper">
      <homeHeader :name='name'></homeHeader>
    </div>
    <div class="content">
      <div class="topwrapper">
        <Tools :list='list' :select='select'></Tools>
      </div>
      <div class='tablewrapper'>
        <Tables :buttonList='buttonList'></Tables>
      </div>
    </div>
  </div>
</template>

<script>
//import homeHeader from './homeHeader'
import homeHeader from './../Home/homeHeader'
import Tables from './../Home/Table'
import Tools from './../Home/Tools'
export default {
  name: 'customerlist',
  components: {
    homeHeader,
    Tools,
    Tables
  },
  data() {
    return {
      name: '客户列表',
      list: ['全部客户', '我的客户', '下属客户', '重点客户', '我协作的', '下属协作的'],
      isActive: false,
      Index: 0,
      modal6: false,
      loading: true,
      select: [{
        placeholder: '客户状态',
        options: ['存续', '破产', '倒闭']
      }, {
        placeholder: '客户类型',
        options: ['Vip', 'Svip', 'SSSVip']
      }, {
        placeholder: '客户星级',
        options: ['三星', '四星', '五星']
      }],
      buttonList: [{
          name: '添加',
          buttontype: 'primary',
          icontype: 'ios-add',
          style: 'width: 80px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '导入',
          buttontype: 'default',
          icontype: 'md-download',
          style: 'width: 80px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '导出',
          buttontype: 'default',
          icontype: 'ios-refresh',
          style: 'width: 80px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '新建任务',
          buttontype: 'default',
          icontype: 'ios-options',
          style: 'width: 120px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '转移客户',
          buttontype: 'default',
          icontype: 'ios-build',
          style: 'width: 120px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '移入公海',
          buttontype: 'default',
          icontype: 'md-move',
          style: 'width: 120px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '合并客户',
          buttontype: 'default',
          icontype: 'md-contact',
          style: 'width: 120px;margin-left:10px;font-size:16px;text-align:center'
        },
        {
          name: '批量编辑',
          buttontype: 'default',
          icontype: 'ios-add',
          style: 'width: 120px;margin-left:10px;font-size:16px;text-align:center'
        }
      ],
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
    handleSubmit() {
      this.$refs.editPage.handleSubmit('formValidate')
    },
    handleReset(name) {
      this.$refs.editPage.handleReset('formValidate')
    }
  }
}
</script>
<style lang="less"scoped>
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
  position: relative;

  .content {
    padding: 20px 180px;

    .headerwrapper {
      position: relative;
    }

    .topwrapper {
      margin-top: 50px;

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

    .tablewrapper {
      margin-top: 10px;
    }
  }
}

</style>
