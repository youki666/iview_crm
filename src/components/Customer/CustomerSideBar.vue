<template>
    <div class='customerbar'>
        <div class="sidebar">
            <Menu :theme="theme3" active-name="1">
                <MenuGroup title="客户管理">
                    <MenuItem name="1" to='/customer/index'>
                        客户列表
                    </MenuItem>
                    <MenuItem name="2" to='/customer/customerList'>
                        公海客户
                    </MenuItem>
                    <MenuItem name="3">
                        垃圾客户
                    </MenuItem>
                    <MenuItem name="4">
                        客户筛选
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
    name: 'customerbar',
    data () {
        return {
            theme3: 'primary',
        }
    }
}
</script>
<style lang="less" scoped>
.customerbar {
    display: flex;
    .sidebar {
        width: 240px;
    }
    .content {
        flex: 1;
        height: 666px;
        border: 1px solid gray;
    }
}
</style>