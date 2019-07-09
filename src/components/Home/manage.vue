<template>
  <div class="manage">
    <div class="headerwrapper">
      <homeHeader :name="name"></homeHeader>
      <div class="right">
        <span class="back">
          <Icon type="ios-arrow-back" size="24" />
        </span>
        <span class="refresh">
          <Icon type="md-refresh" size="24" />
        </span>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <Card :bordered="false">
          <div slot="title">
            <Button type="text" style="width: 180px;font-size:16px;text-align:center;color:#999">
              <Icon type="ios-funnel" size="16" />
              <span>高级筛选</span>
            </Button>
          </div>
          <Button slot="extra" size="small" style="margin-right:20px;">
            <Icon type="md-settings" size="24" />设置字段
          </Button>
          <Button slot="extra" size="small">
            <Icon type="ios-search" size="24" />快速搜索
          </Button>

          <div class="settings">
            <div>
              <span>客户分类：</span>
              <Button type="default">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
            </div>
            <div>
              <span>客户类型：</span>
              <Button type="default">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
            </div>
            <div>
              <span>客户状态：</span>
              <Button type="default">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
            </div>
            <div>
              <span>客户星级：</span>
              <Rate disabled v-model="valueDisabled" />
            </div>
            <div>
              <span>下次跟进时间：</span>
              <Button type="default">全部</Button>
              <Button type="text">今天</Button>
              <Button type="text">明天</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
            </div>
            <div>
              <span>首字母筛选:</span>
              <Button type="default">全部</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
              <Button type="text">A</Button>
            </div>
            <div>
              <span>所属行业：</span>
              <Button type="default">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
              <Button type="text">全部</Button>
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
              <Button type="default" style="margin-right:10px;">
                全部
                <Icon type="ios-close" size="24" />
              </Button>
              <Button type="default" style="margin-right:10px;">
                全部
                <Icon type="ios-close" size="24" />
              </Button>
              <Button type="default" style="margin-right:10px;">
                全部
                <Icon type="ios-close" size="24" />
              </Button>
              <Button type="default" style="margin-right:10px;">
                全部
                <Icon type="ios-close" size="24" />
              </Button>
              <Button type="text" style="margin-right:10px;">全部</Button>
              <Button type="text" style="margin-right:10px;">全部</Button>
            </div>
          </div>
        </Card>
        <div class="tablewrapper">
          <Tables :buttonList="buttonList"></Tables>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "./homeHeader";
import Tables from "./Table";
export default {
  name: "manage",
  components: {
    homeHeader,
    Tables
  },
  data() {
    return {
      name: "高级筛选",
      valueDisabled: 4.3,
      buttonList: [
        {
          name: "添加",
          buttontype: "primary",
          icontype: "ios-add",
          style: "width: 80px;margin-left:10px;font-size:16px;text-align:center"
        },
        {
          name: "导入",
          buttontype: "default",
          icontype: "md-download",
          style: "width: 80px;margin-left:10px;font-size:16px;text-align:center"
        },
        {
          name: "导出",
          buttontype: "default",
          icontype: "ios-refresh",
          style: "width: 80px;margin-left:10px;font-size:16px;text-align:center"
        },
        {
          name: "新建任务",
          buttontype: "default",
          icontype: "ios-options",
          style:
            "width: 120px;margin-left:10px;font-size:16px;text-align:center"
        },
        {
          name: "转移客户",
          buttontype: "default",
          icontype: "ios-build",
          style:
            "width: 120px;margin-left:10px;font-size:16px;text-align:center"
        },
        {
          name: "移入公海",
          buttontype: "default",
          icontype: "md-move",
          style:
            "width: 120px;margin-left:10px;font-size:16px;text-align:center"
        },
        {
          name: "合并客户",
          buttontype: "default",
          icontype: "md-contact",
          style:
            "width: 120px;margin-left:10px;font-size:16px;text-align:center"
        }
      ],
      loading: true,
      modal6: false,
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "客户名称",
          key: "name",
          width: 200,
          sortable: true
        },
        {
          title: "客户状态",
          key: "type",
          sortable: true
        },
        {
          title: "客户星级",
          key: "star",
          sortable: true
        },
        {
          title: "首联系人",
          key: "person",
          sortable: true
        },
        {
          title: "手机号码",
          key: "phone",
          sortable: true
        },
        {
          title: "最后跟进",
          key: "time",
          sortable: true
        },
        {
          title: "未跟进天数",
          key: "day",
          sortable: true
        },
        {
          title: "操作",
          key: "action",
          width: 280,
          align: "center",
          color: "#0079fe",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    icon: "md-checkbox"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "跟进"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    icon: "md-create"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    icon: "md-arrow-up"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "置顶"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    icon: "md-backspace"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "33"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        },
        {
          name: " 深圳市亿恩科技有限公司",
          type: "正在跟进",
          star: "4",
          person: "李小刚",
          phone: 18339651234,
          time: "2016-10-03",
          day: "30"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.manage {
  background: #f0f2f5;

  .headerwrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 50px;
    background: #fff;

    .right {
      position: absolute;
      top: 14px;
      right: 20px;
      height: 20px;
      line-height: 20px;

      .back,
      .refresh {
        margin-right: 20px;
      }
    }
  }

  .content {
    padding: 20px 120px;
    .top {
      background: #eee;
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
      .tablewrapper {
        margin-top: 20px;
      }
    }
  }
}
</style>