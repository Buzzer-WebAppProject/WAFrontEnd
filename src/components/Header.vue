<template>

    <div class="backgrnd">
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-2 logo">
                    <img class="resize" :src="require('@/assets/circle-logo.png')">
                </div>

                <div class="col-3 MyGrid text-bottom">
                    <p class="MyGridText"> MyGrid</p>                       
                </div>

                <div class="col-3 About">
                    Desna strana headera
                </div>

                <div class="col-3 Introduction">
                    Desna strana headera
                </div>

                <div class="col-1 empty" />

            </div>
        </div>

    </div>

</template>

<style scoped>
.backgrnd {
    background-color: gold;
}
.logo {
    border: 1px solid #2d2d2d;
    padding-top: 1%;
}

.resize {
    padding-top: 0;
    height: 70px;
    width: 70px;
}

.MyGrid {
    border: 1px solid #2d2d2d;
}
.MyGridText {
    position: relative;
    bottom: auto;
}
.About {
    border: 1px solid #2d2d2d;
}
.Introduction{
    border: 1px solid #2d2d2d;
}
.empty {
    border: 1px solid #2d2d2d;
}

</style>

<script>
export default {
    name: 'Header',
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>