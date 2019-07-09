<template>
    <div class='header'>
        <Menu mode="horizontal" :theme="theme1"  ref='menu' @on-select="getName">
            <MenuItem name="1" class='title'>
                <Icon  type="logo-wordpress" size='56'/>
                客户关系管理系统
            </MenuItem>
             <router-link name="home" to='/home'>
                <Icon type="md-menu" size='24'/>
                菜单
            </router-link>
             <router-link name="customer" to='/customer'>
                <Icon type="ios-people" size='24'/>
                客户
            </router-link>
            <router-link name="bussiness" to='/bussiness'>
                <Icon type="md-copy" size='24'/>
                商机
            </router-link>
            <router-link name="order" to='/order'>
                <Icon type="ios-people" size='24'/>
                订单
            </router-link>
             <div class="right">
                 <a href="#">
                    <Dropdown>
                    <a href="javascript:void(0)">
                        <Icon type="md-contact" />
                        事项
                    <Badge :count="50" class='badge'>
                        
                    </Badge>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>修改资料</DropdownItem>
                        <DropdownItem>修改头像</DropdownItem>
                        <DropdownItem>修改密码</DropdownItem>
                        <DropdownItem>退出系统</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                 </a>
                 <a href="#">
                     <Icon type="ios-lock" size='24'/>
                    日程
                </a>
                 <a href="#">
                     <Icon type="ios-lock" size='24'/>
                    消息
                </a>
                 <a href="#">
                     <Icon type="ios-lock" size='24'/>
                    锁屏
                </a>
                <a href="#">
                        <Dropdown>
                    <a href="javascript:void(0)">
                        <Icon type="md-contact" />
                        Admin
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                            <DropdownItem>修改资料</DropdownItem>
                            <DropdownItem>修改头像</DropdownItem>
                            <DropdownItem>修改密码</DropdownItem>
                            <DropdownItem>退出系统</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </a>
            </div>
        </Menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'primary',
        }
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
    a {
        display: inline-block;
        width: 130px;
        height: 60px;
        text-align: center;
        background: #2d8cf0;
        color: #fff;
    }
    a:not(:first-child):hover {
       background: #3f76b2;
       font-weight: bold;
    }
    .active {
        background: #3f76b2;
        
    }
    .right {
        float:right;
        a {
        display: inline-block;
        width: 130px;
        height: 60px;
        text-align: center;
        background: #2d8cf0;
        color: #fff;
        &:hover {
        background: #3f76b2;
        font-weight: bold;
        }
        }
        .badge {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
}
</style>
