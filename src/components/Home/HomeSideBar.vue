<template>
    <div class="homesidebar">
        <div class="sidebar">
                <Menu :theme="theme3" active-name="1" ref='menu'>
                    <MenuGroup title="快捷菜单" >
                        <MenuItem name="1" to='/home/index'>
                            系统首页
                        </MenuItem>
                        <MenuItem name="2" to='/home/customerList'>
                            客户列表
                        </MenuItem>
                        <MenuItem name="3" to='/home/manage'>
                            客户管理
                        </MenuItem>
                        <MenuItem name="4" to='/home/saleinfo'>
                            销售线索
                        </MenuItem>
                    </MenuGroup>
                </Menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
  </div>
</template>
<script>
export default {
    name: 'homesidebar',
    data () {
        return {
            theme3: 'primary',
        }
    }
}
</script>
<style lang="less" scoped>
.homesidebar {
    display: flex;
    .sidebar {
      text-align: center;
      .ivu-menu-item-group-title {
          font-size: 36px;
      }
    }
    .content {
        flex: 1;
    }
}
</style>
