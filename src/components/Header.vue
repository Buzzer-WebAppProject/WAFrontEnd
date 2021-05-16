<template>

    <div class="backgrnd">
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-4 left">
                    Lijeva strana headera
                </div>

                <div class="col-4 middle">
                    Sredina headera
                </div>

                <div class="col-4 right">
                    Desna strana headera
                </div>

            </div>
        </div>

    </div>

</template>

<style scoped>

.left{
    background-color: crimson;
}
.middle {
    background-color: chocolate;
}
.right {
    background-color: blueviolet;
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