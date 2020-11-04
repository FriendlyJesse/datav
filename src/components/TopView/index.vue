<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales/index.vue'
import TotalOrders from '../TotalOrders/index.vue'
import TotalUsers from '../TotalUsers/index.vue'
import TodayUsers from '../TodayUsers/index.vue'
export default {
  components: {
    TotalSales,
    TotalOrders,
    TotalUsers,
    TodayUsers
  }
}
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>
