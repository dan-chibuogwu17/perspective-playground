let vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const el = document.createElement('textarea');
            const indicator = document.getElementById('indicator');
            el.setAttribute('readonly', '');
            el.style.width = '500px';
            el.style.position = 'absolute';
            el.style.top = '0';
            document.body.appendChild(el);
            el.value = `transform: ${this.box.transform};`;
            let textCopied = el.value;
            //copying to clipboard
            navigator.clipboard.writeText(textCopied);
            //show indicator
            indicator.removeAttribute('hidden');
            setTimeout(() =>  {
                indicator.setAttribute('hidden', '');
            }, 1000)
            document.body.removeChild(el);
        }
    },
    computed: {
     box() {
         return {
             transform: ` perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
         }
     }
    }
}).mount('#app')
