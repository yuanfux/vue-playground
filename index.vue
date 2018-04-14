<template>
    <div>
        <custom-component v-for="item in list" :key="`${item}`" :data="item">
        </custom-component>
    </div>
</template>

<script>
import CustomComponent from './component.vue';

export default {
    name: "App",
    components: {
        CustomComponent
    },
    data() {
        return {
            msg: "hello wrold",
            list: [1,2,3,4,5,6,7,8,9]
        }
    },
    created() {
        setTimeout(
            () => {
                this.list = this.list.slice(1,5);
            }, 2000
        )
    },
    computed: {

    },
    methods: {
        tryes() {
            const arr = [1, 2, 3, 4];
            console.log([...arr, 5 , 6]);
        }
    }
}
</script>

<style>
</style>