<template>
  <div class="newcustomer">
       <div class="header">
          <Breadcrumb separator=">">
              <BreadcrumbItem ><Icon type="logo-buffer" size="24" /></BreadcrumbItem>
              <BreadcrumbItem >一级分类</BreadcrumbItem>
              <BreadcrumbItem >创建客户</BreadcrumbItem>
          </Breadcrumb>
       </div>
       <div class="content">
            <div  style="background:#eee;padding:  20px 220px">
                    <Card :bordered="false">
                        <p slot="title" class='title'>
                          <Icon type="logo-buffer" size='24'/>
                          创建客户
                        </p>
                      <span class='icon' slot="extra">
                          <span style="color:red">*</span>为必填项  
                      </span>
                    <div class="form">
                      
                    </div>
              </Card>
            </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'newc',
  components: {
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.newcustomer {
  background: #f0f2f5;
  .header {
    padding: 16px 0 0 16px;
    height: 50px;
    font-size: 24px;
    background: #fff;
    
  }
}
</style>