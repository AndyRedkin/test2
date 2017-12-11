// import '../system/lib';
import Vue from 'vue';
import header from '../components/main/header';
import footer from '../components/main/footer';


new Vue({
    el: '#index',
    data: {

    },
    components: {
        'header-block': header,
        'footer-block': footer
    }
});