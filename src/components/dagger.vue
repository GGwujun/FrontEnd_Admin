<template>
    <div class="dagger" v-if="this.$store.state.showDagger">
        <h1>Dagger</h1>
    </div>
</template>

<script>

</script>

<style scoped>
.dagger {
    margin: 0 auto;
    width: 50%;
    height: 100px;
    background-color: red;
}
</style>