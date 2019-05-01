<template>
    <div id="app">
        <article class="clock">
            <div class="outer-border">
                <div class="inner-border">
                    <div class="panel">
                        <div  v-for="(dot, index) in dots" 
                            :class="{
                                dot: index % 5 !== 0,
                                line: index % 5 === 0,
                                dotsOrLine: true
                            }"
                            :style='{
                                transform: `translateX(-50%) rotate(${index * 6}deg)`
                            }'
                            :key="index"></div>
                            <div class="number" v-for="(number, index) in numbers" :key="'number' + index"
                                    :style='{
                                        transform: `translateX(-50%) rotate(${30 * (index + 1)}deg)`,
                                    }'>
                                <div :class="{numberSixRotate: index === 5}">{{number}}</div>
                            </div>
                    </div>
                    <div class="pointer-wrapper">
                        <div class="rotateCenter">
                            <div class="heart"></div>
                        </div>
                        <div class="pointer">
                            <div class="hour" 
                            :style='{
                                transform: `translateX(-50%) rotate(${hourAngle + "deg"})`
                            }'></div>
                            <div class="minute" 
                            :style='{
                                transform: `translateX(-50%) rotate(${minuteAngle + "deg"})`
                            }'></div>
                            <div class="second" 
                            :style='{
                                transform: `translateX(-50%) rotate(${secondAngle + "deg"})`
                            }'>
                                <div class="head"></div>
                                <div class="body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<style lang="less" src='./clock.less'></style>
<script src='./clock.js'></script>

