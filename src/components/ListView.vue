<template>
    <div class="container mt-4">
        <h5>{{ blog.title }}</h5>
        <p>블로그 글 날짜</p>
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