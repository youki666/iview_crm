<template>
    <div class="right">
        <Checkbox style="width: 80px;">跟进模式</Checkbox>
          <Poptip word-wrap trigger="hover" content="当对列表客户写跟进时,会自动将刚刚写过跟进的客户排到最后。">
            <Button>
              <Icon type="md-help-circle" /></Button>
          </Poptip>

          <Button type="default"
              style="width: 80px;margin-left:10px;font-size:16px;text-align:center;">
              <Icon type="ios-funnel" size='18' />排序</Button>
          <Button type="default"
              style="width: 80px;margin-left:10px;font-size:16px;text-align:center;">
              <Icon type="ios-add" size='18' />列表</Button>
    </div>
</template>