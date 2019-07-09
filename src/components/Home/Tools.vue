<template>
    <div class="tools">
        <Card :bordered="false">
          <p slot="title" class='title'>
            <span v-for="(item, index) in list" :class="{active:Index==index}" :key="index"
              @click="selected(index)">{{item}}</span>
          </p>
          <div class="tools">
            <Input placeholder="搜索关键字" size="large" style="width: 180px" />
            
              <Select size="large" style="width:180px;margin-left:10px;" v-for="item in select" :key='item.id' :placeholder="item.placeholder">
                <Option v-for='i in item.options' :key="i.id " :value="i"></Option>
              </Select>
            
              <DatePicker size="large" type="date" placeholder="最后跟进" style="width: 180px;margin-left:10px;">
              </DatePicker>
            
            <Button type="primary" style="width: 100px;margin-left:10px;font-size:16px;text-align:center">
                <Icon type="ios-search" size='24' />查询</Button>
            <Button type="default" style="width: 80px;margin-left:10px;font-size:16px;text-align:center">
                <Icon type="ios-refresh" size='24' />重置</Button>
            <Button type="text"
                style="width: 120px;margin-left:10px;font-size:16px;text-align:center;color:#3293fe">
                <Icon type="ios-funnel" size='24' />高级筛选</Button>
          </div>
        </Card>
    </div>
</template>
<script>
export default {
    name: 'tools',
    props: {
        'list': Array,
        'select': Array
    },
    data () {
        return {
            Index: 0
        }
    },
    methods :{
        selected(index) {
        this.Index = index
      },
    }
}
</script>
<style lang="less">
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
</style>

