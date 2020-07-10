<template>
  <div>
    <Modal v-model="opened" >
      <div slot="header">Vue</div>
      <div >这是使用vue调用的弹出框</div>
      <div slot="footer">
        <Button class="h-btn" @click="opened=false">取消</Button>
      </div>
    </Modal>
    <Button class="h-btn" @click="opened=true">打开弹窗</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class App extends Vue {
  private opened = false
  private mounted() {
    // console.log(this)
  }
}
</script>
