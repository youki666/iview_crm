<template>
    <div class="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <Icon type="logo-buffer" size="24" />
        </BreadcrumbItem>
        <BreadcrumbItem>一级分类</BreadcrumbItem>
        <BreadcrumbItem>{{name}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
</template>
<script>
export default {
  name: 'homeheader',
  props: {
    'name': String
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="less">
    .header {
      position: absolute;
      top: 0;
      left: 0;
      padding: 16px 0 0 16px;
      width: 100%;
      height: 50px;
      font-size: 24px;
      background: #fff;
      margin-bottom: 140px;
    }
</style>
