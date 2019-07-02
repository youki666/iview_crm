<template>
    <div class='header'>
        <Menu mode="horizontal" :theme="theme1" :active-name="initialActiveMenu" ref='menu' @on-select="getName">
            <MenuItem name="1" class='title'>
                <Icon  type="logo-wordpress" size='56'/>
                客户关系管理系统
            </MenuItem>
             <MenuItem name="home" to='/home'>
                <Icon type="md-menu" size='24'/>
                菜单
            </MenuItem>
             <MenuItem name="customer" to='/customer'>
                <Icon type="ios-people" size='24'/>
                客户
            </MenuItem>
            <MenuItem name="bussiness" to='/bussiness'>
                <Icon type="md-copy" size='24'/>
                商机
            </MenuItem>
            <MenuItem name="order" to='/order'>
                <Icon type="ios-people" size='24'/>
                订单
            </MenuItem>
        </Menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'primary',
            initialActiveMenu: 'active'
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.initialActiveMenu = this.$route.path.slice(1);
            this.$refs.menu.updateActiveName()
        })
    },
    methods :{
        getName(name){
            console.log(name)
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    .title {
       width: 260px;
       font-size: 18px;
       font-weight: bold;
    }
    a:not(:first-child):hover {
       background: #3f76b2;
       font-weight: bold;
    }
    .ivu-menu-item-active {
        background: #3f76b2;
    }
}
</style>
