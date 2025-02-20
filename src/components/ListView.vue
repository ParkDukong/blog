<template>
    <div class="container mt-4">
        <h5>{{ blog[0].title }}</h5>
        <p>{{ blog[0].content }}</p>
    </div>
</template>

<script>
    export default {
        props : {
            blog : Array
        }
    }
</script>

<style>

</style>