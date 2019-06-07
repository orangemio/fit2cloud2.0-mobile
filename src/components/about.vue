<template>
    <div>
        <group>
        <p>About</p>
        </group>       
        <group>
        <p>User:</p>
        <p>Display Name:</p>
        <p>Email::</p>
        <p>Workspace Name:</p>

        </group>
    </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
