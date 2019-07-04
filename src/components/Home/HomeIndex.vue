<template>
  <div class="homeindex">
       <div class="header">
          <Breadcrumb separator=">">
              <BreadcrumbItem ><Icon type="logo-buffer" size="24" /></BreadcrumbItem>
              <BreadcrumbItem >一级分类</BreadcrumbItem>
              <BreadcrumbItem >系统首页</BreadcrumbItem>
          </Breadcrumb>
       </div>
       <div class="content">
          <div style="background:#eee;padding:  20px 220px">
            <Card :bordered="false" style="width:100%">
                <p class='title' slot="title">快速新建</p>
                 <div>
                   <ul class='new'>
                    <router-link to="/home/newcustomer">
                      <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                    </router-link>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                     <li>
                        <div>
                          <p class='icon'><Icon type="md-people" size="48"/></p>
                          <p class='name'>新建客户</p>
                        </div>
                     </li>
                   </ul>
                 </div>
            </Card>
            <div class='data'>
              <Row gutter='8'>
                  <Col span="12">
                      <Card dis-hover>
                          <p class='report' slot="title">
                            <span class='title'>数据简报</span>
                            <Select size="large" style="width:100px;float: right;margin-left:20px;" placeholder="本周">
                                 <Option value="本周"></Option>
                                 <Option value="本月"></Option>
                                 <Option value="上周"></Option>
                            </Select>
                            <Select size="large" style="width:100px;float: right" placeholder="公司简报">
                                 <Option value="公司简报"></Option>
                                 <Option value="公司简报"></Option>
                                 <Option value="公司简报"></Option>
                            </Select>
                          </p>
                          <div class="items">
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                                <div class="item">
                                  <p class="name">新增客户</p>
                                  <p class='num'>200</p>
                                </div>
                          </div>
                      </Card>
                  </Col>
                    <Col span="12">
                        <Card dis-hover>
                            <p class='report' slot="title" style="font-size:18px;font-weight:bold;">系统公告
                              <Button  style="width:100px;float:right;margin-left:20px;">
                                  查看更多
                                  <Icon type="ios-arrow-forward" />
                              </Button>
                               <Button  style="width:100px;float:right;">
                                  <Icon type="md-add" />
                                  发布公告
                              </Button>
                            </p>
                            <div class="infos">
                                <ul>
                                  <li><span class="info" @click="modal2=true">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                 </Row>
            </div>
             <div class='sales'>
              <Row gutter='8'>
                  <Col span="12">
                      <Card dis-hover>
                          <p class='report' slot="title">
                            <span class='title'>业绩目标</span>
                            <DatePicker  format="yyyy年MM月dd日" type="date" placeholder="2019-06" style="width:150px;float: right;margin-left:20px;"></DatePicker>
                            <Select size="large" style="width:100px;float: right;margin-left:20px;" placeholder="公司目标">
                                 <Option value="公司目标"></Option>
                                 <Option value="子公司目标"></Option>
                                 <Option value="集团目标"></Option>
                            </Select>
                          </p>
                          <div class="circle">
                               <p class="money">成交金额</p>
                                <div class="icon">
                                  <i-circle
                                        :size="200"
                                        :trail-width="8"
                                        :stroke-width="10"
                                        :percent="40"
                                        stroke-linecap="square"
                                        stroke-color="#43a3fb">
                                        <div class="demo-Circle-custom">
                                            <h4>完成度</h4>
                                            <span>
                                                40%
                                            </span>
                                        </div>
                                    </i-circle>
                                </div>
                                <div class='target'>
                                  <p>目标金额</p>
                                  <p>¥1,000,000.00</p>
                                  <p>完成金额</p>
                                  <p>¥400,000.00</p>
                                </div>
                          </div>
                      </Card>
                  </Col>
                    <Col span="12">
                        <Card dis-hover>
                            <p class='report' slot="title" style="font-size:18px;font-weight:bold;">业绩排行
                               <DatePicker  format="yyyy年MM月dd日" type="date" placeholder="2019-06" style="width:150px;float: right;margin-left:20px;"></DatePicker>
                            <Select size="large" style="width:100px;float: right;margin-left:20px;" placeholder="个人排行">
                                 <Option value="个人排行"></Option>
                                 <Option value="个人排行"></Option>
                                 <Option value="公司排行"></Option>
                            </Select>
                            </p>
                            <div id="arr1">
                            </div>
                        </Card>
                    </Col>
                 </Row>
            </div>
            <div class='sales'>
              <Row gutter='8'>
                  <Col span="12">
                      <Card dis-hover>
                          <p class='report' slot="title">
                            <span class='title'>销售预测</span>
                            <Select size="large" style="width:100px;float: right;margin-left:20px;" placeholder="公司数据">
                                 <Option value="公司数据"></Option>
                                 <Option value="公司数据2"></Option>
                                 <Option value="公司数据3"></Option>
                            </Select>
                          </p>
                          <div id="arr2">

                          </div>
                      </Card>
                  </Col>
                    <Col span="12">
                        <Card dis-hover>
                            <p class='report' slot="title" style="font-size:18px;font-weight:bold;">销售漏斗
                               <DatePicker  format="yyyy年MM月dd日" type="date" placeholder="2019-06" style="width:150px;float: right;margin-left:20px;"></DatePicker>
                            <Select size="large" style="width:100px;float: right;margin-left:20px;" placeholder="公司数据">
                                 <Option value="公司数据"></Option>
                                 <Option value="公司数据2"></Option>
                                 <Option value="公司数据3"></Option>
                            </Select>
                            </p>
                            <div id="arr3">
                            </div>
                        </Card>
                    </Col>
                 </Row>
            </div>
            <div class='sales'>
              <Row gutter='8'>
                  <Col span="12">
                      <Card dis-hover>
                          <p class='report' slot="title">
                            <span class='title'>工作报告</span>
                            <Button  style="width:100px;float:right;margin-left:20px;">
                                  查看更多
                                  <Icon type="ios-arrow-forward" />
                              </Button>
                               <Button  style="width:100px;float:right;margin-left:20px;">
                                  <Icon type="md-add" />
                                  写新报告
                              </Button>
                            <Select size="large" style="width:120px;float: right;margin-left:20px;" placeholder="提交给我的">
                                 <Option value="提交给我的"></Option>
                                 <Option value="提交给我的2"></Option>
                                 <Option value="提交给我的3"></Option>
                            </Select>
                            
                          </p>
                          <div class='dailyReport'>
                                <ul>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                  <li><span class="info">2019-04-22 工作日报</span><span><Icon type="md-man" />赵小刚</span>  <span class="details"> <Icon type="ios-arrow-forward" />详情</span><span class="type"><Icon type="ios-flag" />未批阅</span></li>
                                </ul>
                          </div>
                      </Card>
                  </Col>
                    <Col span="12">
                        <Card dis-hover>
                            <p class='report' slot="title" style="font-size:18px;font-weight:bold;">日程日历
                            <Button  style="width:100px;float:right;margin-left:20px;">
                                  新建日程
                                  <Icon type="ios-arrow-forward" />
                              </Button>
                               <Button  style="width:100px;float:right;margin-left:20px;">
                                  <Icon type="md-add" />
                                  日程管理
                              </Button>
                            <Select size="large" style="width:120px;float: right;margin-left:20px;" placeholder="我的日程">
                                 <Option value="我的日程"></Option>
                                 <Option value="我的日程2"></Option>
                                 <Option value="我的日程3"></Option>
                            </Select>
                            </p>
                            <div class='timepicker'>
                             <div class="top">
                                      <ButtonGroup  style="width:90px;float:right;margin-left:20px;">
                                          <Button>年</Button>
                                          <Button>月</Button>
                                      </ButtonGroup>
                                    <Select size="large" style="width:120px;float: right;margin-left:20px;" placeholder="5月">
                                        <Option value="5月"></Option>
                                        <Option value="6月"></Option>
                                        <Option value="7月"></Option>
                                    </Select>
                                    <Select size="large" style="width:120px;float: right;margin-left:20px;" placeholder="2019">
                                        <Option value="2019"></Option>
                                        <Option value="2020"></Option>
                                        <Option value="2021"></Option>
                                    </Select>
                                 </div>
                            </div>
                        </Card>
                    </Col>
                 </Row>
            </div>
        </div>
       </div>
        <BackTop :height="100" :bottom="200">
           
        </BackTop>
        <Modal
        title="公告详情"
        v-model="modal2"
        class-name="vertical-center-modal">
        <p class="title"> <span></span>  如何建立长久的客户关系</p>
    </Modal>
  </div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
export default {
  name: 'homeindex',
  data() {
    return {
      modal2: false
    }
  },
  mounted () {
        this.initChart1('arr1')
        this.initChart2('arr2')
        this.initChart3('arr3')
    },

    methods: {
        initChart1 (id) {
            const data = [{
                        "name": "目标金额",
                        "person": "李小刚",
                        "money": 3000000
                    }, {
                        "name": "目标金额",
                        "person": "李刚",
                        "money": 2000000
                    }, {
                        "name": "目标金额",
                        "person": "李小",
                        "money": 2000000
                    }, {
                        "name": "目标金额",
                        "person": "刚",
                        "money": 2000000
                    }, {
                        "name": "目标金额",
                        "person": "李",
                        "money": 2000000
                    }, {
                        "name": "目标金额",
                        "person": "小",
                        "money": 2000000
                    }, {
                        "name": "目标金额",
                        "person": "李小刚",
                        "money": 2000000
                    }, {
                        "name": "目标金额",
                        "person": "李小刚",
                        "money": 2000000
                    }, {
                        "name": "成交金额",
                        "person": "李小刚",
                        "money": 2000000
                    }, {
                        "name": "成交金额",
                        "person": "李刚",
                        "money": 1600000
                    }, {
                        "name": "成交金额",
                        "person": "李小",
                        "money": 200000
                    }, {
                        "name": "成交金额",
                        "person": "刚",
                        "money": 160000
                    }, {
                        "name": "成交金额",
                        "person": "李",
                        "money": 1200000
                    }, {
                        "name": "成交金额",
                        "person": "小",
                        "money": 1000000
                    }, {
                        "name": "成交金额",
                        "person": "李刚",
                        "money": 1600000
                    }, {
                        "name": "成交金额",
                        "person": "李刚",
                        "money": 1600000
                    }];
            const chart = new G2.Chart({
                container: id,
                height: 300,
                forceFit: true,
                padding: [ 40, 20, 95, 80 ]
            })

            chart.source(data)
            chart.legend({
              clickable: false,
            });

            chart.interval().position('person*money').color('name').adjust([{
              type: 'dodge',
              marginRatio: 1 / 32
            }]);
            chart.render()

            this.chart = chart
        },
        initChart2 (id) {
            const data = [{
                        "name": "预计销售金额",
                        "month": "1月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                       "month": "2月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "3月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "4月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "4月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "5月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "6月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "7月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "8月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "9月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "10月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "11月",
                        "money": 3000000
                    }, {
                        "name": "预计销售金额",
                        "month": "12月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "1月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "2月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "3月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "4月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "5月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "6月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "7月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "8月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "9月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "10月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "11月",
                        "money": 3000000
                    }, {
                        "name": "概率金额",
                        "month": "12月",
                        "money": 3000000
                    }];
            const chart = new G2.Chart({
                container: id,
                height: 350,
                forceFit: true,
                padding: [ 60 ]
            })

            chart.source(data)
            chart.legend({
              clickable: false,
            });

            chart.interval().position('month*money').color('name').adjust([{
              type: 'dodge',
              marginRatio: 1 / 32
            }]);
            chart.render()

            this.chart = chart
        },
        initChart3 (id) {
                  var _DataSet = DataSet,
                  DataView = _DataSet.DataView;

                var data = [{
                  action: '初步洽谈',
                  num: 500
                }, {
                  action: '深入沟通',
                  num: 350
                }, {
                  action: '产品报价',
                  num: 250
                }, {
                  action: '成交商机',
                  num: 150
                }, {
                  action: '流失商机',
                  num: 120
                }];
                var dv = new DataView().source(data);
                dv.transform({
                  type: 'map',
                  callback: function callback(row) {
                    row.percent = row.num / 1370;
                    return row;
                  }
                });
                data = dv.rows;
                var chart = new G2.Chart({
                  container: 'arr3',
                  forceFit: true,
                  height: 350,
                  padding: [20,95]
                });
                chart.source(data, {
                  percent: {
                    nice: false
                  }
                });
                chart.axis(false);
                chart.tooltip({
                  showTitle: false,
                  itemTpl: '<li data-index={index} style="margin-bottom:4px;">' + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' + '{name}<br/>' + '<span style="padding-left: 16px">数量：{num}</span><br/>' + '<span style="padding-left: 16px">占比：{percent}</span><br/>' + '</li>'
                });
                chart.coord('rect').transpose().scale(1, -1);
                chart.intervalSymmetric().position('action*percent').shape('funnel').color('action', ['#3aa1ff', '#4ecb73', '#ecd98a', '#3c4879', '#975Fe5']).label('action*num', function(action, num) {
                  return action + ' ' + num;
                }, {
                  offset: 15,
                  labelLine: {
                    lineWidth: 1,
                    stroke: 'rgba(0, 0, 0, 0.15)'
                  }
                }).tooltip('action*num*percent', function(action, num, percent) {
                  return {
                    name: action,
                    percent: parseInt(percent * 100) + '%',
                    num: num
                  };
                });
                data.forEach(function(obj) {
                  // 中间标签文本
                  chart.guide().text({
                    top: true,
                    position: {
                      action: obj.action,
                      percent: 'median'
                    },
                    content: parseInt(obj.percent * 100) + '%', // 显示的文本内容
                    style: {
                      fill: '#fff',
                      fontSize: '16',
                      textAlign: 'center',
                      shadowBlur: 2,
                      
                    }
                  });
                });
                chart.render();
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homeindex {
  background: #f0f2f5;
  .header {
    padding: 16px 0 0 16px;
    height: 50px;
    font-size: 24px;
    background: #fff;
  }
  .content {
    .title{
      font-size: 18px;
      font-weight: bold;
    }
    .new {
      padding: 0 35px;
      li {
        display: inline-block;
        margin: 0 10px;
        width: 120px;
        height: 120px;
        position: relative;
        color: #999;
        div {
          width: 60px;
          height: 60px;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
      }
      &:hover {
      background: #f0f2f5;
    }
    }
  }
  .data {
    margin-top: 20px;
    .report {
      height: 40px;;
    }
    .items {
      
      height: 300px;
      padding: 10px 0;
      .item {
        width:120px;
        height: 120px;
        margin: 5px;
        padding: 10px;
        float: left;
        text-align: center;
        .name {
          padding-top: 10px;
        }
        .num {
          font-size: 36px;
          padding: 10px;
        }
      }
    }
    .infos {
      padding: 0 10px;
      height: 300px;
      li {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f3f3f3;
        .info {
           margin-right: 120px;
           &:hover {
             color:#999;
             cursor: pointer;
           }
        }
      }
    }
  }
 .sales {
   margin-top: 20px;
   .report {
     height: 40px;
   }
   .circle {
     position: relative;
     height: 300px;
     .icon {
       position: absolute;
       top: 50px;
       left: 70px;;
     }
     .target {
       position: absolute;
       top: 40px;
       right: 120px;
       p{
         font-size: 18px;
         padding: 10px;

       }
     }
   }
   .dailyReport {
     li {
       margin: 0 30px;
       height: 36px;
       line-height: 36px;
       border-bottom: 1px solid gray;
       span {
         display: inline-block;
         
       }
       .info {
         margin-left: 16px;
         margin-right: 36px;
       }
       .type {
         float: right;
         margin-right: 80px;
       }
       .details {
        float: right;
        margin-right: 0px;
      }
     }
   }
   .timepicker {
     height: 255px;
     position: relative;
   }
 }
 }
}
</style>
