<template lang="html">
        <div class="col-md-6 offset-md-2">
            <div class="">
                <h1 style="text-align:center">payment done - order no : {{$route.query.order_id}}</h1>
            </div>
        </div>
</template>

<script>
export default {

    mounted: function () {
        localStorage.setItem('cartItems', '');
        if(process.client){
            let theCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
            let count = 0
            theCartItems.forEach((item, i) => {
                count = count + item.quantity
            });
            this.$store.commit('setTotalProduct',count)
        }
    }

}
</script>

<style lang="css" scoped >

</style>
