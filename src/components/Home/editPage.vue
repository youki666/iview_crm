<template>
  <div class="editPage">
    <div>
      <span class='title'>可批量编辑字段</span>
      <span>
        <RadioGroup>
          <Radio label="apple">

            <span>全选</span>
          </Radio>
          <Radio label="android">

            <span>反选</span>
          </Radio>
        </RadioGroup>
      </span>
    </div>
    <div class='buttons'>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='primary' style="margin:5px">所属行业</Button>
      <Button type='default' style="margin:5px">所属行业</Button>
      <Button type='default' style="margin:5px">所属行业</Button>
      <Button type='default' style="margin:5px">所属行业</Button>
      <Button type='default' style="margin:5px">所属行业</Button>
    </div>
    <div class='edit'>
      <p class='title'>字段编辑区域</p>
      <div class="edit-content">
        <Form  ref='formValidate'  :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="所属行业" prop="name">
            <Select v-model="formValidate.name" placeholder="选择行业" style="width:400px">
              <Option value="金融">选择行业</Option>
              <Option value="电力">选择行业</Option>
              <Option value="水利">选择行业</Option>
            </Select>
          </FormItem>
          <FormItem label="客户类型" prop="type">
            <RadioGroup v-model="formValidate.type">
              <Radio label="industry">企业客户</Radio>
              <Radio label="person">个人客户</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="客户状态" prop="status">
            <Select v-model="formValidate.status" placeholder="倒闭" style="width:400px">
              <Option value="破产">破产</Option>
              <Option value="倒闭">倒闭</Option>
              <Option value="倒闭">存续</Option>
            </Select>
          </FormItem>
          <FormItem label="客户星级" prop="star">
            <Rate disabled v-model="valueDisabled" />
          </FormItem>
          <FormItem label="客户来源" prop="from">
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
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        valueDisabled: 4.5,
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
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      handleReset(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style lang="less">
.editPage {
  height: 400px;
  overflow: scroll;

  .title {
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    margin-right: 20px;
  }

  .buttons {
    margin-top: 20px;
  }

  .edit {
    margin-top: 16px;

    .edit-content {
      margin-top: 16px;

      Select {
        width: 120px;
      }
    }
  }
}

</style>
