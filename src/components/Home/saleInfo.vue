<template>
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
            <Row>
              <Col span="12" style='border-right:1px solid #999;border-bottom:1px solid #999;'>
              <div>
                <p class="name"><span></span><span class="title">基础信息</span></p>
                <Form ref='formValidate' :model="formValidate" :rules="ruleValidate" :label-width="80" class='form-content'>
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
                </Form>
              </div>
              <div>
                <p class="name"><span></span><span class="title">附加信息</span></p>
                <Form ref='formValidate' :label-width="80" class='form-content'>
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
                </Form>
              </div>

              </Col>
              <Col span="12" style='padding-bottom:329px;border-bottom:1px solid #999;'>
              <div>
                <p class="name"><span></span><span class="title">首要联系人</span></p>
                <Form ref='formValidate' :model="formValidate" :rules="ruleValidate" :label-width="120" class='form-content'>
                  <FormItem label="联系人姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="尊称" prop="indeed">
                     <RadioGroup v-model="info">
                      <Radio label="unknow">未知</Radio>
                      <Radio label="man">先生</Radio>
                      <Radio label="woman">女士</Radio>
                    </RadioGroup>
                  </FormItem>
                  <FormItem label="角色" prop="assistant">
                    <Select v-model="formValidate.industry" placeholder="选择行业" style="width:400px">
                      <Option value="金融">选择行业</Option>
                      <Option value="电力">选择行业</Option>
                      <Option value="水利">选择行业</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="生日" prop="industry">
                     <DatePicker type="date" placeholder="Select date" style="width: 400px"></DatePicker>
                  </FormItem>
                  <FormItem label="部门职务" prop="type">
                     <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="手机号码" prop="status">
                    <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="固定电话" prop="star">
                    <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="传真号码" prop="star">
                    <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="电子邮箱：" prop="star">
                    <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="微信账号" prop="star">
                    <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="QQ号码" prop="star">
                    <Input v-model="formValidate.phone" placeholder="Enter your 手机号码" style="width:400px"></Input>
                  </FormItem>
                  <FormItem label="所在地区" prop="star">
                    <Select v-model="formValidate.industry" placeholder="选择地区" style="width:400px">
                      <Option value="金融">选择行业</Option>
                      <Option value="电力">选择行业</Option>
                      <Option value="水利">选择行业</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="备注信息" prop="from">
                    <Input type="textarea" style="width:400px" :autosize="{minRows: 6}" placeholder="Enter something..."></Input>
                  </FormItem>
                </Form>
              </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form class='form-content'>
                   <div class="buttons">
                      <Button type='primary' size='large'  @click="handleSubmit('formValidate')"><Icon type="ios-checkmark-circle" />创建客户</Button>
                      <Button type='primary' size='large'  @click="handleSubmit('formValidate')"><Icon type="ios-checkmark-circle" />保存后继续创建</Button>   
                      <Button size='large' @click="handleReset('formValidate')"><Icon type="md-refresh" />重置</Button>
                   </div>
              </Form>
              </Col>
            </Row>
          </div>
          
        </Card>
      </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
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