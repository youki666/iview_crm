<template>
   <div class="bussinessbar">
       <div class="sidebar">
            <Menu :theme="theme3" active-name="1">
                <MenuGroup title="商机管理">
                    <MenuItem name="1">
                        商业管理
                    </MenuItem>
                    <MenuItem name="2">
                        商业管理
                    </MenuItem>
                    <MenuItem name="3">
                        商业管理3
                    </MenuItem>
                    <MenuItem name="4">
                        商业管理4
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
    name: 'bussinessbar',
    data () {
        return {
            theme3: 'primary',
        }
    }
}
</script>
<style lang="less" scoped>
.bussinessbar {
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