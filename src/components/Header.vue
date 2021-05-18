<template>

    <div class="backgrnd">
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-2 logo">
                    <img class="resize" :src="require('@/assets/circle-logo.png')">
                </div>

                <div class="col-3 MyGrid text-bottom">
                    <p class="MyGridText">My Grid</p>
                    <div class="dropdown-content">
                        <div class="row">

                            <div class="col-2" />

                            <div class="col-4">
                                <p class="MyGridText">My Grid</p>
                            </div>

                            <div class="col-4">
                                <p class="MyGridText">Task Manager</p>
                            </div>

                            <div class="col-2" />
                            
                        </div>
                    </div>
                </div>

                <div class="col-3 About">
                    <p class="AboutText">About</p>
                    <div class="dropdown-content">
                        <div class="row">

                            <div class="col-2" />

                            <div class="col-4">
                                <p class="AboutText">Pests and Parasite Treatment</p>
                            </div>

                            <div class="col-4">
                                <p class="AboutText">News regarding Apiculture</p>
                            </div>

                            <div class="col-2" />
                            
                        </div>
                    </div>
                </div>

                <div class="col-3 Introduction">
                    <p class="IntroductionText">Introduction</p>
                    <div class="dropdown-content">
                        <div class="row">

                            <div class="col-2" />

                            <div class="col-4">
                                <p class="IntroductionText">Apiculture through the ages</p>
                            </div>

                            <div class="col-4">
                                <p class="IntroductionText">Getting started with Beekeeping</p>
                            </div>

                            <div class="col-2" />
                            
                        </div>
                    </div>
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
    text-align: center;
    padding-bottom: 1%;
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

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
    border: 1px solid #2d2d2d;
    right: 0;
    /* margin-top: 20px; */
    display: none;
    position: absolute;
    height: 150px;
    width: 300px;
    border: 2px solid  #2d2d2d;
    border-radius: 15px;
    background-color: white;
    /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
    z-index: 2;
}
.dropdown:hover .dropdown-content {
  display: block;
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
        openMyGridDpd() {
            // method used to show more options related to MyGrid

        },
        openAboutDpd() {
            // method used to show more options related to About

        },
        openIntroDpd() {
            // method used to show more options related to Introduction

        },
    },
}
</script>