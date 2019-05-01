export default {
    data(){
        return {
            name: 'hehe',
            initDate: new Date(),
            now: new Date(),
            dots: undefined,
            numbers: undefined,
        }
    },
    computed: {
        hourAngle(){
            let hours = (this.now.valueOf() - this.initDate.valueOf())/ 1000/ 60/ 60 
                + this.initDate.getHours() + this.initDate.getMinutes()/ 60 + 
                this.initDate.getSeconds()/ 60/ 60
            return hours * 30 + 180
            // return this.now.getHours() % 12 * 30 + 180
        },
        minuteAngle(){
            let minutes = (this.now.valueOf() - this.initDate.valueOf()) / 1000 / 60 + 
                this.initDate.getMinutes() + this.initDate.getSeconds() / 60
            return minutes * 6 + 180
            // return this.now.getMinutes() * 6 + 180
        },
        secondAngle(){
            let seconds = (this.now.valueOf() - this.initDate.valueOf()) / 1000 + this.initDate.getSeconds()
            return seconds * 6 + 180
        },
    },
    created(){
        let dots = []
        for (let i = 0; i < 60; i++) {
            dots.push(1)
        }
        this.dots = dots
        let numbers = []
        for (let i = 0; i < 12; i++) {
            numbers.push(i + 1)
        }
        this.numbers = numbers
    },
    mounted(){
        setInterval(() => {
            this.now = new Date()
        }, 1000);
    },
}