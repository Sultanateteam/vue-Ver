<template>
    <div>
        <img src="../../assets/arrow-circle/arrow-circle-down.svg" width="20" height="20" alt="">
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
div{
display: flex;
margin: 80px 20px;
}

div::after{
    content: '';
    height: 1px;
    margin: 0 0 0 20px;
    width: 100%;
    border: .5px solid white;
    opacity: .5;
    align-self: center;
}
div::before{
    margin: 0 20px 0 0;
    content: '';
    align-self: center;
    height: 1px;
    width: 100%;
    border: .5px solid white;
    opacity: .5;
}

img{
    cursor: pointer;
}
</style>
