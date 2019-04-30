<template>
  <div id="app" @touchstart='onAppTouchStart($event)' @touchend='onTouchEnd($event)'>
    <!------------------------Header------------------------->
    <header>
      <div class="statusBar">
        <span class="signal">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinhao"></use>
          </svg>
        </span>
        <span class="brand">中国移动</span>
        <span class="wifi">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wifi"></use>
          </svg>
        </span>
        <span class="blank"></span>
        <span class="power">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-power-electricity"></use>
          </svg>
        </span>
      </div>
      <div class="subStatus">
        <!-- <div class="today">2017-9-14</div> -->
        <div class="today">{{formatSelectedDay}}</div>
        <div class="returnToToday" @click="dateReset($event)">今天</div>
      </div>
    </header>

    <!-----------------------Main------------------------>
    <main @touchstart.stop="onMainTouchStart($event)" @touchmove.stop='' >
      <div class="row weekdays">
        <span>日</span>
        <span>一</span>
        <span>二</span>
        <span>三</span>
        <span>四</span>
        <span>五</span>
        <span>六</span>
      </div>
      <div class="row day" v-for="(row, index) in days" :key="index">
        <span v-for="item in row" :key="item" @click="onDayClick($event)">{{item}}</span>
      </div>

        <div @click.stop="changeMode" class="foldMarker">
          <div >
            <svg class="icon" aria-hidden="true" v-if="viewMode === 'month'">
              <use xlink:href="#icon-shang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-if="viewMode === 'week'">
              <use xlink:href="#icon-xia"></use>
            </svg>
          </div>
        </div>
    </main>
    <section class="eventArea">
      <div class="tabs">
        <span class="selected">已设置提醒</span>
        <span>创建时间</span>
        <span>最后发言时间</span>
      </div>
      <div class="events-wrapper">
        <div class="events" :style="styleObject">
          <article class="event" v-for="(event, index) in events" :key="index">
            <main>
              <header>{{event.title}}</header>
              <div class="content">{{event.content}}</div>
              <div class="myrole">{{event.myrole}}</div>
            </main>
            <div class="appendix">
              <div class="time">{{event.time}}</div>
              <div class="menu">...</div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-----------------------Footer------------------------>
    <footer class="menu">
      <span class="power">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lightning"></use>
        </svg>
        <div class="text">工作</div>
      </span>
      <span class="power">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiaose"></use>
        </svg>
        <div class="text">角色</div>
      </span>
      <span class="power">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yuanquan"></use>
        </svg>
        <div class="text">事项圈</div>
      </span>
      <span class="power">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tongshi"></use>
        </svg>
        <div class="text">同事</div>
      </span>
      <span class="power">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rili"></use>
        </svg>
        <div class="text selected">日历</div>
      </span>
    </footer>
  </div>
</template>



<script src='./App.js'></script>
<style lang="less" src='./App.less'></style>
<style lang="less" src='../assets/reset.less'></style>
