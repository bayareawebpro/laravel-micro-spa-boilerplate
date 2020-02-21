export default {
    clipboard(){
        this.focus();
        this.select();
        document.execCommand('copy');
    },
}
