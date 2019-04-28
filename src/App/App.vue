<template>
  <div id="app">
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
        <div class="today">2017-9-14</div>
        <div class="returnToToday" @click="test($event)">今天</div>
      </div>
    </header>

    <!-----------------------Main------------------------>
    <main>
        <div class="row weekdays">
          <span>日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
        </div>
        <div class="row day">
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
        <div class="row day">
          <span>2</span>
          <span>2</span>
          <span>2</span>
          <span>2</span>
          <span>2</span>
          <span>2</span>
          <span>2</span>
        </div>
        <div class="row day">
          <span>3</span>
          <span>3</span>
          <span>3</span>
          <span>3</span>
          <span>3</span>
          <span>3</span>
          <span>3</span>
        </div>
        <div class="row day">
          <span>4</span>
          <span>4</span>
          <span>4</span>
          <span>4</span>
          <span>4</span>
          <span>4</span>
          <span>4</span>
        </div>
        <div class="row day">
          <span>5</span>
          <span>5</span>
          <span>5</span>
          <span>5</span>
          <span>5</span>
          <span>5</span>
          <span>5</span>
        </div>
        <div class="foldMarker">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shang"></use>
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
        <div class="events">
        <div class="event"></div>
        <div class="event"></div>
        <div class="event"></div>
        <div class="event"></div>
        <div class="event"></div>
        <div class="event"></div>
        <div class="event"></div>
        <div class="event"></div>
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
