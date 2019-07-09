<template>
    <div class='table'>
        <div class="table-header">
          <Button v-for="button in buttonList" :key="button.id" :style="button.style" :type='button.buttontype'>
            <Icon  :type="button.icontype" size='18' />{{button.name}}</Button>

          <Button type="default" style="width: 120px;margin-left:10px;font-size:16px;text-align:center"
            @click="modal6 = true">
            <Icon type="ios-add" size='18' />批量编辑</Button>

          <div class="rightwrapper">
               <Rightbutton></Rightbutton>
          </div>
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
        <Modal v-model="modal6" title="批量编辑" :loading="loading" class-name="vertical-center-modal" ok-text="保存"
          width="600px" @on-ok="handleSubmit" @on-cancel="handleReset">
          <editPage ref="editPage" ></editPage>
        </Modal>
      </div>
</template>
<script>
import editPage from './editPage'
import Rightbutton from './Rightbutton'
export default {
  name: 'tables',
  props: {
    'buttonList': Array
  },
  components: {
     editPage,Rightbutton
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

<style lang="less">
      .table {
        background: #fff;
        padding: 10px;
        .table-header {
          margin-top: 20px;
          .rightwrapper {
            float: right;
          }
        }
        .table-content {
          margin-top: 10px;
          .tools {
            margin-top: 18px;
          }
        }
      }
</style>
