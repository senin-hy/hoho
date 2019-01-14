<template>
  <view>
    <picker @change="bindPickerChange" :value="index" :range="array">
      <view class="picker">
        当前选择：{{array[index]}}
      </view>
    </picker>
	<view @click="bindThis" data-id="0">{{id}}</view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			id: '',
			index: 0,
			array: ['A', 'B', 'C']
		};
	},
	methods: {
		bindPickerChange(e) {
			console.log(e);
		},
		bindThis(e) {
			console.log(e);
		}
	},
	onLoad(option) {
		console.log(option);
		this.id = option.id;
	}
}; 
</script>
