<template>
  <div></div>
</template>

<script>
export default {
  data() {},
  methods: {
    //百度身份证识别
    getIdardInfo(fileinfo, type, img_url) {
      var fileObj = fileinfo.file;
      var reader = new FileReader();
      reader.readAsDataURL(fileObj);
      reader.onload = () => {
        this.fileData = reader.result;
        this.fileData = this.fileData.split(",");
        this.fileData = this.fileData[1];
        var form = new FormData();
        form.append("image", this.fileData);
        form.append("access_token", this.access_token.token);
        form.append("id_card_side", type);
        form.resultText = "";
        axios
          .post("/baiduApi", form, {
            headers: {
              dataType: "json",
              contentType: "application/x-www-form-urlencoded",
            },
          })
          .then((res) => {
            if (type == "front") {
              if (data["公民身份号码"].words) {

              } else {
             
              }
            } else {
              if (data["签发日期"].words) {
              
                if (data["失效日期"].words == "长期") {
                
                } else {

                }
              } else {
                this.$message.error("身份证反面识别失败，请重新上传");
              }
            }
          });
      };
    },

  },
};
</script>

<style>
</style>