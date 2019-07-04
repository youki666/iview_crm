<template>
    <div class="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <Icon type="logo-buffer" size="24" />
        </BreadcrumbItem>
        <BreadcrumbItem>一级分类</BreadcrumbItem>
        <BreadcrumbItem>客户列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
</template>

<style scoped lang="less">
    .header {
      position: fixed;
      top: 0;
      left: 0;
      padding: 16px 0 0 16px;
      height: 50px;
      font-size: 24px;
      background: #fff;
    }
</style>
