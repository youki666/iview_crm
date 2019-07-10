<template>
  <div class="customerlist">
    <div class="headerwrapper">
      <homeHeader :name='name'></homeHeader>
    </div>
    <div class="content">
        <div class="toptopwrapper">
          <Tools :list='list' :select='select'></Tools>
      </div>
      <div class='tablewrapper'>
            <Tables :buttonList='buttonList'></Tables> 
      </div>
    </div>
    
  </div>
</template>

<script>
import homeHeader from './homeHeader'
import Tables from './Table'
import Tools from './Tools'
  export default {
    name: 'customerlist',
    components: {
     homeHeader,Tables,Tools
    },
    data() {
      return {
        name: '全部订单',
        list: ['全部订单', '我的订单', '下属订单',  '我协作的', '下属协作'],
        select: [{placeholder:'客户状态', options:['开业','转让','倒闭']},{placeholder:'客户类型', options:['会员','超级会员','钻石会员']},{placeholder:'客户星级', options:['1星','2星','3星']}],
        buttonList: [{name:'添加',buttontype:'primary',icontype:'ios-add',style:'width: 80px;margin-left:10px;font-size:16px;text-align:center'},
                     {name:'导入',buttontype:'default',icontype:'ios-refresh',style:'width: 80px;margin-left:10px;font-size:16px;text-align:center'},
                     {name:'导出',buttontype:'default',icontype:'md-download',style:'width: 80px;margin-left:10px;font-size:16px;text-align:center'},
                     {name:'转移订单',buttontype:'default',icontype:'ios-options',style:'width: 120px;margin-left:10px;font-size:16px;text-align:center'},
                     {name:'添加协作',buttontype:'default',icontype:'ios-build',style:'width: 120px;margin-left:10px;font-size:16px;text-align:center'}],
        isActive: false,
        Index: 0,
        modal6: false,
        loading: true,
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
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
      padding: 80px 180px;

      .top {
        .ivu-card-head {
          background: #f9f9f9;
          font-size: 18px;
          font-weight: bold;

          span {
            display: inline-block;
            margin: 0 30px;
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
        margin-top: 20px;
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


