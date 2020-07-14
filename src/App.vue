<template>
  <div id="app">
    <p>Heyui Dialog</p>
    <HeyuiDialog></HeyuiDialog>
    <p>ElementUI Dialog</p>
    <ElementuiDialog></ElementuiDialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeyuiDialog from '@/components/HeyuiDialog.vue';
import ElementuiDialog from '@/components/ElementuiDialog.vue'

@Component({
  components: {
    HeyuiDialog,
    ElementuiDialog
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
