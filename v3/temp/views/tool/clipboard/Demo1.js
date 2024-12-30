import Vue from 'vue';
import { VxeUI } from 'vxe-pc-ui';
export default Vue.extend({
    methods: {
        copyEvent() {
            if (VxeUI.clipboard.copy('复制文本到剪贴板')) {
                VxeUI.modal.message({
                    status: 'success',
                    content: '复制成功',
                    duration: 20000
                });
            }
        }
    }
});
