<template>
    <div class="orderbar">
        <div class="sidebar">
            <Menu :theme="theme3" active-name="1">
                <MenuGroup title="订单管理">
                    <MenuItem name="1">
                        订单管理
                    </MenuItem>
                    <MenuItem name="2">
                        订单管理2
                    </MenuItem>
                    <MenuItem name="3">
                        订单管理3
                    </MenuItem>
                    <MenuItem name="4">
                        订单管理4
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
    name: 'orderbar',
    data () {
        return {
            theme3: 'primary',
        }
    }
}
</script>
<style lang="less" scoped>
.orderbar {
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