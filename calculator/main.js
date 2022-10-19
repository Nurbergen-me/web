const { createApp } = Vue

createApp({
    data() {
        return {
            f1: 0,
            f2: 0,
            h1: 0,
            h2: 0,
            h3: 0,
            h4: 0,
            d1: 0,
            d2: '',
            d3: '',
            d4: '',
            c6: {
                total: 0,
                checked: []
            },
            c1: {
                total: 0,
                checked: []
            },
            c2: {
                total: 0,
                checked: []
            },
            c3: {
                total: 0,
                checked: []
            },
            c4: {
                total: 0,
                checked: []
            },
        }
    },

    methods: {
        getR1() {
            const val = this.h1
            return Math.round(val < 4 ? val : val < 11 ? val * 0.8 : val * 0.6)
        },

        getR2() {
            const val = this.h2
            return Math.round(val < 4 ? val : val < 11 ? val * 0.8 : val < 20 ? val * 0.6 : val * 0.6)
        },

        getR3() {
            const f1 = this.f1
            if ( f1 === 20) return f1 + this.getR1() * 20 + this.getR2() * 10 + this.h4 * 10 + this.getC6()
            if ( f1 === 140) return f1 + this.getR1() * 50 + this.getR2() * 30 + this.h4 * 20 + this.getC6()
            if ( f1 === 300) return f1 + this.getR1() * 100 + this.getR2() * 60
            return 0
        },

        getR4() {
            const f2 = this.f2
            if (f2 === 50) return f2 + this.getR1() * 50 + this.getR2() * 30
            if (f2 === 200) return f2 + this.getR1() * 80 + this.getR2() * 50
            return 0
        },

        getC6(val, isChecked) {
            const index = this.c6.checked.findIndex(x => x === val)
            if (isChecked && index < 0)
                this.c6.checked.push(val)
            if (!isChecked && index >= 0)
                this.c6.checked.splice(index, 1)
            this.c6.total = this.c6.checked.reduce((a, b) => a + b, 0)
            return this.c6.total
        },

        getC1(val, isChecked) {
            const index = this.c1.checked.findIndex(x => x === val)
            if (isChecked && index < 0)
                this.c1.checked.push(val)
            if (!isChecked && index >= 0)
                this.c1.checked.splice(index, 1)
            this.c1.total = this.c1.checked.reduce((a, b) => a + b, 0)
            return this.c1.total
        },

        getC2(val, isChecked) {
            const index = this.c2.checked.findIndex(x => x === val)
            if (isChecked && index < 0)
                this.c2.checked.push(val)
            if (!isChecked && index >= 0)
                this.c2.checked.splice(index, 1)
            this.c2.total = this.c2.checked.reduce((a, b) => a + b, 0)
            return this.c2.total
        },

        getC3(val, isChecked) {
            const index = this.c3.checked.findIndex(x => x === val)
            if (isChecked && index < 0)
                this.c3.checked.push(val)
            if (!isChecked && index >= 0)
                this.c3.checked.splice(index, 1)
            this.c3.total = this.c3.checked.reduce((a, b) => a + b, 0)
            return this.c3.total
        },

        getC4(val, isChecked) {
            const index = this.c4.checked.findIndex(x => x === val)
            if (isChecked && index < 0)
                this.c4.checked.push(val)
            if (!isChecked && index >= 0)
                this.c4.checked.splice(index, 1)
            this.c4.total = this.c4.checked.reduce((a, b) => a + b, 0)
            return this.c4.total
        },

        getR5() {
            const f2 = this.f2
            if (f2 === 50) return +this.d1 + this.h3 * 8 + this.c2.total
            if (f2 === 200) return +this.d1 + this.h3 * 8 + this.c3.total + this.c4.total
            return +this.d1 + this.h3 * 8 + this.c1.total + this.c4.total
        },

        getR6() {
           return 1000 * (this.getR3() + this.getR4() + this.getR5())
        }
    }
}).mount('#app')
