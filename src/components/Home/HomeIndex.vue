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
                                  <li><span class="info">【内部分享】如何建立良好的客户关系</span><span class="time"> <Icon type="ios-clock" />2019-04-10 09:00</span></li>
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
              <Row gutter= 8>
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
        </div>
       </div>
  </div>
</template>

<script>
import G2 from '@antv/g2';
export default {
  name: 'homeindex',
  data() {
    return {

    }
  },
  mounted () {
        this.initChart('arr1')
        window.onresize = () => {
            this.chart.forceFit()
        }
    },

    methods: {
        initChart (id) {
            const data = [
                { genre: '李', sold: 275, sold: 3000000},
                { genre: '李2', sold: 275,sold: 300000},
                { genre: '李3', sold: 275,sold: 300000},
                { genre: '李4', sold: 275,sold: 300000},
                { genre: '李5', sold: 275,sold: 40000},
                { genre: '李6', sold: 275,sold: 300000},
                { genre: '李7', sold: 275,sold: 300000},
                { genre: '李8', sold: 275,sold: 300000},
                { genre: '李9', sold: 275,sold: 300000},
                { genre: '李10', sold: 275,sold: 300000}
            ]
            const chart = new G2.Chart({
                container: id,
                forceFit: true,
                height: 300
            })

            chart.source(data)

            chart.interval().position('genre*sold').color('genre')

            chart.render()

            this.chart = chart
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homeindex {
  min-height: 100%;
  background: #f0f2f5;
  .header {
    padding: 16px 0 0 16px;
    height: 50px;
    font-size: 24px;
    background: #fff;
    box-shadow: 1px 1px 1px #f2f2f2;
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
      border: 1px solid gray;
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
 }
 }
}
</style>