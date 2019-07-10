<template>
<div class="newclue">
    <div class="headwrapper">
       <homeHeader :name=name></homeHeader>
    </div>
    <div class="content">
      <div style="background:#eee;padding:  20px 220px">
        <Card :bordered="false">
          <p slot="title" class='title'>
            <Icon type="logo-buffer" size='24' />
            添加线索
          </p>
          <span class='icon' slot="extra">
            <span style="color:red">*</span>为必填项
          </span>
    <div class="edit-content">
        <Form  ref='formValidate'  :model="formValidate" :rules="ruleValidate" :label-width="120">
          <FormItem label="客户名称" prop="name" >
            <Input  placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="联系人姓名" prop="type" >
            <Input  placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="尊称" prop="status">
            <RadioGroup v-model="formValidate.type">
              <Radio label="unknown">未知</Radio>
              <Radio label="man">先生</Radio>
              <Radio label="woman">女士</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="角色" prop="from">
            <Select v-model="formValidate.from" placeholder="倒闭" style="width:400px">
              <Option value="破产">破产</Option>
              <Option value="倒闭">倒闭</Option>
              <Option value="倒闭">存续</Option>
            </Select>
          </FormItem>
          <FormItem label="归属人员" prop="owner">
            <Select v-model="formValidate.from" placeholder="赵小刚" style="width:400px">
              <Option value="赵小刚">赵小刚</Option>
              <Option value="赵小刚">赵小刚</Option>
              <Option value="赵小刚">赵小刚</Option>
            </Select>
          </FormItem>
          <FormItem label="所在地区">
            <Select v-model="formValidate.city" placeholder="上海" style="width:400px">
              <Option value="上海">上海</Option>
              <Option value="上海">上海</Option>
              <Option value="上海">上海</Option>
            </Select>
          </FormItem>
        </Form>
    </div>
        </Card>
      </div>
    </div>
</div>
</template>
<script>
import homeHeader from './homeHeader'
export default {
     name: 'newclue',
     components: {
        homeHeader
     },
     data () {
         return {
             name: '新建线索',
        formValidate: {
          name: '',
          type: '',
          star: '',
          status: '',
          from: '',
          owner: '',
        },
        ruleValidate: {
          name: [{
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }],
          type: [{
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur'
          }],
          star: [{
            required: true,
            message: 'Please select the city',
            trigger: 'change'
          }],
          status: [{
            required: true,
            message: 'Please select gender',
            trigger: 'change'
          }],
          from: [{
            required: false,
            message: 'Choose at least one hobby',
            trigger: 'change'
          }],
          owner: [{
            required: true,
            message: 'Please select the date',
            trigger: 'change'
          }]
        }
         }
     }
}
</script>
<style lang="less">
  .newclue {
    background: #f0f2f5;
    .headerwrapper {
      padding: 16px 0 0 16px;
      height: 50px;
      font-size: 24px;
      background: #fff;
    }
    .content {
        margin-top: 60px;
        .edit-content {
            margin: 20px 300px;
        }
    }
}
</style>
