import datefns from 'date-fns'

export default {
    name: 'app',
    data(){
      return {
        styleObject: {
          height: undefined,
        },
        startPoint: {},
        endPoint: {},
        startArea: undefined,
        viewMode: 'month',
        // today: new Date(2018, 6, 1),
        today: undefined,
        selectedDay: undefined,
        events: [
          {
            title: '227市场',
            content: '定价依据和客户判定',
            myrole: '我的角色：经办人',
            time: '16: 24'
          },
          {
            title: '新软件',
            content: '成立体验小组，测试软件',
            myrole: '我的角色：交办人',
            time: '13: 34'
          },
          {
            title: '2-3-6手提项目',
            content: '2-3-6手提灭火器项目，10月需要提供给需求方',
            myrole: '我的角色：交办人',
            time: '09: 24'
          },
          {
            title: '消防资格考试',
            content: '考试纲要 考试时间 考试地点',
            myrole: '我的角色：经办人',
            time: '昨天'
          },
          {
            title: '总裁办招新',
            content: '招新人',
            myrole: '我的角色：经办人',
            time: '10-28'
          },
        ]
      }
    },
    components: {
      
    },
    // Computed---------------------------------------------------------
    computed: {
      formatSelectedDay(){
        let temp = this.selectedDay
        return temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate()
      },
      year(){
        return this.today.getFullYear()
      },
      month(){
        return this.today.getMonth()
      },
      date(){
        return this.today.getDate()
      },
      weekday(){
        return datefns.getDay(this.today)
      },
      days(){
        let selectedDay = this.selectedDay
        let daysInMonth = datefns.getDaysInMonth(selectedDay)
        let firstDayOfMonth = datefns.startOfMonth(selectedDay)
        let lastDayOfMonth = datefns.lastDayOfMonth(selectedDay)

        // 将本月所有日期，分为prefix, mid, suffix三部分，分别加入到 days 数组中。prefix和suffix中，
        // 空缺的部分，使用undefined填补
        let prefixLength = 7 - firstDayOfMonth.getDay()
        prefixLength = prefixLength === 7? 0: prefixLength
        let suffixLength = lastDayOfMonth.getDay() + 1
        suffixLength = suffixLength === 7? 0: suffixLength

        let midWeekNumber = (daysInMonth - prefixLength - suffixLength)/7
        let totalWeekNumber = midWeekNumber +(prefixLength===0? 0: 1) + (suffixLength===0? 0: 1)
        let midDayNumber = daysInMonth - prefixLength - suffixLength
        let days = []
        for (let i = 0; i < totalWeekNumber; i++) {
          days.push([])
        }
        for (let i = 0; i < prefixLength; i++) {
          days[0].push(i + 1)
        }

        for (let i = 0; i < midWeekNumber; i++) {
          for (let j = 0; j < 7; j++) {
            // 当prefix为0时，第一个数组会为空，中间部分的date会填充到下一个数组去，所以分类讨论一下。
            days[prefixLength === 0? i: i + 1].push(prefixLength + 7 * i + j + 1)
          }
        }
        for (let i = 0; i < suffixLength; i++) {
          days[totalWeekNumber - 1].push(prefixLength + midDayNumber + i + 1)
        }

        let unshiftNumber = 7 - days[0].length
        for (let i = 0; i < unshiftNumber; i++) {
          days[0].unshift(undefined)
        }
        let pushNumber = 7 - days[totalWeekNumber - 1].length
        for (let i = 0; i < pushNumber; i++) {
          days[totalWeekNumber - 1].push(undefined)
        }
        let location = 0
        for (const i in days) {
          for (const j in days[i]) {
            if (days[i][j] === this.selectedDay.getDate()) {
              location = i
            }
          }
        }
        console.log('前缀天数：', prefixLength, '|  后缀天数：', suffixLength, '|  中间天数/7：', midWeekNumber);
        console.log(days);
        let result = []
        if (this.viewMode === 'month') {
          return days
        }else if (this.viewMode === 'week') {
          result[0] = days[location]
          console.log(result);
          return result
        }
        // return days
      }
    },
    
    // Methods---------------------------------------------------------
    methods: {
      getHeight(el){ 
        let dom = document.querySelector(el)
        return parseInt(window.getComputedStyle(dom).height)
      },
      getEventDomHeight(){
        let app = document.querySelector('#app')
        let subHeight = 0
        // 获取除events部分的高度总和
        for (const child of app.children) {
          if (child.tagName.toLowerCase() === 'section') {
            continue
          }
          subHeight += parseInt(window.getComputedStyle(child).height)
        }
        // 加上tabs部分高度
        subHeight += this.getHeight('#app section.eventArea .tabs')
        return this.getHeight('#app') - subHeight
        },
        autoHeight(){
          let eventDomHeight = this.getEventDomHeight()
          this.styleObject.height = eventDomHeight + '' + 'px'
        },
        dateReset(){
          let date = new Date(this.year, this.month, this.date)
          console.log(date);
          this.selectedDay = date
        },
        onMainTouchStart(event){
          console.log('main start');
          this.startArea = 'main'
          this.startPoint = {}
          this.startPoint.x = event.changedTouches[0].clientX
          this.startPoint.y = event.changedTouches[0].clientY
        },
        onAppTouchStart(event){
          console.log('app start');
          
          this.startArea = 'app'
          this.startPoint = {}
          this.startPoint.x = event.changedTouches[0].clientX
          this.startPoint.y = event.changedTouches[0].clientY
        },
        onTouchEnd(event){
          this.endPoint.x = event.changedTouches[0].clientX
          this.endPoint.y = event.changedTouches[0].clientY
          let length = this.endPoint.x - this.startPoint.x
          let height = this.endPoint.y - this.startPoint.y
          if (length > 0 && (Math.abs(length) > Math.abs(height)) && this.startArea === 'main') {
            this.previous()
          }else if(length < 0 && (Math.abs(length) > Math.abs(height)) && this.startArea === 'main'){
            this.next()
          }else if (height > 0 && (Math.abs(length) < Math.abs(height))) {
            this.viewMode = 'month'
          }else if(height < 0 && (Math.abs(length) < Math.abs(height))){
            this.viewMode = 'week'
          }
        },
        next(){  // 根据viewMode采取对应切换方法
          if (this.viewMode === 'month') {
            this.selectedDay = datefns.addMonths(this.selectedDay, 1)
          }else if (this.viewMode === 'week') {
            this.selectedDay = datefns.addWeeks(this.selectedDay, 1)
          }
        },
        previous(){
          if (this.viewMode === 'month') {
            this.selectedDay = datefns.subMonths(this.selectedDay, 1)
          }else if (this.viewMode === 'week') {
            this.selectedDay = datefns.subWeeks(this.selectedDay, 1)
          }
        },
        changeMode(){
          if (this.viewMode === 'month') {
            this.viewMode = 'week'
          }else if(this.viewMode === 'week'){
            this.viewMode = 'month'
          }
        },
        onDayClick(event, item){
          console.log(item, this.selectedDay);
          let temp = this.selectedDay
          console.log('year', temp.getFullYear());
          console.log('month', temp.getMonth());
          console.log('date',item);
          
          this.selectedDay = new Date(temp.getFullYear(), temp.getMonth(), item)
        },
        doNothing(){},
    },

    // events部分高度动态计算
    mounted(){
      this.autoHeight()
      this.$watch('viewMode', this.autoHeight)
    },
    created(){
      
    },
    beforeMount(){
      this.today = new Date()
      this.selectedDay = new Date()
      window.app = this
    }
  }