<template>
  <div class="newcustomer">
    <div class="headerwrapper">
       <homeHeader :name=name></homeHeader>
    </div>
    <div class="content">
      <div style="background:#eee;padding:  20px 220px">
        <Card :bordered="false">
          <p slot="title" class='title'>
            <Icon type="logo-buffer" size='24' />
            创建客户
          </p>
          <span class='icon' slot="extra">
            <span style="color:red">*</span>为必填项
          </span>
          <div class="form">
              <Form ref='formValidate' :model="formValidate" :rules="ruleValidate" :label-width="80">
                <Row>
                  <Col span="12" style='height:1218px;border-right:1px solid #999;border-bottom:1px solid #999;'>
                    <div>
                        <p class="name"><span></span><span class="title">基础信息</span></p>
                         <div class="inner">
                          <FormItem label="客户名称" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px"></Input>
                          </FormItem>
                          <FormItem label="助记名称" prop="assistant">
                            <Input v-model="formValidate.assistant" placeholder="Enter your assistant name"
                              style="width:400px"></Input>
                          </FormItem>
                          <FormItem label="所属行业" prop="industry">
                            <Select v-model="formValidate.industry" placeholder="选择行业" style="width:400px">
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
                            <Rate v-model="valueDisabled" />
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
                         </div>
                         <div>
                          <p class="name"><span></span><span class="title">附加信息</span></p>
                            <div class="inner">
                                <FormItem label="客户名称" prop="name">
                                  <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px"></Input>
                                </FormItem>
                                <FormItem label="助记名称" prop="assistant">
                                  <Input v-model="formValidate.assistant" placeholder="Enter your assistant name"
                                    style="width:400px"></Input>
                                </FormItem>
                                <FormItem label="所属行业" prop="industry">
                                  <Select v-model="formValidate.industry" placeholder="选择行业" style="width:400px">
                                    <Option value="金融">选择行业</Option>
                                    <Option value="电力">选择行业</Option>
                                    <Option value="水利">选择行业</Option>
                                  </Select>
                                </FormItem>
                                <FormItem label="备注信息" prop="type">
                                  <Input type="textarea" style="width:400px" :autosize="{minRows: 6}" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem  prop="check">
                                  <Checkbox v-model="single">创建下次跟进任务</Checkbox>
                                </FormItem>
                                <FormItem label="跟进时间" prop="status">
                                  <Select v-model="formValidate.status" placeholder="跟进时间" style="width:400px">
                                    <Option value="破产">破产</Option>
                                    <Option value="倒闭">倒闭</Option>
                                    <Option value="倒闭">存续</Option>
                                  </Select>
                                </FormItem>
                                <FormItem label="跟进内容" prop="from">
                                  <Select v-model="formValidate.from" placeholder="跟进内容" style="width:400px">
                                    <Option value="破产">破产</Option>
                                    <Option value="倒闭">倒闭</Option>
                                    <Option value="倒闭">存续</Option>
                                  </Select>
                                </FormItem>
                                <FormItem label="跟进人员" prop="owner">
                                  <Select v-model="formValidate.from" placeholder="赵小刚" style="width:400px">
                                    <Option value="赵小刚">赵小刚</Option>
                                    <Option value="赵小刚">赵小刚</Option>
                                    <Option value="赵小刚">赵小刚</Option>
                                  </Select>
                                </FormItem>
                                <FormItem label="任务提醒" prop="owner">
                                  <Select v-model="formValidate.from" placeholder="准时提醒" style="width:400px">
                                    <Option value="赵小刚">赵小刚</Option>
                                    <Option value="赵小刚">赵小刚</Option>
                                    <Option value="赵小刚">赵小刚</Option>
                                  </Select>
                                </FormItem>
                                <FormItem  prop="checks">
                                  <Checkbox v-model="single2">系统消息</Checkbox>
                                  <Checkbox v-model="single3">邮件通知</Checkbox>
                                  <Checkbox v-model="single4">短信通知</Checkbox>
                                </FormItem> 
                            </div>  
                     </div>
                    </div>
                  </Col>
                  <Col span="12" style='height:1218px;border-bottom:1px solid #999;'>
                       <div>
                         <p class="name"><span></span><span class="title">首要联系人</span></p>
                           <div class="inner">
                                <FormItem label="联系人:" prop="name">
                                <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px"></Input>
                                </FormItem>
                              <FormItem label="尊称:" prop="indeed">
                                <RadioGroup v-model="info">
                                  <Radio label="unknow">未知</Radio>
                                  <Radio label="man">先生</Radio>
                                  <Radio label="woman">女士</Radio>
                                </RadioGroup>
                              </FormItem>
                              <FormItem label="角色;" prop="assistant">
                                <Select v-model="formValidate.industry" placeholder="选择行业" style="width:400px">
                                  <Option value="金融">选择行业</Option>
                                  <Option value="电力">选择行业</Option>
                                  <Option value="水利">选择行业</Option>
                                </Select>
                              </FormItem>
                              <FormItem label="生日:" prop="industry">
                                <DatePicker type="date" placeholder="Select date" style="width: 400px"></DatePicker>
                              </FormItem>
                              <FormItem label="部门职务:" prop="type">
                                <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="手机号码:" prop="status">
                                <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="固定电话:" prop="star">
                                <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="传真号码:" prop="star">
                                <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="电子邮箱:" prop="star">
                                <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="微信账号:" prop="star">
                                <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="QQ号码:" prop="star">
                                <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                              </FormItem>
                              <FormItem label="所在地区:" prop="star">
                                <Select v-model="formValidate.industry" placeholder="选择地区" style="width:400px">
                                  <Option value="金融">选择行业</Option>
                                  <Option value="电力">选择行业</Option>
                                  <Option value="水利">选择行业</Option>
                                </Select>
                              </FormItem>
                              <FormItem label="备注信息:" prop="from">
                                <Input type="textarea" style="width:400px" :autosize="{minRows: 6}" placeholder="Enter something..." >
                                   
                                </Input>
                              </FormItem>
                              </div>
                       </div>
                  </Col>
                </Row>
              <Row>
                 <Col>
                      <div class="buttons">
                          <Button style="width:140px" type='primary' size='large'  @click="handleSubmit('formValidate')"><Icon type="ios-checkmark-circle" />创建客户</Button>
                          <Button type='primary' size='large'  @click="handleSubmit('formValidate')"><Icon type="ios-checkmark-circle" />保存后继续创建</Button>   
                          <Button  style="width:140px;color:#0079fe;border: 1px solid #0079fe " size='large' @click="handleReset('formValidate')"><Icon type="md-refresh" />重置</Button>
                      </div>
                  </Col>
            </Row>
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
    name: 'newc',
    components: {
      homeHeader
    },
    data() {
      return {
        name: '创建客户',
        valueDisabled: 4.5,
        single: true,
        single2: true,
        single3: '',
        single4: '',
        info: 'unknow',
        formValidate: {
          name: '',
          assistant: '',
          industry: '',
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
          industry: [{
            required: true,
            message: 'The industry name cannot be empty',
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
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .newcustomer {
    background: #f0f2f5;

    .headerwrapper {
      padding: 16px 0 0 16px;
      height: 50px;
      font-size: 24px;
      background: #fff;

    }

    .content {
      .form {
        .name {
          padding-left: 25px;
          height: 25px;
          line-height: 25px;
          position: relative;
          span:first-child {
            display: inline-block;
            width: 5px;
            height: 25px;
            background: #0079fe;
          }
          .title {
            position: absolute;
            top: 0px;
            left: 40px;
            display: inline-block;
            font-weight: bold;
            font-size: 16px;
          }
        }
        .inner {
            padding: 10px 30px;
        }
        .buttons {
          margin-top: 20px;
          margin-left: 40px;
          Button {
            margin: 0 20px;
          }
        }
      }
    }
  }

</style>
